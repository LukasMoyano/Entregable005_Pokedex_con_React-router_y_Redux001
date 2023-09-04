import axios from "axios";

export const getAllPokemons = async () => {
  const URL = " https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getAllType = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};

export const getPokemonsByType = async (pokemonsType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonsType}`;
  const { data } = await axios.get(url);
  const fomatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return fomatPokemons;
};

export const getPokemonsById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { data } = await axios.get(url);
  const pokemon = {
    id: data.id,
    name: data.name,
    type: formatTypes(data.types),
    stat: formatStat(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities,
    moves: data.moves,
  };
  return pokemon;
};

export const getPokemonsByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    type: formatTypes(data.types),
    stat: formatStat(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
  };
  return pokemon;
};

const formatStat = (stats) => {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};

const formatTypes = (types) => {
  return types.map((type) => 
  type.type.name
  );
};

export const joinPokemosType = (types = []) => {
  return types.join(" / ");
};
