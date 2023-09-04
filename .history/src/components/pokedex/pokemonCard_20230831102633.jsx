import { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { bgStylePokemonType, borderStyledPokemonByType } from "../../shared/pokemon";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const formatTypesPokemon = (types = []) => {
    const nameTypes = types.map((type) => type.type.name);
    const titleTypes = nameTypes.join(" / ");
    return titleTypes;
  };

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, [pokemonUrl]);

  return (
    <Link to={`/pokedex/${pokemonInfo?.name}`}
      className={`text-center border-8 ${borderStyledPokemonByType[pokemonInfo?.types[0]?.type?.name]} relative rounded-bl-2xl rounded-br-2xl hover:[animation:scale-105]`}
    >
      <div className=" relative grid px-2 flex-col items-center justify-center rounded-2xl align-center">
        {/* Sección de la imagen */}
        <header
          className={`relative h-[80px] w-full mb-6 ${bgStylePokemonType[pokemonInfo?.types[0]?.type?.name]
            }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 h-[120px] aspect-square ">
            <img className="h-full w-full object-contain"
              src={pokemonInfo?.sprites?.other["official-artwork"].front_default}            
              alt={pokemonInfo?.name}
            />
          </div>
        </header>

        {/* Sección NOMBRE */}
        <section className="capitalize flex flex-col items-center justify-end flex-shrink-0">
          <h3
            className="mx-auto items-center  text-center font-bold text-3xl mt-8"
          >
            {pokemonInfo?.name}
          </h3>
        </section>

        {/* Sección Type (etiqueta span) */}
        <section className="flex flex-col items-center justify-center">
          <span className=" text-xl flex items-center justify-center text-gray-600">
            Type
          </span>
        </section>

        {/* Sección TYPE */}
        <section className="flex flex-col items-center justify-center w-119 h-10 flex-shrink-0">
          <h5 className="text-xl text-center capitalize">
            {formatTypesPokemon(pokemonInfo?.types)}
          </h5>
        </section>

        {/* Línea divisoria */}
        <hr />

        {/* Sección de estadísticas */}
        <section>
          <div className="grid gap-2 grid-cols-3 text-xs p-2">
            {/* Mapear y mostrar las estadísticas del Pokémon */}
            {pokemonInfo?.stats?.map((stat) => (
              <div
                className="flex flex-col items-center p-2 border border-gray-300 rounded-lg"
                key={stat.stat.name}
              >
                {/* Tipo de ataque */}
                <h4 className="bg-red-600 text-white text-center  line-clamp-1 w-full flex-grow ">
                  {stat.stat.name}
                </h4>
                {/* Fuerza del ataque */}
                <span className="font-bold text-center rounded bg-black text-white w-full flex-grow">
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Link>

  );
};

// Propiedades requeridas para el componente
PokemonCard.propTypes = {
  pokemonUrl: PropTypes.string.isRequired,
};

export default PokemonCard;