// Convert images to WebP format
// Usage: node scripts/convert-to-webp.js <input> <output> [quality]
// Example: node scripts/convert-to-webp.js image.jpg image.webp 75

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs';

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: node scripts/convert-to-webp.js <input> <output> [quality]');
  console.log('Example: node scripts/convert-to-webp.js image.jpg image.webp 75');
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1];
const quality = args[2] ? parseInt(args[2]) : 75;

if (!fs.existsSync(inputFile)) {
  console.error(`Error: Input file "${inputFile}" not found`);
  process.exit(1);
}

const inputDir = path.dirname(inputFile);
const inputFileName = path.basename(inputFile);
const outputDir = path.dirname(outputFile);

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir) && outputDir !== '.') {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Converting ${inputFile} to WebP format...`);
console.log(`Quality: ${quality}`);

try {
  await imagemin([inputFile], {
    destination: outputDir,
    plugins: [
      imageminWebp({ quality: quality })
    ]
  });

  // Rename the output file if needed
  const tempOutput = path.join(outputDir, inputFileName.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  if (tempOutput !== outputFile && fs.existsSync(tempOutput)) {
    fs.renameSync(tempOutput, outputFile);
  }

  console.log(`✅ Successfully converted to ${outputFile}`);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}

