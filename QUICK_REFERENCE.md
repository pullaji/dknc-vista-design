# ⚡ Quick Reference Card

Your complete command cheat sheet for building and optimizing.

---

## 🏗️ Development

```bash
npm run dev              # Start development server (localhost:8080)
```

---

## 🚀 Build Commands

```bash
# Standard build
npm run build            # Build + minify HTML

# Full production (RECOMMENDED)
npm run build:prod       # Convert images + Build + Minify all

# Development build
npm run build:dev        # Build without minification

# Preview
npm run preview          # Preview production build locally
```

---

## 🖼️ Image Optimization

```bash
# Convert all images to WebP (preserves structure)
npm run batch-convert          # Default quality 80
npm run batch-convert 90       # Custom quality

# Convert single image
npm run convert-webp input.jpg output.webp 75

# Alternative batch (flattens structure)
npm run optimize-images
```

---

## 🗜️ Minification (Manual)

```bash
# Minify HTML only
npm run minify:html

# Minify CSS
npm run minify:css

# Minify JS
npm run minify:js

# Extract and inline critical CSS
npm run critical-css
```

---

## 📊 What Each Command Does

### `npm run build:prod` ⭐ (Recommended)
1. Converts all images to WebP (88% smaller)
2. Builds with Vite (minifies JS/CSS)
3. Removes console.logs
4. Code splits into chunks
5. Creates gzip files (.gz)
6. Creates brotli files (.br)
7. Minifies HTML (removes whitespace/comments)
8. Extracts and inlines critical CSS (faster First Paint)

**Result:** Production-ready optimized build in `dist/`

### `npm run build`
Same as above but **skips image conversion**

### `npm run batch-convert`
Converts JPG/PNG → WebP while preserving folder structure

---

## 🎯 Typical Workflow

### First Time Setup
```bash
# 1. Install dependencies
npm install

# 2. Convert existing images
npm run batch-convert 80

# 3. Start development
npm run dev
```

### Adding New Images
```bash
# 1. Add images to public/assets/
# 2. Convert to WebP
npm run batch-convert

# 3. Use OptimizedImage component in React
```

### Deploying
```bash
# 1. Full production build
npm run build:prod

# 2. Test locally
npm run preview

# 3. Check dist/ folder
# 4. Deploy dist/ to your hosting
```

---

## 📦 Output Files After Build

```
dist/
├── index.html                      # Minified HTML
├── assets/
│   ├── index-[hash].css           # Minified CSS
│   ├── index-[hash].css.gz        # Gzipped CSS
│   ├── index-[hash].css.br        # Brotli CSS
│   ├── index-[hash].js            # Minified main JS
│   ├── index-[hash].js.gz         # Gzipped JS
│   ├── index-[hash].js.br         # Brotli JS
│   ├── react-vendor-[hash].js     # React libs (code-split)
│   ├── react-vendor-[hash].js.gz
│   ├── react-vendor-[hash].js.br
│   ├── ui-vendor-[hash].js        # UI libs (code-split)
│   ├── ui-vendor-[hash].js.gz
│   └── ui-vendor-[hash].js.br
└── assets/
    └── (your images, fonts, etc.)
```

---

## 🎨 React Components

### Import
```tsx
import OptimizedImage from '@/components/OptimizedImage';
import OptimizedImageWithLoader from '@/components/OptimizedImageWithLoader';
```

### Basic Usage
```tsx
<OptimizedImage 
  src="/assets/photo.jpg"
  alt="Description"
  loading="lazy"
/>
```

### Advanced Usage
```tsx
<OptimizedImageWithLoader 
  src="/assets/photo.jpg"
  alt="Description"
  isPriority={true}
  quality={80}
  showPlaceholder={true}
/>
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build settings, minification, compression |
| `package.json` | NPM scripts |
| `scripts/batch-convert-webp.js` | Bulk image conversion |
| `scripts/convert-to-webp.js` | Single image conversion |
| `scripts/post-build-optimize.js` | HTML minification |

---

## 📈 Optimization Results

| Asset Type | Before | After | Savings |
|------------|--------|-------|---------|
| JavaScript | 344 KB | 87 KB (Brotli) | **75%** |
| CSS | 81 KB | 11 KB (Brotli) | **86%** |
| Images | 122 MB | 15 MB (WebP) | **88%** |
| HTML | 1.15 KB | 0.98 KB | **15%** |

**Overall: ~85-90% size reduction** 🎉

---

## 🆘 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Images not loading
- Make sure WebP files exist alongside originals
- Use OptimizedImage component for automatic fallback

### Bundle too large
- Check for duplicate dependencies: `npm ls`
- Use lazy loading for heavy components
- Review vite.config.ts code splitting settings

---

## 📚 Full Documentation

- **[BUILD_OPTIMIZATION.md](BUILD_OPTIMIZATION.md)** - Complete build guide
- **[WEBP_GUIDE.md](WEBP_GUIDE.md)** - Image optimization details  
- **[OPTIMIZATION_RESULTS.md](OPTIMIZATION_RESULTS.md)** - Performance metrics

---

## 🎯 Most Common Commands

```bash
# Daily development
npm run dev

# Before committing new images  
npm run batch-convert

# Deploy to production
npm run build:prod

# Test production build
npm run preview
```

---

**Pro Tip:** Always run `npm run build:prod` before deploying! ⚡

