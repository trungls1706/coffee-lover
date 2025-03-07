import { createClient } from 'pexels';

// Initialize the Pexels client with API key from environment variables
const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || '');

export interface CoffeeImage {
  id: string;
  url: string;
  title: string;
  width: number;
  height: number;
}

export interface PexelsImage {
  id: string;
  url: string;
  title: string;
  width: number;
  height: number;
}

export async function fetchCoffeeImages(): Promise<PexelsImage[]> {
  try {
    const query = 'coffee';
    const perPage = 10;

    const result = await client.photos.search({
      query,
      per_page: perPage,
    });

    if ('photos' in result) {
      return result.photos.map((photo) => ({
        id: photo.id.toString(),
        url: photo.src.large,
        title: photo.alt || 'Coffee Image',
        width: photo.width,
        height: photo.height,
      }));
    }

    return fallbackCoffeeImages;
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return fallbackCoffeeImages;
  }
}

// Fallback mock data with real Pexels coffee images
export const fallbackCoffeeImages: PexelsImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    title: 'Coffee Beans on Wooden Surface',
    width: 800,
    height: 1200,
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    title: 'Coffee Latte Art Heart',
    width: 800,
    height: 1000,
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
    title: 'Coffee Shop Interior',
    width: 800,
    height: 1100,
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg',
    title: 'Coffee Beans Close-up',
    width: 800,
    height: 800,
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
    title: 'Coffee Cup on Table',
    width: 800,
    height: 1000,
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg',
    title: 'Coffee Brewing Process',
    width: 800,
    height: 1200,
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',
    title: 'Coffee and Work Setup',
    width: 800,
    height: 1000,
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg',
    title: 'Coffee Shop Counter',
    width: 800,
    height: 1100,
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg',
    title: 'Coffee and Pastries',
    width: 800,
    height: 800,
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg',
    title: 'Coffee Roasting Process',
    width: 800,
    height: 1000,
  },
];
