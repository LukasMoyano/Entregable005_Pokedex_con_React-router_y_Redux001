import axios from 'axios';

export const getAllPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1280";
    const { data } = await axios.get(URL);
    return data.results;
}




export getPokemonByUrl = async (pokemonUrl) => {
  const { data} = await axiox.get(pokemonUrl);
  const pokemon = {
    name: data.name,
    id: data.id,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated.front_default,
    weight: data.weight,
    height: data.weight,
  }
    
    return data;
}
