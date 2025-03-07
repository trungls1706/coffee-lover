import MasonryGrid from '@/components/MasonryGrid';
import { fallbackCoffeeImages } from '@/data/pexelsImages';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-indie-flower text-brown-600 tracking-wide hover:text-brown-700 transition-colors duration-200">
              Coffee Lover
            </h1>
            {/* <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-brown-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-brown-600">Explore</a>
              <a href="#" className="text-gray-700 hover:text-brown-600">Collections</a>
              <a href="#" className="text-gray-700 hover:text-brown-600">About</a>
            </nav> */}
          </div>
        </div>
      </header>

      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <MasonryGrid images={fallbackCoffeeImages} />
      </div>
    </main>
  );
}

