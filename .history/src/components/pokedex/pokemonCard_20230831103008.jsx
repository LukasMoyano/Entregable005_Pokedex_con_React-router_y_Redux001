import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const bgStylePokemonType = {
  grass: "border-t border-l border-r border-gray-400 rounded-t-lg bg-gradient-to-b from-teal-400 to-green-400",
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
*/

  // normal: -bg': '#CB98A7
  // normal-txt': '#73525D
  // fighting-bg': '#EF6139
  // fighting-txt': '#EF6139
  // flying-bg': '#93B2C7
  // flying-txt': '#93B2C7
  // poison-bg': '#9B69DA
  // poison-txt': '#5E2D88
  // ground-bg': '#6E491F
  // ground-txt': '#A7702D
  // rock-bg': '#8B3E22
  // rock-txt': '#48180A
  // bug-bg': '#3B9852
  // bug-txt': '#1C4B27
  // ghost-bg': '#90679100
  // ghost-txt': '#32336B
  // steel-bg': '#43BD94
  // steel-txt': '#60756E
  // fire-bg': '#FD4D5A
  // fire-txt': '#AB1E24
  // water-bg': '#85A8FC
  // water-txt': '#1552E1
  // grass-bg': '#26CC50
  // grass-txt': '#157B3C
  // electric-bg': '#FAFB71
  // electric-txt': '#E4E22D
  // psychic-bg': '#F71C90
  // psychic-txt': '#AC2A6A
  // ice-bg': '#D6F1FA
  // ice-txt': '#84D3F4
  // dragon-bg': '#60CCD9
  // dragon-txt': '#458B95
  // dark-bg': '#5A5979
  // dark-txt': '#050706
  // fairy:bg': '#EB1269
  // fairt-txt': '#EB1269
  // unknown-bg': '#35433E
  // unknown-txt': '#45665B
  // shadow-bg': '#301645
  // shadow-txt': '#463A55









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
    <Link to={`/pokedex/${pokemon?.name}`}
      className={`text-center border-[${borderStyledPkemonByType[pokemon?.types[0]?.type?.name]}] relative rounded-bl-2xl rounded-br-2xl hover:[animation:scale-105]`}
    >
      <div className=" grid px-2 flex-col items-center justify-center rounded-2xl align-center">
        {/* Sección de la imagen */}
        <header
          className={`relative h-[80px] w-full mb-6 ${bgStylePokemonType[pokemon?.types[0]?.type?.name]
            }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 h-[120px] aspect-square ">
            <img className="h-full w-full object-contain"
              src={pokemon?.sprites?.other["official-artwork"].front_default}            
              alt={pokemon?.name}
            />
          </div>
        </header>

        {/* Sección NOMBRE */}
        <section className="capitalize flex flex-col items-center justify-end flex-shrink-0">
          <h3
            className="mx-auto items-center  text-center font-bold text-3xl mt-8"
          >
            {pokemon?.name}
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
            {formatTypesPokemon(pokemon?.types)}
          </h5>
        </section>

        {/* Línea divisoria */}
        <hr />

        {/* Sección de estadísticas */}
        <section>
          <div className="grid gap-2 grid-cols-3 text-xs p-2">
            {/* Mapear y mostrar las estadísticas del Pokémon */}
            {pokemon?.stats?.map((stat) => (
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