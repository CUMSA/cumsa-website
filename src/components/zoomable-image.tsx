"use client";

import { createPortal } from "react-dom";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const x_size = 32;
const default_size = 1600;

export function ZoomableImage({
  src,
  alt,
  width = default_size,
  height = default_size,
  className,
}: ImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        className={`flex cursor-zoom-in items-center justify-center ${className}`}
        onClick={() => setIsZoomed(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="max-h-[70vh] rounded-lg object-contain"
        />
      </div>

      {isZoomed &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsZoomed(false)}
          >
            <button
              className="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
              onClick={() => setIsZoomed(false)}
              aria-label="Close"
            >
              <X size={x_size} />
            </button>
            <div className="relative cursor-zoom-out">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="max-h-[90vh] object-contain"
                quality={100}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
