#!/usr/bin/env python3
"""Turns a short generated clip into a small seamless loop that sits exactly on top of its still.

    python3 -I loop.py <clip.mp4> <still> <out.mp4> <width> <height>
        [--start 0] [--end -1]      first and last source frame to use
        [--ease both|start|none]    which turning points slow down
        [--speed 1.0]               source frames per output frame at full speed
        [--thresh 14] [--grow 1.3]  how much a pixel must change to count as moving; mask growth (% of width)
        [--crf 23] [--sheet out.png] [--mask out.png]
        [--full]                    use the whole film frame (everything moves, e.g. the night)
        [--no-gain]                 keep the film's own brightness (dark pictures: the tone match
                                    goes wrong when the edges are near black)

What it does:
  1. lines the clip up with the still (the generator crops and scales by a hair);
  2. brings every frame back to the still's paper tone (the generator darkens it a little);
  3. keeps the film only where something moves and uses the sharp still everywhere else,
     so nothing shimmers and the still can cross-fade into the film without a jump;
  4. plays the range forward, then backward, slowing at the turning points, so the last
     frame meets the first.
"""
import argparse
import os
import subprocess
import sys

import cv2
import numpy as np

FPS = 24


def probe(path):
    out = subprocess.check_output(
        ['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries',
         'stream=width,height', '-of', 'csv=p=0', path]).decode().strip().split(',')
    return int(out[0]), int(out[1])


def read_frames(path):
    w, h = probe(path)
    raw = subprocess.check_output(
        ['ffmpeg', '-v', 'error', '-i', path, '-vf', 'format=rgb24', '-f', 'rawvideo', '-'])
    return np.frombuffer(raw, np.uint8).reshape(-1, h, w, 3)


def border_median(img, frac=0.04):
    h, w = img.shape[:2]
    b = max(4, int(min(h, w) * frac))
    band = np.concatenate([img[:b].reshape(-1, 3), img[-b:].reshape(-1, 3),
                           img[:, :b].reshape(-1, 3), img[:, -b:].reshape(-1, 3)])
    return np.median(band, axis=0)


def align(ref, frame0):
    """Affine that maps a point of the still to the same point of the clip's first frame."""
    h, w = ref.shape[:2]
    small = cv2.resize(frame0, (w, h), interpolation=cv2.INTER_AREA)
    g_ref = cv2.cvtColor(ref, cv2.COLOR_RGB2GRAY).astype(np.float32)
    g_clip = cv2.cvtColor(small, cv2.COLOR_RGB2GRAY).astype(np.float32)
    warp = np.eye(2, 3, dtype=np.float32)
    criteria = (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 400, 1e-7)
    cc, warp = cv2.findTransformECC(g_ref, g_clip, warp, cv2.MOTION_AFFINE, criteria, None, 5)
    # express it in the clip's own pixel grid, so each frame is resampled once
    sx, sy = frame0.shape[1] / w, frame0.shape[0] / h
    m = np.array([[sx * warp[0, 0], sx * warp[0, 1], sx * (warp[0, 2] + 0.5) - 0.5],
                  [sy * warp[1, 0], sy * warp[1, 1], sy * (warp[1, 2] + 0.5) - 0.5]], np.float32)
    return cc, warp, m


