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
    ">
      <article className="w-[min(100%,_400px)] shadow-2xl mx-3 rounded-xl mb-5 bg-gradient-to-b from-grass/90 to-grass/30">
        <header >
          <div className="flex juh-full  object-contain md:w-32 md:h-auto " >
            <img
              className="h-full w-full object-contain "
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
          <StatBarList stats={pokemonData?.stats} /> {/* Pasa los stats al componente StatBarList */}
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
