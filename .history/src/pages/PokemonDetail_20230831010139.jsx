import { useParams } from "react-router-dom"

const PokemonDetail = () => {

const { pokemonId } = useParams()
console.log(pokemonId)



const getPokemonById = async (pokemonId) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data = await response.json()
  return data
}





  return (
    <div>
      


    </div>
  )
}

export default PokemonDetail