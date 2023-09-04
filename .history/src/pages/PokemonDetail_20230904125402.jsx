import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonsById } from "../services/pokemons.services";
import StartBarList from "../components/pokemonDetail/StatBarList"; // Corregir el nombre del componente importado

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
    <main className="capitalize flex justify-center items-center mt-[10%] md:mt-12">
      <article className="">
        <header className="">
          {/* ... */}
        </header>
        <section>
          {/* Aquí deberías pasar pokemonData.stat en lugar de PokemonDetail?.stat */}
          <StartBarList stats={pokemonData.stat} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
