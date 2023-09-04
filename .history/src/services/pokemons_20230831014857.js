import axios from 'axios';

export const getAllPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1280";
    const { data } = await axios.get(URL);
    return data.results;
}




export getPokemonById = async (pokemonId) => {
  const  = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  try {
    const { data } = await axios.get(url);
    const pokemon = {
      name: data.name,
      id: data.id,
      types: formatTypes(data.types),
      stats: formatStats(data.stats),
      image:
        data.sprites.versions["generation-v"]["black-white"].animated.front_default,
      weight: data.weight,
      height: data.weight,
    };
    return pokemon;
  } catch (error) {
    // Manejar errores aquí, por ejemplo, puedes lanzar una excepción
    throw new Error(`Error al cargar el Pokémon: ${error.message}`);
  }
};

export default getPokemonById;
