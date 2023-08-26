import PropTypes from "prop-types"; // Importa el módulo PropTypes para validar las props
import PokemonCard from "./pokemonCard"; // Importa el componente PokemonCard


const pokeLinearGradients = {
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
  




const PokemonsList = ({ pokemons }) => {
  return (
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* Itera sobre la lista de pokemons y genera una tarjeta para cada uno */}
  {pokemons.map((pokemon) => (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 ${
        pokeLinearGradients [pokemon?.types[0]?.type?.name]
      }`}
      key={pokemon.url}
    >
      <PokemonCard pokemonUrl={pokemon.url} /> {/* Crea una tarjeta de PokemonCard con la URL del Pokemon como prop */}
    </div>
  ))}
</section>


  );
};
PokemonsList.propTypes = {
  // Define las validaciones de tipo para la prop pokemons
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired, // La prop debe ser un string requerido
    })
  ).isRequired, // La prop es requerida
};

export default PokemonsList; // Exporta el componente PokemonsList como valor predeterminado
