#!/bin/bash
# Makes the film that plays above the headline on phones: public/hero/one-point-phone.mp4 and
# its first frame, public/hero/one-point-phone.webp (shown until the film starts, and instead of
# it where a phone will not play video).
#
# It is a cut of Luka's film "One Point" (https://skhiladze.com/media/film/onepoint.mp4, 1280x720,
# 30 fps): only the shots without words, in the film's own order, joined with short dissolves into
# one loop that starts and ends on the glowing cube, so it repeats without a seam.
#
#   scripts/hero-phone.sh path/to/onepoint.mp4
#
# Needs ffmpeg with libx264 and libwebp. To change the cut, edit the frame numbers below: each
# shot is [from, to) in frames of the source, and the last shot must end on the frame the first
# one starts with. A dissolve's "offset" is the length of everything before it minus its own
# duration.
set -euo pipefail
SRC=${1:?the path to onepoint.mp4}
OUT=$(cd "$(dirname "$0")/.." && pwd)/public/hero
mkdir -p "$OUT"

W=960 # a 4:3 window: the film's full height and the middle of its width
H=720
X=160 # the window's left edge for the centred shots; the ink and circle shot sits left, at 0
# The cube shot carries a small caption ("TESSERACT 16 V / 32 E ...") that the window's right edge
# would cut in half: it is painted out, only while it shows.
LABEL=x=860:y=626:w=99:h=44

ffmpeg -v error -y -i "$SRC" -filter_complex "
[0:v]fps=30,format=yuv420p,split=5[a][b][c][d][e];
[a]trim=start_frame=1230:end_frame=1335,setpts=PTS-STARTPTS,crop=$W:$H:$X:0,delogo=$LABEL:enable='lt(t,2.2)',settb=AVTB[cube];
[b]trim=start_frame=1425:end_frame=1439,setpts=PTS-STARTPTS,crop=$W:$H:$X:0,settb=AVTB[point];
[c]trim=start_frame=15:end_frame=273,setpts=PTS-STARTPTS,crop=$W:$H:$X:0,settb=AVTB[line];
[d]trim=start_frame=341:end_frame=549,setpts=PTS-STARTPTS,crop=$W:$H:0:0,settb=AVTB[plane];
[e]trim=start_frame=1116:end_frame=1230,setpts=PTS-STARTPTS,crop=$W:$H:$X:0,delogo=$LABEL:enable='gt(t,1.8)',settb=AVTB[block];
[cube][point]xfade=transition=fade:duration=0.3:offset=3.2[x1];
[x1][line]xfade=transition=fade:duration=0.2:offset=3.4667[x2];
[x2][plane]xfade=transition=fade:duration=0.3333:offset=11.7333[x3];
[x3][block]xfade=transition=fade:duration=0.3:offset=18.3667[x4];
[x4]scale=720:-2:flags=lanczos[v]" \
  -map "[v]" -an -c:v libx264 -preset veryslow -crf 28 -maxrate 560k -bufsize 1120k \
  -profile:v high -level 4.0 -refs 4 -pix_fmt yuv420p \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 -movflags +faststart "$OUT/one-point-phone.tmp.mp4"
mv "$OUT/one-point-phone.tmp.mp4" "$OUT/one-point-phone.mp4"

# The still is the film's own first frame, so nothing jumps when the film takes over.
ffmpeg -v error -y -i "$OUT/one-point-phone.mp4" -frames:v 1 -c:v libwebp -quality 88 -compression_level 6 "$OUT/one-point-phone.webp"
ls -l "$OUT"
