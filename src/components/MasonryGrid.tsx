"use client"

import { useState } from 'react';
import Image from 'next/image';

interface ImageItem {
  id: string;
  url: string;
  title: string;
  width: number;
  height: number;
}

interface MasonryGridProps {
  images: ImageItem[];
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative mb-4 break-inside-avoid"
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative group cursor-zoom-in">
            <Image
              src={image.url}
              alt={image.title}
              width={image.width}
              height={image.height}
              className="w-full rounded-xl object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT0xXWVhYYWVjZUFVbV1lZ2f/2wBDARUXFyAeIBohHB4nIiInZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            {hoveredId === image.id && (
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl transition-opacity duration-200">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium truncate">{image.title}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 