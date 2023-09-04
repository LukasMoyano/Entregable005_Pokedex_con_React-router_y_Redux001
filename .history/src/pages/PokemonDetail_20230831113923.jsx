import { useEffect } from "react"
import { useParams } from "react-router-dom"


const PokemonDetail = () => {

const { pokemonId } = useParams()

useEffect(() => {
  getPokemonById(pokemonId)
  .then( (data) => console.log(data))
  .catch((err) => console.log(err))
}, [])


const getPokemonById = async (pokemonId) => { 
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const { data } = await axios.get(url);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated.front_default,
    weight: data.weight,
    height: data.height,
  }
  return pokemon;
}





  return (
    <div>
Detalle del Pokemon
    </div>
  )
}

export default PokemonDetail