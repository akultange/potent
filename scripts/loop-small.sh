#!/bin/bash
# Makes the phone copy of every loop in public/scope and public/art: <name>-sm.mp4 next to
# <name>.mp4, 480 px wide for square loops and 960 px for wide ones. Screens under 700px wide
# play these (Journey.astro, ArtLoop.astro); run it again after any loop changes.
set -euo pipefail
cd "$(dirname "$0")/../public"
for f in scope/*.mp4 art/*.mp4; do
  case "$f" in *-sm.mp4) continue ;; esac
  IFS=x read -r w h < <(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$f")
  if [ "$w" -eq "$h" ]; then W=480; else W=960; fi
  out="${f%.mp4}-sm.mp4"
  ffmpeg -v error -y -i "$f" -vf "scale=$W:-2:flags=lanczos" -an -c:v libx264 -preset slow -crf 26 \
    -profile:v high -level 4.0 -pix_fmt yuv420p -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
    -movflags +faststart "$out.tmp.mp4"
  mv "$out.tmp.mp4" "$out"
  printf '%s %sx%s -> %s KB (was %s KB)\n' "$out" "$w" "$h" $(( $(stat -c%s "$out") / 1024 )) $(( $(stat -c%s "$f") / 1024 ))
done
