import { useParams } from "react-router-dom"

const PokemonDetail = () => {

const { pokemonId } = useParams()
console.log(pokemonId)



const getPokemonById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  const { data } = await axios.get(url);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes (data.types),
    stats: formatStats (data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated.front_default,
      weight: data.weight,
      height: data.weight,

  }
  





  return (
    <div>
      


    </div>
  )
}

export default PokemonDetail