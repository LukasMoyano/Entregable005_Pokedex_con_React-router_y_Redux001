import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { getPokemonById } from "../services/pokemons"; // Solo importa getPokemonById
import axios from "axios";
const borderStyledPkemonByType = {
  normal: "bg-[#c3c3c3]",
  fighting: "bg-[#dd6500]",
  poison: "bg-[#c04fe6]",
  ground: "bg-[#6a420a]",
  rock: "bg-[#525252]",
  bug: "bg-[#008f70]",
  ghost: "bg-[#330088c2]",
  steel: "bg-[#696969]",
  fire: "bg-[#ff3100]",
  water: "bg-[#008cff]",
  grass: "bg-[#2b8300]",
  electric: "bg-[#ffcb00]",
  psychic: "bg-[#ff00f7]",
  ice: "bg-[#00d9ff]",
  dragon: "bg-[#ff5f71]",
  dark: "bg-[#000]",
  fairy: "bg-[#ffb1e2]",
  flying: "bg-[#93f2efc3]",
};



const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Hacer una solicitud HTTP para obtener los datos del Pokémon
    axios
      .get(pokemonUrl)
      .then(({ data }) => {
        setPokemon(data); // Actualizar el estado con los datos del Pokémon
      })
      .catch((err) => console.log(err));
  }, [getPokemonByUrl]);


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
    <main className=" flex justify-center items-center">






      <article className="w-[min(100%,_400px)] shadow-2xl mx-3 rounded-xl mb-5 ">
        <header >
          <div className={`text-center flex juh-full  object-contain md:w-32 md:h-auto border-[${borderStyledPkemonByType[pokemon?.types[0]?.type?.name]}] relative rounded-bl-2xl rounded-br-2xl hover:[animation:scale-105]`} >
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
