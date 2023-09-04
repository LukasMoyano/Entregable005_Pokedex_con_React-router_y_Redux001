import { useParams } from "react-router-dom";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { getPokemonById } from "../services/pokemons"; // Importa getPokemonById
import { useEffect, useState } from "react";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utiliza getPokemonById para obtener los datos del Pokémon
        const pokemon = await getPokemonById(pokemonId);
        setPokemonData(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonId]);

  // Función para formatear los tipos de Pokémon en una cadena legible
  const formatTypesPokemon = (types = []) => {
    const nameTypes = types.join(" / ");
    return nameTypes;
  };

  // Renderiza el componente solo cuando los datos están disponibles
  if (!pokemonData) {
    return <div>Loading...</div>;
  }

// ...

return (
  <main className="">
    <header>
      barra bandera bolita pokedex
    </header>
    <article className="justify-center items-center">
      {/* Aquí va la imagen del Pokémon */}
      <header className="object-contain">
        <div className="top-0 left-0 w-full h-full" >
          <img className="" src={pokemonData.image} alt={pokemonData.name} />
        </div>
      </header>

      <section className="mx-auto items-center text-center font-bold mt-8">
        <article className="capitalize flex flex-col items-center justify-end flex-shrink-0">
          <span>#{pokemonData.id}</span>
          <div>
            {pokemonData.name}
          </div>
        </article>
      </section>

      <section className="grid grid-cols-2 grid-flow-row">
        <div className="">
          <h1>Tipo</h1>
          <span>{formatTypesPokemon(pokemonData.types)}</span>
        </div>
        <div>
          <h1>Habilidades</h1>
          <span>
            {pokemonData.abilities.map((ability) => (
              <div key={ability.name}>{ability.name}</div>
            ))}
          </span>
        </div>
      </section>

      <StatBarList stats={pokemonData.stats} />
    </article>

    <section>
      {/* Aquí puedes mostrar más información sobre el Pokémon */}
    </section>
  </main>
);

};

export default PokemonDetail;
