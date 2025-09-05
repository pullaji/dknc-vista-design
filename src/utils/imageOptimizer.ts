// Image optimization utilities
export const optimizeImageUrl = (originalUrl: string, width?: number, height?: number, quality: number = 80) => {
  if (originalUrl.includes('unsplash.com')) {
    // Optimize Unsplash images
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('fit', 'crop');
    params.set('auto', 'format');
    params.set('q', quality.toString());
    
    return `${originalUrl}?${params.toString()}`;
  }
  
  // For local assets, we'll use the original for now
  // In production, you should implement server-side image optimization
  return originalUrl;
};

export const generateSrcSet = (originalUrl: string, baseWidth: number = 800) => {
  if (originalUrl.includes('unsplash.com')) {
    return [
      `${originalUrl}?w=${baseWidth}&h=${Math.round(baseWidth * 0.75)}&fit=crop&auto=format&q=80 1x`,
      `${originalUrl}?w=${baseWidth * 2}&h=${Math.round(baseWidth * 2 * 0.75)}&fit=crop&auto=format&q=80 2x`
    ].join(', ');
  }
  
  return originalUrl;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const isImageInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
