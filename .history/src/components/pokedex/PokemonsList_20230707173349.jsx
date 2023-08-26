import PropTypes from "prop-types"; // Importa el módulo PropTypes para validar las props
import PokemonCard from "./pokemonCard"; // Importa el componente PokemonCard

const PokemonsList = ({ pokemons }) => {
  return (
    <section>
      {/* Itera sobre la lista de pokemons y genera una tarjeta para cada uno */}
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} /> // Crea una tarjeta de PokemonCard con la URL del Pokemon como prop
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
