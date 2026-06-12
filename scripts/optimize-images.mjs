#!/usr/bin/env node
/**
 * Compresses images in src/assets for faster loads.
 * Run: pnpm run optimize:images
 */
import { readdir, stat, mkdir, rename, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");
const webpDir = path.resolve(assetsDir, ".webp");

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".webp") continue;
      files.push(...(await walk(fullPath)));
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const relative = path.relative(assetsDir, filePath);
  const webpOut = path.join(webpDir, relative.replace(/\.(png|jpe?g)$/i, ".webp"));

  await mkdir(path.dirname(webpOut), { recursive: true });

  const image = sharp(filePath);
  const meta = await image.metadata();
  const maxWidth = relative.includes("brands/") ? 256 : relative.includes("customer-") ? 256 : 1920;

  const resized = image.resize({
    width: meta.width && meta.width > maxWidth ? maxWidth : undefined,
    withoutEnlargement: true,
  });

  const tempPath = `${filePath}.tmp`;

  if (ext === ".png") {
    await resized.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(tempPath);
  } else {
    await resized.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
  }

  await resized.clone().webp({ quality: 82 }).toFile(webpOut);

  const before = (await stat(filePath)).size;
  const after = (await stat(tempPath)).size;

  if (after < before) {
    await unlink(filePath);
    await rename(tempPath, filePath);
  } else {
    await unlink(tempPath);
  }

  const webpSize = (await stat(webpOut)).size;
  console.log(`✓ ${relative} → saved ${Math.max(0, before - after)} B | webp ${webpSize} B`);
}

async function main() {
  try {
    await stat(assetsDir);
  } catch {
    console.warn("src/assets not found — skipping image optimization.");
    return;
  }

  const files = await walk(assetsDir);
  if (files.length === 0) {
    console.log("No images found in src/assets.");
    return;
  }
  for (const file of files) {
    await optimizeFile(file);
  }
  console.log("\nDone. WebP copies are in src/assets/.webp/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
