// Extract and inline critical CSS for above-the-fold content
// Run with: node scripts/extract-critical-css.js

import { generate as critical } from 'critical';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const htmlFile = path.join(distDir, 'index.html');

console.log('🚀 Extracting critical CSS...\n');
console.log(`📄 Processing: ${htmlFile}`);
console.log(`📐 Viewport: 1300x900\n`);

const options = {
  base: distDir,
  src: htmlFile,
  target: htmlFile,
  width: 1300,
  height: 900,
  inline: {
    minify: true,
    extract: true,
  },
  dimensions: [
    {
      width: 375,
      height: 667,
    },
    {
      width: 768,
      height: 1024,
    },
    {
      width: 1300,
      height: 900,
    },
  ],
  penthouse: {
    timeout: 60000,
    renderWaitTime: 1000,
    maxEmbeddedBase64Length: 1000,
    forceInclude: [
      // Force include important Tailwind/custom classes
      '.bg-*',
      '.text-*',
      '.flex',
      '.grid',
      '.animate-*',
    ],
  },
};

critical(options)
  .then((output) => {
    console.log('✅ Critical CSS extracted successfully!\n');
    console.log('📊 Results:');
    console.log(`   - Critical CSS inlined in HTML`);
    console.log(`   - Remaining CSS extracted to load asynchronously`);
    console.log(`   - Optimized for multiple viewport sizes\n`);
    console.log('✨ Done!\n');
  })
  .catch((err) => {
    console.error('❌ Error extracting critical CSS:', err.message);
    console.error('\nTip: Make sure you have run "npm run build" first\n');
    process.exit(1);
  });

