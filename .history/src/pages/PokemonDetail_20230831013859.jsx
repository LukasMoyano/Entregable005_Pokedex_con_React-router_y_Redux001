import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {getPokemonById } from "../services/Pokemon"


const PokemonDetail = () => {

const { pokemonId } = useParams()

useEffect(() => {
  getPokemonById(pokemonId)
  .then( (data) => console.log(data))
  .catch((err) => console.log(err))
}, [])


  





  return (
    <div>
      


    </div>
  )
}

export default PokemonDetail