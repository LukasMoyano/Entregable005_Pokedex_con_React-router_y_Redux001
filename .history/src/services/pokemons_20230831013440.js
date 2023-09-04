const getPokemonById = async (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const { data } = await axios.get(url);
    const pokemon = {
      name: data.name,
      id: data.id,
      name: data.name,
      types: formatTypes (data.types),
      stats: formatStats (data.stats),
      image:
        data.sprites.versions["generation-v"]["black-white"].animated.front_default,
        weight: data.weight,
        height: data.weight,
  
    }
    return pokemon
  }

  export pokemon = {pokemon: pokemon}