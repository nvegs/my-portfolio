import fs from "fs";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const SOURCE = "public/branding/icon.png";
const OUT = [
  ["app/icon.png", 512],
  ["app/apple-icon.png", 180],
  ["public/favicon-16x16.png", 16],
  ["public/favicon-32x32.png", 32],
  ["public/apple-touch-icon.png", 180],
];

for (const [dest, size] of OUT) {
  await sharp(SOURCE).resize(size, size).png().toFile(dest);
}

const ico = await pngToIco([
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
]);
fs.writeFileSync("app/favicon.ico", ico);
fs.writeFileSync("public/favicon.ico", ico);
console.log("Favicons generated from avatar-only logo:", SOURCE);
