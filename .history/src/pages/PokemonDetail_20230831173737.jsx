import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatBarList from "../components/pokemonDetail/StatBarList";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  // Definir la función formatTypes
  const formatTypes = (types) => {
    return types.map((type) => type.type.name);
  };

  // Definir la función formatStats
  const formatStats = (stats) => {
    return stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
  };

  useEffect(() => {
    const getPokemonById = async (pokemonId) => {
      try {
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
          abilities: data.abilities,
          moves: data.moves,
        };

        setPokemonData(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    getPokemonById(pokemonId);
  }, [pokemonId]);

  return (
    <main>
      <article>
        <header>
          <div>
            <img src={pokemonData?.image} alt={pokemonData?.name} />
          </div>
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
