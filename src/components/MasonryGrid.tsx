"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative mb-4 break-inside-avoid group cursor-pointer"
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => router.push(`/photos/${image.id}`)}
        >
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={image.url}
              alt={image.title}
              width={image.width}
              height={image.height}
              className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT0xXWVhYYWVjZUFVbV1lZ2f/2wBDARUXFyAeIBohHB4nIiInZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4`}
            >
              <h3 className="text-white font-indie-flower text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 