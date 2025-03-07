"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { fallbackCoffeeImages } from '@/data/pexelsImages';

export default function PhotoDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const image = fallbackCoffeeImages.find(img => img.id === params.id);

  if (!image) {
    return null;
  }

  const currentIndex = fallbackCoffeeImages.findIndex(img => img.id === params.id);
  const prevImage = fallbackCoffeeImages[currentIndex - 1];
  const nextImage = fallbackCoffeeImages[currentIndex + 1];

  return (
    <div className="fixed inset-0 bg-black/90 z-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-sm flex items-center px-4 justify-between z-50">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-600"></div>
            <div>
              <h3 className="text-white font-medium">Coffee Lover</h3>
              <p className="text-gray-400 text-sm">Follow</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition">
            Collect
          </button>
          <button className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md transition flex items-center gap-2">
            <span>Like</span>
            <span className="text-sm">48</span>
          </button>
          <button className="text-white bg-[#05A081] hover:bg-[#05A081]/90 px-4 py-2 rounded-md transition">
            Free Download
          </button>
        </div>
      </div>

      {/* Navigation arrows */}
      {prevImage && (
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-40 bg-black/50 p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition"
          onClick={() => router.push(`/photos/${prevImage.id}`)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {nextImage && (
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-40 bg-black/50 p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition"
          onClick={() => router.push(`/photos/${nextImage.id}`)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main Image */}
      <div className="h-full w-full flex items-center justify-center p-4 pt-20">
        <div className="relative max-w-[90vw] max-h-[85vh]">
          <Image
            src={image.url}
            alt={image.title}
            width={image.width}
            height={image.height}
            className="object-contain max-h-[85vh] rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-sm flex items-center px-4 justify-between">
        <div className="text-white font-indie-flower text-xl">
          {image.title}
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 