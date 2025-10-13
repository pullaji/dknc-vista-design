import React from 'react';
import { useImageLoader } from '../hooks/useImageLoader';

interface OptimizedImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  isPriority?: boolean;
  width?: number;
  height?: number;
  quality?: number;
  showPlaceholder?: boolean;
  onClick?: () => void;
}

/**
 * Enhanced OptimizedImage component with progressive loading and WebP support
 * Combines the picture element pattern with the existing useImageLoader hook
 * 
 * Features:
 * - Serves WebP with fallback to original format
 * - Progressive image loading with placeholder
 * - Integration with existing image optimization utilities
 * - Automatic error handling with fallback
 * 
 * Usage:
 * <OptimizedImageWithLoader 
 *   src="/assets/products/chair.jpg"
 *   alt="Modern chair"
 *   loading="lazy"
 *   isPriority={false}
 *   showPlaceholder={true}
 * />
 */
const OptimizedImageWithLoader: React.FC<OptimizedImageWithLoaderProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  isPriority = false,
  width = 800,
  height = 600,
  quality = 80,
  showPlaceholder = true,
  onClick,
}) => {
  const { imageSrc, loaded, handleLoad, handleError } = useImageLoader({
    src,
    isPriority,
    width,
    height,
    quality,
  });

  // Generate WebP path by replacing the extension
  const getWebPPath = (imagePath: string): string => {
    return imagePath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
  };

  const webpSrc = getWebPPath(imageSrc);

  return (
    <div className="relative" onClick={onClick}>
      {/* Placeholder skeleton */}
      {showPlaceholder && !loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </div>
  );
};

export default OptimizedImageWithLoader;

