import PropTypes from "prop-types"; // Importa el módulo PropTypes para validar las props
import PokemonCard from "./pokemonCard"; // Importa el componente PokemonCard

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
