import axios from 'axios';

export const getAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1280";
  const { data } = await axios.get(URL);
  return data.results;
}

export const getPokemonByUrl = async (pokemonUrl) => { // Agregué 'const' antes de 'getPokemonByUrl'
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    name: data.name,
    id: data.id,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
    weight: data.weight,
    height: data.height, // Cambié 'data.weight' a 'data.height' para obtener la altura
  };
  return pokemon;
}

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
}

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
}
