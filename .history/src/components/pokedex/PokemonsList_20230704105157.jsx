import React from "react";
import PokemonCard from "./pokemonCard";

const PokemonsList = ({ pokemons }) => {
  return (
    <section>
      {
      pokemons.map(pokemon => <PokemonCard key={pokemon.url} /> )
      }
    </section>
  );
};

export default PokemonsList;
