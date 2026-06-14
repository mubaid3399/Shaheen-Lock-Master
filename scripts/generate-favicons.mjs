import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceImage = path.resolve(__dirname, "../src/assets/shaheen-icon.png");
const publicDir = path.resolve(__dirname, "../public");

async function main() {
  console.log("Generating favicons from:", sourceImage);
  
  const targets = [
    { name: "favicon.png", size: 32 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-16x16.png", size: 16 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 },
  ];

  for (const target of targets) {
    const destPath = path.join(publicDir, target.name);
    await sharp(sourceImage)
      .resize(target.size, target.size)
      .png()
      .toFile(destPath);
    console.log(`Created: ${target.name} (${target.size}x${target.size})`);
  }

  console.log("Favicons generated successfully!");
}

main().catch(console.error);
