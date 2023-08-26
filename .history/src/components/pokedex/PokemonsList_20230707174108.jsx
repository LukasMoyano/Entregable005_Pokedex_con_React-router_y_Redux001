import PropTypes from "prop-types"; // Importa el módulo PropTypes para validar las props
import PokemonCard from "./pokemonCard"; // Importa el componente PokemonCard

const PokemonsList = ({ pokemons }) => {
  return (
    <section>
  <div className="grid gap-4">
    {/* Itera sobre la lista de pokemons y genera una tarjeta para cada uno */}
    {pokemons.map((pokemon) => (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      </div>
    ))}
  </div>
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
