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
    <main className=" flex justify-center items-center 
    mt-[10%] md:mt-12 ">
      <article>
        <header>
          <div>
            <img
              className="h-full w-full object-contain"
              src={pokemonData?.image}
              alt={pokemonData?.name}
            />
            <div>
              PokeNombre
            </div>
          </div>
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
          <StatBarList className:"" stats={pokemonData?.stats} /> {/* Pasa los stats al componente StatBarList */}
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
