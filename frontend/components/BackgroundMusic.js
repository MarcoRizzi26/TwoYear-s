import { useEffect, useRef } from 'react';

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true; // Define a música para tocar em loop
      audio.play().catch(error => {
        console.error('Erro ao tentar reproduzir música:', error);
      });
    }
  }, [src]);

  return (
    <audio ref={audioRef} src={src} />
  );
};

export default BackgroundMusic;
