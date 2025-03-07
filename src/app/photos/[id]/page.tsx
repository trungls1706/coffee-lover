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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 left-0 right-0 h-16 bg-white border-b flex items-center px-4 justify-between z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            <div>
              <h3 className="text-gray-900 font-medium">Coffee Lover</h3>
              <p className="text-gray-500 text-sm">Follow</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition">
            Collect
          </button>
          <button className="text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition flex items-center gap-2">
            <span>Like</span>
            <span className="text-sm">48</span>
          </button>
          <button className="text-white bg-[#05A081] hover:bg-[#05A081]/90 px-4 py-2 rounded-md transition">
            Free Download
          </button>
        </div>
      </div>

      {/* Close Button */}
      <button 
        onClick={() => router.push('/')}
        className="fixed top-4 right-4 z-50 text-gray-700 hover:text-gray-900 p-2 rounded-full bg-white/80 hover:bg-white transition shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Navigation */}
        {prevImage && (
          <button 
            className="fixed left-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900 z-40 bg-white/80 p-3 rounded-full hover:bg-white transition shadow-lg"
            onClick={() => router.push(`/photos/${prevImage.id}`)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Zone - Image */}
          <div className="lg:w-2/3">
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={image.url}
                alt={image.title}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Zone - Details */}
          <div className="lg:w-1/3 space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h1>
              <p className="text-gray-600">Captured by Coffee Lover</p>
            </div>

            {/* Location Info */}
            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Location</h2>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Coffee House Downtown</h3>
                  <p className="text-gray-600">123 Coffee Street, City Center</p>
                  <p className="text-gray-600">Open Daily: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Review</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">5.0</span>
                </div>
                <p className="text-gray-700">
                  A cozy spot with amazing coffee and a peaceful atmosphere. The perfect place to work or relax. Their signature latte art is Instagram-worthy!
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Wi-Fi
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Power Outlets Available
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Outdoor Seating
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        {nextImage && (
          <button 
            className="fixed right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900 z-40 bg-white/80 p-3 rounded-full hover:bg-white transition shadow-lg"
            onClick={() => router.push(`/photos/${nextImage.id}`)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Footer - Related Media */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">More from Coffee House Downtown</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {fallbackCoffeeImages.slice(0, 5).map((relatedImage) => (
              <div 
                key={relatedImage.id}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => router.push(`/photos/${relatedImage.id}`)}
              >
                <Image
                  src={relatedImage.url}
                  alt={relatedImage.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 