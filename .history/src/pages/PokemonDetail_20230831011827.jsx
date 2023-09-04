const getPokemonById = async (pokemonId) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    const { data } = await axios.get(url);
    console.log(data);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes (data.types),
    stats: formatStats (data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated.front_default,
      weight: data.weight,
      height: data.weight,


 catch (error) {
      console.error("Error al obtener los detalles del Pokémon:", error);

  }

  }
  





  return (
    <div>
      


    </div>
  )
}

export default PokemonDetail