// Simple image compression script
// Run with: node scripts/compress-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is a basic script to identify large images
// For actual compression, you'd need to install sharp or similar

const assetsDir = path.join(__dirname, '../public/assets');

function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

function findLargeImages(dir, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findLargeImages(filePath, results);
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      const sizeInMB = getFileSizeInMB(filePath);
      if (parseFloat(sizeInMB) > 2) { // Files larger than 2MB
        results.push({
          path: filePath.replace(process.cwd(), ''),
          size: `${sizeInMB}MB`
        });
      }
    }
  }
  
  return results;
}

console.log('🔍 Scanning for large images...\n');

const largeImages = findLargeImages(assetsDir);

if (largeImages.length > 0) {
  console.log('⚠️  Found large images that should be compressed:\n');
  largeImages.forEach(img => {
    console.log(`📁 ${img.path} - ${img.size}`);
  });
  
  console.log('\n💡 Recommendations:');
  console.log('1. Compress images to under 500KB each');
  console.log('2. Use WebP format for better compression');
  console.log('3. Resize images to appropriate dimensions');
  console.log('4. Consider using a CDN for image delivery');
} else {
  console.log('✅ No large images found!');
}

console.log(`\n📊 Total images scanned: ${largeImages.length}`);
