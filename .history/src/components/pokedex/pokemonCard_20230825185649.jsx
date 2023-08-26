import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

// Definición de los gradientes lineales para diferentes tipos de Pokémon
const pokeLinearGradients = {
  grass:
    "border-t border-l border-r border-gray-400 rounded-t-lg bg-gradient-to-b from-teal-400 to-green-400",
  fire: "rounded-t-md bg-gradient-to-b from-red-500 via-red-600 to-yellow-500",
  water: "bg-gradient-to-b from-blue-900 to-blue-100",
  bug: "bg-gradient-to-b from-green-500 to-lime-300",
  flying: "bg-gradient-to-l from-red-700 via-pink-600 to-red-900",
  fighting: "bg-gradient-to-b from-#96402A to-#F1613C via-#CB735D",
  poison: "bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
  ghost: "bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-700",
  rock: "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-200",
  dark: "bg-gradient-to-b from-black via-gray-900 to-gray-500",
  ice: "bg-gradient-to-b from-blue-300 via-blue-400 to-blue-100",
  steel: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-400",
  dragon: "bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300",
  fairy: "bg-gradient-to-b from-red-700 via-pink-500 to-pink-300",
  electric: "bg-gradient-to-b from-blue-900 via-blue-900 to-blue-300",
  ground: "bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-500",
  psychic: "bg-gradient-to-b from-purple-700 via-purple-500 to-pink-500",
  normal: "bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
};

const PokemonCard = ({ pokemonUrl }) => {
  // Definición del estado local para almacenar los datos del Pokémon
  const [pokemon, setPokemon] = useState(null);

  // Función para formatear los tipos de Pokémon en una cadena legible
  const formatTypesPokemon = (types = []) => {
    const nameTypes = types.map((type) => type.type.name);
    const titleTypes = nameTypes.join(" / ");
    return titleTypes;
  };

  // Efecto secundario que se ejecuta cuando cambia la URL del Pokémon
  useEffect(() => {
    // Hacer una solicitud HTTP para obtener los datos del Pokémon
    axios
      .get(pokemonUrl)
      .then(({ data }) => {
        setPokemon(data); // Actualizar el estado con los datos del Pokémon
      })
      .catch((err) => console.log(err));
  }, [pokemonUrl]);

  return (
<section className="flex flex-col items-center border border-gray-300 rounded-lg">



    <article className="grid mx-4">
      {/* Sección de la imagen */}
      <section
        className={`relative h-40 ${
          pokeLinearGradients[pokemon?.types[0]?.type?.name]
        }`}
      >
        <div className="bg-yellow-300 absolute -bottom-10 inset-0 flex items-center justify-center">
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            alt={pokemon?.name}
            className=""
          />
        </div>
      </section>

      {/* Sección NOMBRE */}
      <section className="flex flex-col items-center justify-end flex-shrink-0">
        <h3
          className="mx-auto items-center capitalize hover:uppercase text-center font-bold text-3xl"
          style={{ marginTop: "27px", marginBottom: "10px" }}
        >
          {pokemon?.name}
        </h3>
      </section>

      {/* Sección Type (etiqueta span) */}
      <section className="flex flex-col items-center justify-center flex-shrink-0">
        <span className="capitalize text-xl flex items-center justify-center text-gray-600">
          Type
        </span>
      </section>

      {/* Sección TYPE */}
      <section className="flex flex-col items-center justify-center w-119 h-10 flex-shrink-0">
        <h5 className="text-xl text-center capitalize">
          {formatTypesPokemon(pokemon?.types)}
        </h5>
      </section>

      {/* Línea divisoria */}
      <hr />

      {/* Sección de estadísticas */}
      <section className="whitespace-normal">
        <div className="grid grid-cols-3 gap-1">
          {/* Mapear y mostrar las estadísticas del Pokémon */}
          {pokemon?.stats?.map((stat) => (
            <div
              className="flex flex-col items-center p-2 border border-gray-300 rounded-lg"
              key={stat.stat.name}
            >
              {/* Tipo de ataque */}
              <h6 className="bg-red-600 text-white text-center capitalize w-full flex-grow">
                {stat.stat.name}
              </h6>
              {/* Fuerza del ataque */}
              <span className="text-center rounded bg-black text-white w-full flex-grow">
                {stat.base_stat}
              </span>
            </div>
          ))}
        </div>
      </section>
    </article>
    </section>

  );
};

// Propiedades requeridas para el componente
PokemonCard.propTypes = {
  pokemonUrl: PropTypes.string.isRequired,
};

export default PokemonCard;