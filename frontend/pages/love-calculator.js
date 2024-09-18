// pages/photos.js
import LoveCalculator from '@/components/LoveCalculator';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function Love() {
  return (
<div
  className="min-h-screen pl-5 pr-5"
  style={{
    backgroundImage: 'url(/coracao.avif)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <BackgroundMusic src="/music/george.mp3" />
  <LoveCalculator />
</div>

  );
}
