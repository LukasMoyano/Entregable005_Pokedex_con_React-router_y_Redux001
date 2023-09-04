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
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [pokemonId]);

  if (!pokemonData) {
    // Si pokemonData es null o undefined, muestra un mensaje de carga o maneja la lógica apropiada.
    return <div>Loading...</div>;
  }

  return (
    <main>
      <article>
        <header>
          <div>
            <img src={pokemonData.image} alt={pokemonData.name} />
          </div>
        </header>
        <section>
          <span>#{pokemonData.id}</span>
          <StatBarList stats={pokemonData.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
