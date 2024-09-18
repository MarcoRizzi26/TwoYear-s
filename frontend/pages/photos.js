// pages/photos.js
import PhotoCarousel from '@/components/PhotoCarousel';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function Photos() {
  return (
    <div className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/vangogh5.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <BackgroundMusic src="/music/djavan.mp3" />
        <PhotoCarousel />
      </div>
    </div>
  );
}
