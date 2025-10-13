// Post-build optimization script
// Minifies HTML files in dist directory after Vite build
// Run with: node scripts/post-build-optimize.js

import { minify } from 'html-minifier-terser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');

console.log('🚀 Starting post-build optimization...\n');

// HTML minification options
const htmlMinifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeOptionalTags: false,
  sortAttributes: true,
  sortClassName: true,
};

// Find all HTML files in dist
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Minify HTML files
async function optimizeHtml() {
  const htmlFiles = findHtmlFiles(distDir);
  
  if (htmlFiles.length === 0) {
    console.log('⚠️  No HTML files found in dist/');
    return;
  }
  
  console.log(`📄 Found ${htmlFiles.length} HTML file(s) to optimize\n`);
  
  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  
  for (const htmlFile of htmlFiles) {
    try {
      const relativePath = path.relative(distDir, htmlFile);
      const content = fs.readFileSync(htmlFile, 'utf8');
      const sizeBefore = Buffer.byteLength(content, 'utf8');
      
      // Minify HTML
      const minified = await minify(content, htmlMinifyOptions);
      const sizeAfter = Buffer.byteLength(minified, 'utf8');
      
      // Write minified content back
      fs.writeFileSync(htmlFile, minified, 'utf8');
      
      totalSizeBefore += sizeBefore;
      totalSizeAfter += sizeAfter;
      
      const savings = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
      
      console.log(`✅ ${relativePath}`);
      console.log(`   ${(sizeBefore / 1024).toFixed(2)} KB → ${(sizeAfter / 1024).toFixed(2)} KB (${savings}% reduction)\n`);
      
    } catch (error) {
      console.error(`❌ Failed to minify ${htmlFile}:`, error.message);
    }
  }
  
  // Summary
  console.log('═'.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('═'.repeat(60));
  console.log(`📄 Total HTML files: ${htmlFiles.length}`);
  console.log(`📦 Size before: ${(totalSizeBefore / 1024).toFixed(2)} KB`);
  console.log(`📦 Size after: ${(totalSizeAfter / 1024).toFixed(2)} KB`);
  
  if (totalSizeBefore > 0) {
    const totalSavings = ((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(1);
    console.log(`💾 Total savings: ${((totalSizeBefore - totalSizeAfter) / 1024).toFixed(2)} KB (${totalSavings}%)`);
  }
  console.log('═'.repeat(60));
}

// Run optimization
optimizeHtml()
  .then(() => {
    console.log('\n✨ Post-build optimization complete!\n');
  })
  .catch(error => {
    console.error('\n❌ Optimization failed:', error);
    process.exit(1);
  });

