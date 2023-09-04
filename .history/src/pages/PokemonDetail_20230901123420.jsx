import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { getPokemonById,formatTypes, formatStats, } from "../services/pokemons";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemon = await getPokemonById(pokemonId); // Usa la función getPokemonById
        setPokemonData(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonId]);

  return (
    <main>
      <article>
        <header>
          <div>
            <img
              className="h-full w-full object-contain"
              src={pokemonData?.image}
              alt={pokemonData?.name}
            />
          </div>
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
          <StatBarList stats={pokemonData?.stats} /> {/* Pasa los stats al componente StatBarList */}
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
