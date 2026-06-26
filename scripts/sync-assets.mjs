import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const assetsDir = path.join(repoRoot, "assets");
const publicDir = path.join(repoRoot, "public");

const downloadsDest = path.join(publicDir, "downloads");
const productsDest = path.join(publicDir, "images/products");
const brandDest = path.join(publicDir, "images/brand");

for (const dir of [downloadsDest, productsDest, brandDest]) {
  fs.mkdirSync(dir, { recursive: true });
}

function slugify(name) {
  return name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9._-]/g, "");
}

// Brand logo from source assets
const assetLogo = path.join(assetsDir, "image.png");

if (fs.existsSync(assetLogo)) {
  fs.copyFileSync(assetLogo, path.join(brandDest, "logo.png"));
  console.log("Copied logo.png from assets");
}

// PDFs
for (const file of fs.readdirSync(assetsDir)) {
  if (!file.toLowerCase().endsWith(".pdf")) continue;
  const destName = slugify(file);
  fs.copyFileSync(path.join(assetsDir, file), path.join(downloadsDest, destName));
  console.log(`PDF: ${destName}`);
}

// Images
const imageSources = [
  assetsDir,
  path.join(assetsDir, "images"),
];

for (const srcDir of imageSources) {
  if (!fs.existsSync(srcDir)) continue;
  for (const file of fs.readdirSync(srcDir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const destName = slugify(file);
    fs.copyFileSync(path.join(srcDir, file), path.join(productsDest, destName));
    console.log(`Image: ${destName}`);
  }
}

console.log("Asset sync complete");

// Radiology images are maintained in public/images/radiology/ (already populated).
