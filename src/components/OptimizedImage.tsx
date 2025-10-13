import React from 'react';

interface OptimizedImageProps {
  src: string; // Path to the original image (jpg/png)
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
  decoding?: 'async' | 'sync' | 'auto';
  onClick?: () => void;
}

/**
 * OptimizedImage component that serves WebP with fallback to original format
 * Automatically generates WebP source path by replacing the extension
 * 
 * Usage:
 * <OptimizedImage 
 *   src="images/photo.jpg" 
 *   alt="Description"
 *   loading="lazy"
 * />
 * 
 * This will generate:
 * <picture>
 *   <source srcset="images/photo.webp" type="image/webp">
 *   <img src="images/photo.jpg" loading="lazy" alt="Description">
 * </picture>
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  onLoad,
  onError,
  decoding = 'async',
  onClick,
}) => {
  // Generate WebP path by replacing the extension
  const getWebPPath = (imagePath: string): string => {
    return imagePath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
  };

  const webpSrc = getWebPPath(src);

  return (
    <picture onClick={onClick}>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        onLoad={onLoad}
        onError={onError}
        decoding={decoding}
      />
    </picture>
  );
};

export default OptimizedImage;

