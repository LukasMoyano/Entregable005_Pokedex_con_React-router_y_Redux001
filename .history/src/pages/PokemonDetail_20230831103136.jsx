import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {getPokemonById } from "../services/pokemons"


const PokemonDetail = () => {

const { pokemonId } = useParams()

useEffect(() => {
  getPokemonById(pokemonId)
  .then( (data) => console.log(data))
  .catch((err) => console.log(err))
}, [])


  





  return (
    <div>
      Hello word


    </div>
  )
}

export default PokemonDetail