import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * LazyImage component - Lazy loads images when they enter the viewport
 * Prevents layout shift by reserving space with width/height
 * Shows placeholder while loading
 */
export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6',
  onLoad,
  onError,
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const { ref: imageRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.01,
    rootMargin: '100px',
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isIntersecting && !imageSrc) {
      setImageSrc(src);
    }
  }, [isIntersecting, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Style for placeholder to prevent layout shift
  const placeholderStyle: React.CSSProperties = {
    backgroundColor: placeholderColor,
    aspectRatio: width && height ? `${width} / ${height}` : undefined,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  return (
    <div ref={imageRef} style={placeholderStyle} className={`relative ${className}`}>
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}
