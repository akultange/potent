// Makes the small copies of the project screenshots that the "Everything digital" section shows
// under its tiles: public/work/<name>.* -> public/scope/work/<name>.webp (640 x 400, cut from the
// top like the tiles in "Selected work").
//
//   node scripts/scope-thumbs.mjs
//
// Run it after adding or replacing a screenshot in public/work/. If a small copy is missing, the
// section falls back to the full screenshot, so nothing breaks; the page is just heavier.
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = path.join(root, 'public/work');
const to = path.join(root, 'public/scope/work');

await mkdir(to, { recursive: true });
for (const file of (await readdir(from)).sort()) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const out = path.join(to, `${path.parse(file).name}.webp`);
  const info = await sharp(path.join(from, file))
    .resize(640, 400, { fit: 'cover', position: 'top' })
    .webp({ quality: 78 })
    .toFile(out);
  console.log(`${file} -> scope/work/${path.basename(out)} (${Math.round(info.size / 1024)} KB)`);
}
