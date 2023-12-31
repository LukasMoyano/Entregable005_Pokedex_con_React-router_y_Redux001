import PokemonCard from "./pokemonCard";

const PokemonsList = ({ pokemons }) => {
  return (
    <section>
      {
      pokemons.map((pokemon => (
      <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/> )
      ))}
    </section>
  );
};

export default PokemonsList;
