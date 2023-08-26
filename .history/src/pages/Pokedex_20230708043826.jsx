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
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1280";

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
      {/* Componente Header */}
      <Header />
  
      {/* Bienvenida al entrenador */}
      <p className="text-xl">
        <span>Welcome {nameTrainer}</span>, here you can find your favorite Pokemon.
      </p>
  
      {/* Formulario de búsqueda */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Input de búsqueda */}
          <input
            id="namePokemon"
            placeholder="Looking for a Pokémon!!!..."
            type="text"
            className=""
          />
  
          {/* Botón de búsqueda */}
          <button
            type="submit"
            className="flex-shrink-0 h-10 bg-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-0 active:scale-95 duration-300"
          >
            Search
          </button>
        </div>
  
        {/* Selección de tipo */}
        <select onChange={handleChangeType}>
          <option value="">All</option>

          {/* Opciones de tipo */}
          {types.map((type) => (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </form>
  
      {/* Componente PokemonsList */}
      <PokemonsList />
    </main>
  );
};

export default Pokedex;
