# WebP Image Optimization Guide

This project includes tools and components for optimizing images using the WebP format with automatic fallbacks.

## 🚀 Quick Start

### Convert All Images to WebP (Preserves Directory Structure)

```bash
npm run batch-convert
```

Or specify custom quality (default is 80):

```bash
npm run batch-convert 75
```

This will:
- Find all JPG/PNG images in `public/assets/`
- Convert them to WebP format
- Keep the same directory structure
- Skip already converted files
- Show detailed conversion statistics

### Convert Single Image

```bash
npm run convert-webp <input> <output> [quality]
```

Example:
```bash
npm run convert-webp public/assets/products/chair.jpg public/assets/products/chair.webp 75
```

## 📦 React Components

### 1. OptimizedImage (Simple)

Basic component for serving WebP with fallback:

```tsx
import OptimizedImage from '../components/OptimizedImage';

<OptimizedImage 
  src="/assets/products/chair.jpg"
  alt="Modern chair"
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

**Generated HTML:**
```html
<picture>
  <source srcset="/assets/products/chair.webp" type="image/webp">
  <img src="/assets/products/chair.jpg" loading="lazy" alt="Modern chair">
</picture>
```

### 2. OptimizedImageWithLoader (Advanced)

Enhanced component with progressive loading and placeholders:

```tsx
import OptimizedImageWithLoader from '../components/OptimizedImageWithLoader';

<OptimizedImageWithLoader 
  src="/assets/products/chair.jpg"
  alt="Modern chair"
  loading="lazy"
  isPriority={false}
  quality={80}
  showPlaceholder={true}
  className="w-full h-full object-cover"
/>
```

**Features:**
- ✅ WebP with fallback
- ✅ Progressive loading with skeleton placeholder
- ✅ Automatic error handling
- ✅ Integration with `useImageLoader` hook
- ✅ Fade-in animation on load

## 🔄 Migration Example

### Before (using regular img tag):

```tsx
<img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### After (using OptimizedImage):

```tsx
<OptimizedImage
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### After (using OptimizedImageWithLoader):

```tsx
<OptimizedImageWithLoader
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
  loading="lazy"
  isPriority={index < 3}
  showPlaceholder={true}
/>
```

## ⚙️ Quality Settings

| Quality | Use Case | File Size | Quality |
|---------|----------|-----------|---------|
| 60-70 | Thumbnails, backgrounds | Smallest | Good |
| 75-80 | **Recommended** | Balanced | Excellent |
| 85-95 | Hero images, galleries | Larger | Near-perfect |
| 100 | Lossless | Largest | Perfect |

## 📊 Benefits

- **42-60% smaller file sizes** compared to JPG/PNG
- **Faster page loads** - less data to download
- **Better SEO** - improved performance scores
- **Automatic fallback** - works on all browsers
- **Progressive loading** - better user experience

## 🛠️ Workflow

1. **Add new images** to `public/assets/`
2. **Run batch conversion**: `npm run batch-convert`
3. **Use components** in your React code
4. The browser automatically chooses WebP or fallback

## 📝 Browser Support

- **WebP supported**: Chrome, Edge, Firefox, Safari 14+, Opera
- **Fallback**: Older browsers automatically use JPG/PNG

The `<picture>` element ensures compatibility across all browsers!

## 🎯 Example: Update ProjectCard

```tsx
// Before
<img
  src={imageSrc}
  alt={project.title}
  className="w-full h-full object-cover"
  loading={index < 3 ? "eager" : "lazy"}
  onLoad={handleLoad}
  onError={handleError}
/>

// After
<OptimizedImageWithLoader
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
  loading={index < 3 ? "eager" : "lazy"}
  isPriority={index < 3}
  showPlaceholder={true}
/>
```

## 🔍 Verify Conversions

Check that WebP files were created:

```bash
ls public/assets/**/*.webp
```

Compare file sizes:

```bash
npm run batch-convert
```

The script will show you the size savings for each converted image!

