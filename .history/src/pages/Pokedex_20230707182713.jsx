import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  console.log({pokemons})
  const [namePokemon, setNamePokemon] = useState("");

  const [types, setTypes] = useState([]);

  const [currentType, setCurrentType] = useState("");
  
  const nameTrainer = useSelector((store) => store.nameTrainer);
  
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
    if (!currentType) {
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

  axios
  .get(URL)
  .then(({ data }) => setPokemons(data.results))
  .catch((err) => console.log(err))
    }
  }, [currentType])
  
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
  
  return (
    <main>
      <Header />
      <p>
        <span>Welcome {nameTrainer}</span>, here you can find your favorite
        Pokemon.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mx-2">
          <input
            id="namePokemon"
            placeholder="Looking for a Pokémon!!!..."
            type="text"
            className=""
          />

          <button
            type="submit"
            className=" text-white flex-shrink-0 bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-0 active:scale-95 duration-300"
          >
            Search
          </button>
        </div>

        <select onChange={handleChangeType}>
          <option value="submit">All</option>
          {types.map((type) => (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </form>
      <PokemonsList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;
