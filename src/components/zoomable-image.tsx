'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ZoomableImage({ src, alt, width, height, className }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div 
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain max-h-full max-w-full"
        />
      </div>

      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsZoomed(false)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-full cursor-zoom-out">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1600}
              className="object-contain max-h-[90vh] w-auto"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
