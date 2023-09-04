import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonsById } from "../services/pokemons.services";
import StatBarList from "../components/pokemonDetail/BarProgressStat.jsx";
import Header from "../components/pokedex/Header";
import BarProgressStat from "../components/pokemonDetail/BarProgressStat.jsx";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getPokemonsById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [pokemonId]);

  const formatTypesPokemon = (types = []) => {
    return types.join(" / ");
  };

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="capitalize flex justify-center items-center mt-[10%] md:mt-12">
        {/* Resto del código */}
      </main>
    </>
  );
};

export default PokemonDetail;
