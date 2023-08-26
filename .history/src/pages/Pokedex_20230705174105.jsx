import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const nameTrainer = useSelector((store) => store.nameTrainer);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=40";
    //!LA URL DEFINITIVA
    //!const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";

    axios
      .get(URL)
      .then(({ data }) => {
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const pokemonName = e.target.namePokemon.value.toLowerCase();
    const filteredResults = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName)
    );
    setFilteredPokemons(filteredResults);
  };

  const handleTypeFilter = (e) => {
    const selectedType = e.target.value;
    if (selectedType === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filteredResults = pokemons.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
      setFilteredPokemons(filteredResults);
    }
  };

  return (
    <main>
      <Header />

      <p>
        <span>Welcome {nameTrainer}</span>, here you can find your favorite Pokemon.
      </p>

      <form onSubmit={handleSearch}>
        <div>
          <input
            id="namePokemon"
            placeholder="Looking for a Pokémon!!!..."
            type="text"
            className=""
          />

          <button
            type="submit"
            className="flex-shrink-0 w-40 h-10 bg-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-0 active:scale-95 duration-300"
          >
            Search
          </button>
        </div>

        <select onChange={handleTypeFilter}>
          <option value="">All</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          {/* Agrega más opciones para otros tipos de Pokémon */}
        </select>
      </form>

      <PokemonsList pokemons={filteredPokemons} />
    </main>
  );
};

export default Pokedex;
