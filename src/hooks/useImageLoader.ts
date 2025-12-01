import { useState, useEffect, useRef, useCallback } from 'react';
import { optimizeImageUrl, preloadImage } from '../utils/imageOptimizer';

interface UseImageLoaderOptions {
  src: string;
  isPriority?: boolean;
  width?: number;
  height?: number;
  quality?: number;
}

export const useImageLoader = ({ 
  src, 
  isPriority = false, 
  width = 800, 
  height = 600, 
  quality = 80 
}: UseImageLoaderOptions) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  const optimizedSrc = optimizeImageUrl(src, width, height, quality);

  const loadImage = useCallback(async () => {
    try {
      setError(false);
      if (isPriority) {
        // Preload priority images
        await preloadImage(optimizedSrc);
      }
      setImageSrc(optimizedSrc);
    } catch (err) {
      console.warn('Failed to load optimized image, falling back to original:', err);
      setImageSrc(src);
    }
  }, [src, optimizedSrc, isPriority]);

  useEffect(() => {
    loadImage();
  }, [src, optimizedSrc, isPriority]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    if (imageSrc !== src) {
      // Fallback to original image
      setImageSrc(src);
    }
  }, [imageSrc, src]);

  return {
    imageSrc,
    loaded,
    error,
    handleLoad,
    handleError,
    imgRef
  };
};
