import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const nameTrainer = useSelector((state) => state.nameTrainer.name);

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(namePokemon.toLocaleLowerCase().trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.namePokemon.value);
  };

  const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  };

  useEffect(() => {
    const loadPokemonTypes = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        const types = response.data.results;
        setTypes(types);
      } catch (error) {
        console.error("Error loading Pokémon types:", error);
      }
    };

    loadPokemonTypes();
  }, []);

  useEffect(() => {
    if (!currentType) {
      const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1280";

      axios
        .get(URL)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  useEffect(() => {
    if (currentType) {
      const URL = `https://pokeapi.co/api/v2/type/${currentType}/`;

      axios
        .get(URL)
        .then(({ data }) => {
          const pokemonsByType = data.pokemon.map(({ pokemon }) => pokemon);
          setPokemons(pokemonsByType);
        })
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  return {
    pokemons,
    namePokemon,
    types,
    currentType,
    nameTrainer,
    handleChangeType,
    handleSubmit,
  };
};

export default usePokedex;
