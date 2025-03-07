import { fallbackCoffeeImages } from '@/data/pexelsImages';
import PhotoDetailClient from './PhotoDetailClient';

export default function PhotoDetailPage({ params }: { params: { id: string } }) {
  const image = fallbackCoffeeImages.find(img => img.id === params.id);

  if (!image) {
    return null;
  }

  const currentIndex = fallbackCoffeeImages.findIndex(img => img.id === params.id);
  const prevImage = fallbackCoffeeImages[currentIndex - 1];
  const nextImage = fallbackCoffeeImages[currentIndex + 1];

  return (
    <PhotoDetailClient
      image={image}
      prevImage={prevImage}
      nextImage={nextImage}
      relatedImages={fallbackCoffeeImages.filter(img => img.id !== image.id).slice(0, 9)}
    />
  );
}
