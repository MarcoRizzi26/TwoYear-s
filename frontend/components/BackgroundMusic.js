import { useEffect, useState } from 'react';

const BackgroundMusic = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying) {
        const audio = document.getElementById('background-audio');
        audio.play();
        setIsPlaying(true);
      }
    };

    // Adiciona eventos de interação
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <audio id="background-audio" src={src} preload="auto" />
  );
};

export default BackgroundMusic;
