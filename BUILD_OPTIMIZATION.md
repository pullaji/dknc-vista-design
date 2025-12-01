# Build Optimization Guide

Complete guide for optimizing and building your production-ready application.

## 🚀 Build Commands

### Standard Production Build
```bash
npm run build
```
This will:
1. Run Vite build with minification
2. Minify HTML files
3. Generate gzip and brotli compressed files

### Full Production Build (with image optimization)
```bash
npm run build:prod
```
This will:
1. Convert all images to WebP format
2. Run Vite build with enhanced minification
3. Minify HTML files
4. Generate compressed assets

### Development Build
```bash
npm run build:dev
```
Build without minification for debugging.

## 📊 Optimization Features

### 1. JavaScript Minification
**Tool:** Terser (via Vite)

**Features:**
- Remove console.log statements
- Remove comments
- Mangle variable names
- Dead code elimination
- Tree shaking

**Config:** `vite.config.ts`

### 2. CSS Minification
**Tool:** Vite built-in + clean-css

**Features:**
- Remove whitespace
- Combine selectors
- Optimize colors
- Remove unused CSS (via Tailwind purge)

### 3. HTML Minification
**Tool:** html-minifier-terser

**Features:**
- Remove whitespace
- Remove comments
- Minify inline CSS/JS
- Remove optional tags
- Sort attributes

**Command:**
```bash
npm run minify:html
```

### 4. Image Optimization
**Tool:** imagemin + imagemin-webp

**Features:**
- Convert to WebP format
- 80-90% size reduction
- Preserve quality
- Keep directory structure

**Command:**
```bash
npm run batch-convert [quality]
```

**Example:**
```bash
npm run batch-convert 80
```

### 5. Compression
**Tool:** vite-plugin-compression

**Formats:**
- **Gzip** (.gz) - Universal support
- **Brotli** (.br) - Better compression, modern browsers

**Threshold:** 10KB (only compress files larger than 10KB)

## 📦 Output Structure

After build, your `dist/` folder contains:

```
dist/
├── index.html (minified)
├── assets/
│   ├── index-[hash].js (minified)
│   ├── index-[hash].js.gz (gzip compressed)
│   ├── index-[hash].js.br (brotli compressed)
│   ├── index-[hash].css (minified)
│   ├── index-[hash].css.gz
│   ├── index-[hash].css.br
│   ├── react-vendor-[hash].js (code-split vendor chunk)
│   └── ui-vendor-[hash].js
└── assets/ (images, fonts, etc.)
```

## 🎯 Code Splitting Strategy

### Vendor Chunks
Large vendor libraries are split into separate chunks:

1. **react-vendor** - React core libraries
   - react
   - react-dom
   - react-router-dom

2. **ui-vendor** - UI component libraries
   - @radix-ui components

**Benefits:**
- Faster initial load
- Better caching (vendor code changes less frequently)
- Parallel downloads

## 📈 Performance Optimizations

### 1. Remove Console Logs
Production builds automatically remove:
- `console.log()`
- `console.info()`
- `console.debug()`
- `debugger` statements

### 2. Tree Shaking
Unused code is automatically removed during build.

### 3. CSS Code Splitting
CSS is split per route/component for optimal loading.

### 4. Asset Optimization
- Images converted to WebP
- Lazy loading images
- Responsive images via `<picture>` element

## 🔍 Build Analysis

### Check Bundle Size
```bash
npm run build:analyze
```

### Manually Inspect
After build, check file sizes:
```bash
# Windows PowerShell
Get-ChildItem dist -Recurse | Select-Object Name, Length | Sort-Object Length -Descending

# Unix/Mac
du -sh dist/*
```

## 🌐 Server Configuration

### Nginx
Serve pre-compressed files:

```nginx
location / {
    gzip_static on;
    brotli_static on;
}
```

### Apache
```apache
# Serve pre-compressed files
<IfModule mod_headers.c>
    RewriteCond %{HTTP:Accept-encoding} br
    RewriteCond %{REQUEST_FILENAME}.br -f
    RewriteRule ^(.*)$ $1.br [QSA,L]
</IfModule>
```

### Vercel/Netlify
Automatically serves brotli/gzip files when available.

## 📊 Expected Results

### Before Optimization
- Total bundle size: ~500-800 KB
- Images: 120 MB
- HTML: ~5-10 KB

### After Full Optimization
- Total bundle size: ~200-400 KB (gzipped: ~80-150 KB)
- Images: 14 MB (WebP)
- HTML: ~2-5 KB
- **Overall reduction: 85-90%**

## 🎯 Best Practices

1. **Always run image optimization before building:**
   ```bash
   npm run batch-convert
   ```

2. **Use the production build for deployment:**
   ```bash
   npm run build:prod
   ```

3. **Test locally before deploying:**
   ```bash
   npm run build
   npm run preview
   ```

4. **Monitor bundle size:**
   - Keep vendor chunks under 500KB
   - Keep route chunks under 200KB
   - Use code splitting for large components

5. **Lazy load heavy components:**
   ```tsx
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   ```

## 🔧 Customization

### Adjust Terser Options
Edit `vite.config.ts`:

```ts
terserOptions: {
  compress: {
    drop_console: false, // Keep console.logs
    pure_funcs: [], // Don't remove any functions
  },
}
```

### Adjust HTML Minification
Edit `scripts/post-build-optimize.js`:

```js
const htmlMinifyOptions = {
  collapseWhitespace: true,
  removeComments: false, // Keep comments
  // ... other options
};
```

### Adjust Image Quality
```bash
npm run batch-convert 90  # Higher quality (larger files)
npm run batch-convert 70  # Lower quality (smaller files)
```

## 🐛 Troubleshooting

### Build fails with memory error
Increase Node.js memory:
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Images not loading
Ensure WebP files exist alongside originals, or use the OptimizedImage component.

### Bundle too large
- Check for duplicate dependencies
- Use code splitting
- Lazy load components
- Remove unused dependencies

## 📝 Checklist Before Deployment

- [ ] Run `npm run batch-convert` to optimize images
- [ ] Run `npm run build:prod` for production build
- [ ] Test with `npm run preview`
- [ ] Check bundle sizes in `dist/assets/`
- [ ] Verify all images load correctly
- [ ] Test in different browsers
- [ ] Check Lighthouse score (aim for 90+)
- [ ] Verify gzip/brotli files are generated
- [ ] Test on mobile devices

---

## 🎉 Quick Start

For most deployments, simply run:

```bash
npm run build:prod
```

This handles everything:
✅ Image optimization
✅ JavaScript minification
✅ CSS minification
✅ HTML minification
✅ Compression (gzip + brotli)
✅ Code splitting

