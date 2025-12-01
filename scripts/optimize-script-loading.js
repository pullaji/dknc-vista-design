// Optimize script loading with defer and async attributes
// Run with: node scripts/optimize-script-loading.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const htmlFile = path.join(distDir, 'index.html');

console.log('🚀 Optimizing script loading...\n');

if (!fs.existsSync(htmlFile)) {
  console.error('❌ Error: dist/index.html not found');
  console.error('Run "npm run build" first\n');
  process.exit(1);
}

let html = fs.readFileSync(htmlFile, 'utf8');
const originalSize = Buffer.byteLength(html, 'utf8');
let modifications = 0;

// Note: ES modules (type="module") are deferred by default
// But we can add explicit defer for clarity and non-module scripts

// 1. Add defer to regular script tags (non-module)
html = html.replace(
  /<script(?!\s+type="module")([^>]*)src="([^"]+)"([^>]*)>(?![\s\S]*defer)/gi,
  (match, before, src, after) => {
    if (!match.includes('defer') && !match.includes('async')) {
      modifications++;
      return `<script${before}src="${src}"${after} defer>`;
    }
    return match;
  }
);

// 2. Add preload hints for important scripts
const scriptPattern = /<script[^>]+src="([^"]+)"[^>]*>/gi;
const scripts = [];
let match;

while ((match = scriptPattern.exec(html)) !== null) {
  scripts.push(match[1]);
}

// Add preload hints in the head for critical scripts
if (scripts.length > 0 && !html.includes('<link rel="preload"')) {
  const preloadHints = scripts
    .filter(src => src.includes('vendor') || src.includes('index'))
    .map(src => `    <link rel="preload" href="${src}" as="script" crossorigin>`)
    .join('\n');
  
  if (preloadHints) {
    html = html.replace('</head>', `${preloadHints}\n  </head>`);
    modifications++;
  }
}

// 3. Add resource hints for better performance
if (!html.includes('<link rel="dns-prefetch"')) {
  const resourceHints = `    <!-- Resource Hints for Performance -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
`;
  
  html = html.replace('</head>', `${resourceHints}  </head>`);
  modifications++;
}

// Write the optimized HTML
fs.writeFileSync(htmlFile, html, 'utf8');
const newSize = Buffer.byteLength(html, 'utf8');

console.log('✅ Script loading optimized!\n');
console.log('📊 Optimizations Applied:');
console.log(`   - Modifications: ${modifications}`);
console.log(`   - Scripts found: ${scripts.length}`);
console.log(`   - Size: ${(originalSize / 1024).toFixed(2)} KB → ${(newSize / 1024).toFixed(2)} KB\n`);

console.log('⚡ Performance Benefits:');
console.log('   - Scripts won\'t block HTML parsing');
console.log('   - Preload hints for critical resources');
console.log('   - DNS prefetch for external resources');
console.log('   - Better parallel resource loading\n');

console.log('✨ Done!\n');

