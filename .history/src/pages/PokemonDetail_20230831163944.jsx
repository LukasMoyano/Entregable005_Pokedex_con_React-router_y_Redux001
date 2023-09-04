import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {

useEffect(() => {
  getPokemonById(pokemonId)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}, [pokemonId]);

useEffect(() => {
  getPokemonById(pokemonDataId)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}, [pokemonDataId]);



  const { pokemonId } = useParams();

  // Definir la función formatTypes
  const formatTypes = (types) => {
    return types.map((type) => type.type.name);
  };

  // Definir la función formatStats
  const formatStats = (stats) => {
    return stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
  };


  const getPokemonById = async (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const { data } = await axios.get(url);
    // console.log(data);
    const pokemon = {
      id: data.id,
      name: data.name,
      types: formatTypes(data.types),
      stats: formatStats(data.stats),
      image:
        data.sprites.versions["generation-v"]["black-white"].animated.front_default,
      weight: data.weight,
      height: data.height,
      abilities: data.abilities,
      moves: data.moves,
    };
    return pokemon;
  };

  return (
    <main>
      Detalle del Pokemon
    </main>
  );
};

export default PokemonDetail;
