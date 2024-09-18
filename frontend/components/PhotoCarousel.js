import { useEffect, useState } from 'react';
import Slider from 'react-slick';

const PhotoCarousel = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para o slide atual

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const photos = [
    { src: '/0bbda439-9629-4fdc-b338-28b13ecda8d0.jpg', alt: 'Foto 1' },
    { src: '/01b0adbc-8e40-4f5e-bbda-ddbc7b704ce9.jpg', alt: 'Foto 2' },
    { src: '/3a47cddd-9cee-4077-a315-27911927bc4c.jpg', alt: 'Foto 3' },
    { src: '/3d4f6c60-abab-4cce-b80d-68e77bedbc63.jpg', alt: 'Foto 4' },
    { src: '/6deaabfa-03e1-4631-bce9-47141f2f7e0c.jpg', alt: 'Foto 5' },
    { src: '/6e5ca13a-fbbd-48fe-a36a-4f7271121ffa.jpg', alt: 'Foto 6' },
    { src: '/7A95758F-118B-472E-BC1B-BDFF6E5CD477.JPG', alt: 'Foto 7' },
    { src: '/8EF7E24B-2695-4C4E-BE71-210E9D2B368E.JPG', alt: 'Foto 8' },
    { src: '/9A27A81A-AF66-43E9-81B8-C1D22C749813.jpg', alt: 'Foto 9' },
    { src: '/2884b0e7-2385-45ed-9525-3fdff362e105.jpg', alt: 'Foto 10' },
    { src: '/32955a11-208f-4ffd-9e54-f90529c7d45a.jpg', alt: 'Foto 11' },
    { src: '/77544C7D-0AB7-4325-B95C-B9B186579FA6.JPG', alt: 'Foto 12' },
    { src: '/B46E0A76-E2E1-464F-8A35-4ACF5BB2A01E.JPG', alt: 'Foto 13' },
    { src: '/bee2c6fc-cbc2-47a4-b2f4-f6cb0d5717b6.jpg', alt: 'Foto 14' },
    { src: '/C6974F9E-95C4-48A4-900E-24F3EA2928E0.JPG', alt: 'Foto 15' },
    { src: '/D58C7057-D530-4237-8419-2277BE9906BD.JPG', alt: 'Foto 16' },
    { src: '/dc7eaa41-fc29-4234-8d20-258a513d7791.jpg', alt: 'Foto 17' },
  ];

  const phrases = [
    '"O amor é eterno - a sua manifestação pode modificar-se, mas nunca a sua essência... através do amor vemos as coisas com mais tranquilidade, e somente com essa tranquilidade um trabalho pode ser bem-sucedido." ❤️❤️',
    '"Teu amor trouxe significado a todos os conceitos que eu tinha da palavra amar, foi o sentimento mais lindo que eu já tive a honra de viver"',
    '"As etrelas que ouvem - e aos sonhos que são atendidos"',
    '"Como se o silêncio dissesse tudo. Um sentimento bom que me leva pra outro mundo."',
    '"Eu não conheço todas as flores. Mas vou mandar todas que eu puder."',
    '"Que sorte eu tive de ter cruzado seu caminho e roubado seu coração." ❤️❤️',
    '"Você é minha pessoa favorita."',
    '"Um amor tão puro que ainda nem sabe | A força que tem | é teu e de mais ninguém"',
    '"Amar é sentir um turbilhão de sentimentos ao mesmo tempo e, dentro de mim, um universo inteiro se expande por causa do seu amor." ❤️❤️',
    '"Nosso amor brilha como as estrelas."',
    '"Nada é mais belo do que admirar o mundo através dos seus olhos, meu amor."',
    '"Van Gogh amou as estrelas com o mesmo amor ue amo os seus olhos"',
    '"Você é a estrela mais brilhante do meu universo particular."',
    '"Não existia melodia mais doce do que o seu sorriso."',
    '"Ela tem força, ela tem sensibilidade. Ela é guerreira, ela é uma deusa, ela é mulher de verdade." ❤️❤️',
    '"Te desejo como ao ar: Mais que tudo!"',
    '"Ahhh, mas eu to tão feliz. Dizem que o amor atrai!!!"',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next), // Atualiza o slide atual
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-4 p-2 flex flex-col justify-center items-center">
      <div className="relative w-full">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="p-2 flex justify-center">
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-lg border-2 border-white bg-white pb-10 pl-2 pr-2 pt-5 shadow-lg"
                />
              </div>
              <div className="text-xl font-semibold text-black bg-white mt-5 text-center border-2 rounded-lg">
                {phrases[currentSlide]}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Exibir a frase correspondente à foto atual */}
    </div>
  );
};

export default PhotoCarousel;