def path_positions(a, b, ease, speed, ramp=10):
    """Source positions for one forward pass from frame a to frame b."""
    r_in = ramp if ease in ('both', 'start') else 0
    r_out = ramp if ease == 'both' else 0
    k = int(round((b - a) / speed + (r_in + r_out) / 2))
    vel = np.full(k, speed, np.float64)
    for i in range(min(r_in, k)):
        vel[i] = speed * (i + 0.5) / r_in
    for i in range(min(r_out, k)):
        vel[k - 1 - i] = min(vel[k - 1 - i], speed * (i + 0.5) / r_out)
    pos = np.concatenate([[0.0], np.cumsum(vel)])
    pos = a + pos * (b - a) / pos[-1]
    return pos  # k + 1 values, a .. b


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('clip')
    ap.add_argument('still')
    ap.add_argument('out')
    ap.add_argument('width', type=int)
    ap.add_argument('height', type=int)
    ap.add_argument('--start', type=int, default=0)
    ap.add_argument('--end', type=int, default=-1)
    ap.add_argument('--ease', default='both', choices=['both', 'start', 'none'])
    ap.add_argument('--speed', type=float, default=1.0)
    ap.add_argument('--thresh', type=float, default=14.0)
    ap.add_argument('--grow', type=float, default=1.3)
    ap.add_argument('--crf', default='23')
    ap.add_argument('--sheet')
    ap.add_argument('--mask')
    ap.add_argument('--no-gain', action='store_true', help='keep the film frames as bright as they are')
    ap.add_argument('--full', action='store_true', help='use the whole film frame, no still underneath')
    args = ap.parse_args()
    W, H = args.width, args.height

    still = cv2.cvtColor(cv2.imread(args.still, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
    ref = cv2.resize(still, (W, H), interpolation=cv2.INTER_AREA)
    src = read_frames(args.clip)
    n = len(src)
    a = args.start
    b = n - 1 if args.end < 0 else min(args.end, n - 1)

    cc, warp, m = align(ref, src[0])
    ref_med = border_median(ref)

    frames = np.empty((b - a + 1, H, W, 3), np.float32)
    gains = []
    for i in range(a, b + 1):
        f = cv2.warpAffine(src[i], m, (W, H), flags=cv2.INTER_CUBIC | cv2.WARP_INVERSE_MAP,
                           borderMode=cv2.BORDER_REPLICATE).astype(np.float32)
        g = 1.0 if args.no_gain else ref_med / border_median(f)
        gains.append(g)
        frames[i - a] = np.clip(f * g, 0, 255)
    gains = np.array(gains)
    del src

    ref_f = ref.astype(np.float32)
    if args.full:
        mask = np.ones((H, W), np.float32)
    else:
        sigma = max(1.5, W / 400)
        ref_blur = cv2.GaussianBlur(ref_f, (0, 0), sigma)
        change = np.zeros((H, W), np.float32)
        for f in frames:
            d = np.abs(cv2.GaussianBlur(f, (0, 0), sigma) - ref_blur).max(axis=2)
            np.maximum(change, d, out=change)
        hard = (change > args.thresh).astype(np.uint8)
        hard = cv2.morphologyEx(hard, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
        count, labels, stats, _ = cv2.connectedComponentsWithStats(hard, connectivity=8)
        min_area = (W * H) * 0.00012
        keep = np.zeros_like(hard)
        for c in range(1, count):
            if stats[c, cv2.CC_STAT_AREA] >= min_area:
                keep[labels == c] = 1
        r = max(3, int(W * args.grow / 100))
        keep = cv2.dilate(keep, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r + 1, 2 * r + 1)))
        mask = cv2.GaussianBlur(keep.astype(np.float32), (0, 0), r * 0.55)
        mask = np.clip(mask, 0, 1)
    if args.mask:
        cv2.imwrite(args.mask, (mask * 255).astype(np.uint8))
    m3 = mask[..., None]

    fwd = path_positions(0, b - a, args.ease, args.speed)
    k = len(fwd) - 1
    order = [int(round(p)) for p in fwd[:k]] + [int(round(p)) for p in fwd[k:0:-1]]

    part = args.out + '.part.mp4'
    enc = subprocess.Popen(
        ['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}',
         '-r', str(FPS), '-i', '-', '-an',
         '-vf', 'scale=out_color_matrix=bt709:out_range=tv,format=yuv420p',
         # level 4.0 with four reference frames: plays on every phone's built-in decoder
         '-c:v', 'libx264', '-profile:v', 'high', '-level:v', '4.0', '-preset', 'veryslow', '-refs', '4',
         '-crf', str(args.crf), '-g', '600', '-keyint_min', '600', '-sc_threshold', '0',
         '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
         '-color_range', 'tv', '-movflags', '+faststart', part],
        stdin=subprocess.PIPE)
    cache = {}
    for idx in order:
        if idx not in cache:
            comp = ref_f * (1 - m3) + frames[idx] * m3
            cache[idx] = np.clip(comp + 0.5, 0, 255).astype(np.uint8).tobytes()
        enc.stdin.write(cache[idx])
    enc.stdin.close()
    if enc.wait() != 0:
        sys.exit('encode failed')
    os.replace(part, args.out)

    if args.sheet:
        picks = [order[int(i * (len(order) - 1) / 11)] for i in range(12)]
        cell_w = 480 if W == H else 640
        cell_h = int(cell_w * H / W)
        sheet = np.zeros((cell_h * 3, cell_w * 4, 3), np.uint8)
        for j, idx in enumerate(picks):
            comp = np.clip(ref_f * (1 - m3) + frames[idx] * m3, 0, 255).astype(np.uint8)
            cell = cv2.resize(comp, (cell_w, cell_h), interpolation=cv2.INTER_AREA)
            y, x = (j // 4) * cell_h, (j % 4) * cell_w
            sheet[y:y + cell_h, x:x + cell_w] = cell
        cv2.imwrite(args.sheet, cv2.cvtColor(sheet, cv2.COLOR_RGB2BGR))

    first = np.clip(ref_f * (1 - m3) + frames[order[0]] * m3, 0, 255)
    print(f'{os.path.basename(args.out)}: frames {a}..{b} of {n}, {len(order)} out '
          f'({len(order) / FPS:.1f} s) | fit {cc:.4f}, scale {warp[0, 0]:.4f}/{warp[1, 1]:.4f}, '
          f'shift {warp[0, 2]:+.2f}/{warp[1, 2]:+.2f} px | gain {np.min(gains):.3f}..{np.max(gains):.3f} | '
          f'moving {mask.mean() * 100:.1f}% | first frame vs still {np.abs(first - ref_f).mean():.2f} | '
          f'{os.path.getsize(args.out) / 1024:.0f} KB')


if __name__ == '__main__':
    main()
