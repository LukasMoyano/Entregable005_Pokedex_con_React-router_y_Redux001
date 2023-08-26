import axios from "axios";
import { useEffect, useState } from "react";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  console.log(pokemon);

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      {/*Seccion Superior*/}
      <section>
        <div>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
        </div>
      </section>

      {/*Seccion inferior*/}
      <section>
        <h3>{pokemon?.name}</h3>
        <h5</h5>
        <span>Type</span>

        <hr/>
      </section>

//const pokeLinearGradients = {
//  grass:
//    "border-t border-l border-r border-gray-400 rounded-t-lg bg-gradient-to-b from-teal-400 //to-green-400",
//  fire: "rounded-t-md bg-gradient-to-b from-red-500 via-red-600 to-yellow-500",
//  water: "bg-gradient-to-b from-blue-900 to-blue-100",
//  bug: "bg-gradient-to-b from-green-500 to-lime-300",
//  flying: "bg-gradient-to-l from-red-700 via-pink-600 to-red-900",
//  fighting: "bg-gradient-to-b from-brown-700 to-red-500",
//  poison: "bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
//  ghost: "bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-700",
//  rock: "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-200",
//  dark: "bg-gradient-to-b from-black via-gray-900 to-gray-500",
//  ice: "bg-gradient-to-b from-blue-300 via-blue-400 to-blue-100",
//  steel: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-400",
//  dragon: "bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300",
//  fairy: "bg-gradient-to-b from-red-700 via-pink-500 to-pink-300",
//  electric: "bg-gradient-to-b from-blue-900 via-blue-900 to-blue-300",
//  ground: "bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-500",
//  psychic: "bg-gradient-to-b from-purple-700 via-purple-500 to-pink-500",
//  normal: "bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
//