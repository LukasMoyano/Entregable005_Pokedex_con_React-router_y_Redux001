import PropTypes from "prop-types";
import PokemonCard from "./pokemonCard";

const PokemonsList = ({ pokemons }) => {
  return (
    <section>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonsList;
