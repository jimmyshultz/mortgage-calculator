"use client";

import React from 'react';
import Image from 'next/image';

interface AccessibleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  fallbackSrc?: string;
}

/**
 * AccessibleImage component that ensures all images have proper alt text,
 * loading behavior, and fallback options for improved accessibility and user experience.
 */
const AccessibleImage: React.FC<AccessibleImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  fallbackSrc = '/images/placeholder.jpg',
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isError, setIsError] = React.useState(false);

  // Handle image loading error
  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc(fallbackSrc);
    }
  };

  // If the src is remote (not from our domain), use a standard img tag
  const isRemoteImage = src.startsWith('http');

  if (isRemoteImage) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        onError={handleError}
        // Improve accessibility for images
        role={alt === '' ? 'presentation' : undefined}
      />
    );
  }

  // For local images, use Next.js Image component
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      className={className}
      priority={priority}
      onError={handleError}
      // Role is automatically set by Next.js Image component based on alt text
    />
  );
};

export default AccessibleImage; 