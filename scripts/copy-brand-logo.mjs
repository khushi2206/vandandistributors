import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import os from "node:os";

const repoRoot = path.resolve(import.meta.dirname, "..");
const assetsDir = path.join(repoRoot, "assets");
const brandDest = path.join(repoRoot, "public/images/brand");
const svgDest = path.join(repoRoot, "public/images/vandan-logo.svg");

fs.mkdirSync(brandDest, { recursive: true });

const directCandidates = ["logo.svg", "vandan-logo.svg"];

for (const file of directCandidates) {
  const src = path.join(assetsDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, svgDest);
    console.log(`Copied ${file} -> ${svgDest}`);
    process.exit(0);
  }
}

const assetLogo = path.join(assetsDir, "image.png");
if (fs.existsSync(assetLogo)) {
  fs.copyFileSync(assetLogo, path.join(brandDest, "logo.png"));
  console.log("Copied logo.png -> public/images/brand/logo.png");
}

const ppt = path.join(assetsDir, "Accurate PPT.pptx");
if (!fs.existsSync(ppt)) {
  console.warn("No brand logo SVG or Accurate PPT.pptx found in assets/");
  process.exit(0);
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "vandan-ppt-"));
const zipCopy = path.join(tmpDir, "accurate-ppt.zip");
const extractDir = path.join(tmpDir, "extract");

try {
  fs.copyFileSync(ppt, zipCopy);
  fs.mkdirSync(extractDir, { recursive: true });

  execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `Expand-Archive -Path '${zipCopy.replace(/'/g, "''")}' -DestinationPath '${extractDir.replace(/'/g, "''")}' -Force`,
    ],
    { stdio: "inherit" }
  );

  const logoFromPpt = path.join(extractDir, "ppt/media/image1.svg");
  if (fs.existsSync(logoFromPpt)) {
    fs.copyFileSync(logoFromPpt, svgDest);
    console.log(`Extracted logo from PPT -> ${svgDest}`);
  } else {
    console.warn("No SVG logo found inside Accurate PPT.pptx");
  }
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
