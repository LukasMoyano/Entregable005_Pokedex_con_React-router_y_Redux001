import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { getPokemonById } from "../services/pokemons"; // Solo importa getPokemonById

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemon = await getPokemonById(pokemonId);
        setPokemonData(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonId]);

  return (
    <main className="">
      <header>
        barra bandera bolita  pokedex
      </header>
      <article className="">
        ?????????????????
        <header >
          <div className="" >
            <img className="" src={pokemonData?.image} alt={pokemonData?.name} />
          </div>
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
            <div>
              PokeNombre
            </div>
        <section>
          tipos y habilades 
<div>
<h1>
            tipo
          </h1>
            <span>
              los tipos 1 2 
            </span>
</div>
          <h1>habilidades

          </h1>

        </section>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
      ???????????????????
      <article>
        <div>
        Movements
        </div>
        <div>

        </div>
      </article>
    </main>
  );
};

export default PokemonDetail;
