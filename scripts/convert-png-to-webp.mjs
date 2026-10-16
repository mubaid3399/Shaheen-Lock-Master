import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcAssetsDir = path.resolve(__dirname, "../src/assets");

async function getPngFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".webp") continue;
      files.push(...(await getPngFiles(fullPath)));
    } else if (entry.name.toLowerCase().endsWith(".png")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertPngToWebp() {
  const pngFiles = await getPngFiles(srcAssetsDir);
  console.log(`Found ${pngFiles.length} PNG files in src/assets...`);

  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const pngPath of pngFiles) {
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    const originalSize = (await stat(pngPath)).size;
    totalOriginalSize += originalSize;

    // Convert with Sharp
    await sharp(pngPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const webpSize = (await stat(webpPath)).size;
    totalWebpSize += webpSize;

    const savedPct = Math.round(((originalSize - webpSize) / originalSize) * 100);
    console.log(
      `Converted: ${path.relative(srcAssetsDir, pngPath)} -> ${path.relative(srcAssetsDir, webpPath)} (${Math.round(originalSize / 1024)}KB -> ${Math.round(webpSize / 1024)}KB, -${savedPct}%)`
    );
  }

  console.log(`\n========================================`);
  console.log(`Total original size: ${Math.round(totalOriginalSize / 1024)} KB`);
  console.log(`Total WebP size: ${Math.round(totalWebpSize / 1024)} KB`);
  console.log(`Total savings: ${Math.round((totalOriginalSize - totalWebpSize) / 1024)} KB (-${Math.round(((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100)}%)`);
  console.log(`========================================\n`);
}

convertPngToWebp().catch((err) => {
  console.error(err);
  process.exit(1);
});
