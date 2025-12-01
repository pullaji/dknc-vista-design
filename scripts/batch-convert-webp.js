// Batch convert images to WebP while preserving directory structure
// Usage: node scripts/batch-convert-webp.js [quality]
// Example: node scripts/batch-convert-webp.js 80

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const quality = parseInt(process.argv[2]) || 80;
const sourceDir = path.join(__dirname, '../public/assets');

console.log(`🚀 Starting batch WebP conversion...`);
console.log(`📁 Source: ${sourceDir}`);
console.log(`🎨 Quality: ${quality}\n`);

// Recursively find all image files
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Convert images preserving directory structure
async function convertImages() {
  const imageFiles = findImages(sourceDir);
  
  if (imageFiles.length === 0) {
    console.log('❌ No images found to convert');
    return;
  }
  
  console.log(`📊 Found ${imageFiles.length} images to convert\n`);
  
  let converted = 0;
  let skipped = 0;
  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  
  for (const imagePath of imageFiles) {
    try {
      const relativePath = path.relative(sourceDir, imagePath);
      const outputPath = path.dirname(imagePath);
      const inputFileName = path.basename(imagePath);
      const outputFileName = inputFileName.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
      const fullOutputPath = path.join(outputPath, outputFileName);
      
      // Skip if WebP already exists
      if (fs.existsSync(fullOutputPath)) {
        console.log(`⏭️  Skipped (exists): ${relativePath}`);
        skipped++;
        continue;
      }
      
      // Get original file size
      const originalSize = fs.statSync(imagePath).size;
      totalSizeBefore += originalSize;
      
      // Convert to WebP
      await imagemin([imagePath], {
        destination: outputPath,
        plugins: [
          imageminWebp({ quality: quality })
        ]
      });
      
      // Get converted file size
      const convertedSize = fs.existsSync(fullOutputPath) 
        ? fs.statSync(fullOutputPath).size 
        : originalSize;
      totalSizeAfter += convertedSize;
      
      const savings = ((originalSize - convertedSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ Converted: ${relativePath}`);
      console.log(`   ${(originalSize / 1024).toFixed(1)} KB → ${(convertedSize / 1024).toFixed(1)} KB (${savings}% savings)`);
      converted++;
      
    } catch (error) {
      console.error(`❌ Failed to convert ${imagePath}:`, error.message);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📈 CONVERSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Converted: ${converted} images`);
  console.log(`⏭️  Skipped: ${skipped} images`);
  console.log(`📦 Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Total size after: ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
  
  if (totalSizeBefore > 0) {
    const totalSavings = ((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(1);
    console.log(`💾 Total savings: ${((totalSizeBefore - totalSizeAfter) / 1024 / 1024).toFixed(2)} MB (${totalSavings}%)`);
  }
  console.log('='.repeat(60));
  console.log('\n✨ Done!');
}

convertImages().catch(console.error);

