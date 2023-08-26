import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('API_URL'); // Reemplaza 'API_URL' con la URL de la API de Pokémon
        setPokemonData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
        // Aquí puedes aplicar estilos o componentes adicionales para cada Pokémon
      ))}
    </div>
  );
};

export default PokemonList;
