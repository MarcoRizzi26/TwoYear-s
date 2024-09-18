import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const LoveCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [error, setError] = useState('');
  const [matchPercentage, setMatchPercentage] = useState(null); // Adicionado para exibir o match
  const router = useRouter();

  useEffect(() => {
    // Exibe o aviso de ligar o som quando o componente carregar
    toast.info('Ligue o SOMM!', {
      autoClose: 6000, // Tempo em milissegundos
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Corrigindo a lógica de correspondência dos nomes
    if (
      (name1.toLowerCase() === 'marco' || name1.toLowerCase() === 'marco antonio') &&
      name2.toLowerCase() === 'geovanna'
    ) {
      setMatchPercentage(100); // Exibe 100% de match
      setTimeout(() => {
        router.push('/photos'); // Redireciona após 2 segundos para a página das fotos
      }, 2000);
    } else {
      setMatchPercentage(0); // Exibe 0% de match
      setError('Você errou POKOIO, ou é EU ou é EU, não tem outro nome :(');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Calculadora do Amor</h1>

        {/* Exibe o percentual de match se estiver definido */}
        {matchPercentage !== null && (
          <div className={`text-4xl font-bold text-center ${matchPercentage === 100 ? 'text-green-500' : 'text-red-500'}`}>
            {matchPercentage}% de Match!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
          <label className="flex flex-col">
            Seu nome:
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="flex flex-col">
            Nome dela:
            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </label>

          {/* Exibe a mensagem de erro caso os nomes estejam incorretos */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoveCalculator;
