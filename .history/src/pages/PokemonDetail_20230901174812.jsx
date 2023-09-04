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
      <article className="justify-center items-center">
        ?????????????????
        <header className="object-contain">
          <div className="top-0 left-0 w-full h-full" >
            <img className="" src={pokemonData?.image} alt={pokemonData?.name} />
          </div>
        </header>

        <section className="mx-auto items-center  text-center font-bold mt-8">

          <article className="capitalize flex flex-col items-center justify-end flex-shrink-0">
            <span>#{pokemonData?.id}</span>
            <div>
              {/* {pokemon?.name} */}
            </div>
          </article>
        </section>
        <section className="grid grid-cols-2 grid-flow-row">
          tipos y habilades
          <div className="">
            <h1>
            {formatTypesPokemon(pokemon?.types)}
            </h1>
            <span>
              los tipos 1 2
            </span>
          </div>
          <div>
            <h1>Habilidades

            </h1>
            <span>habilidades 1 2</span>
          </div>

        </section>
        <StatBarList stats={pokemonData?.stats} />
      </article>

      <section>
        ???????????????????

        <article>
          <div>
            Movements
          </div>
          <div>

          </div>
        </article>
      </section>
    </main>
  );
};

export default PokemonDetail;
