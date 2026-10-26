// Padroniza as fotos: recorta no formato usado no site, reduz o tamanho e comprime.
// Uso: npm run fotos
// Os originais ficam guardados em fotos-originais/ (pasta ignorada pelo Git).
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS = 'src/assets';
const BACKUP = 'fotos-originais';
const EXT = /\.(jpe?g|png|webp)$/i;

// pasta, largura máxima e proporção do recorte (largura / altura)
const JOBS = [
  { dir: 'produtos', maxWidth: 1000, ratio: 1 }, // quadrado
  { dir: 'lojas', maxWidth: 1600, ratio: 1.6 }, // 16:10
];

const kb = (n) => `${Math.round(n / 1024)} KB`;

for (const { dir, maxWidth, ratio } of JOBS) {
  const folder = path.join(ASSETS, dir);
  const files = (await fs.readdir(folder).catch(() => [])).filter((f) => EXT.test(f));
  const done = new Set((await fs.readdir(path.join(BACKUP, dir)).catch(() => [])).map((f) => path.parse(f).name));

  for (const file of files) {
    const base = path.parse(file).name;
    if (done.has(base)) {
      console.log(`pulada  ${dir}/${file} (já preparada)`);
      continue;
    }
    const src = path.join(folder, file);
    await fs.mkdir(path.join(BACKUP, dir), { recursive: true });
    await fs.copyFile(src, path.join(BACKUP, dir, file));

    const rotated = await sharp(src).rotate().toBuffer();
    const { width, height } = await sharp(rotated).metadata();
    const w = Math.floor(Math.min(maxWidth, width, height * ratio));
    const h = Math.floor(w / ratio);
    const data = await sharp(rotated)
      .resize(w, h, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();

    const before = (await fs.stat(src)).size;
    const out = path.join(folder, `${base}.jpg`);
    await fs.writeFile(out, data);
    if (path.resolve(out) !== path.resolve(src)) await fs.unlink(src);
    console.log(`ok      ${dir}/${file}  ${width}x${height} ${kb(before)}  ->  ${w}x${h} ${kb(data.length)}`);
  }
}
console.log('\nPronto. Originais guardados em fotos-originais/.');
