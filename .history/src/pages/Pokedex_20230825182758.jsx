import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";
import { TEInput } from "tw-elements-react";


const Pokedex = () => {
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
    // Cargar los tipos de Pokémon al montar el componente
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
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al montar el componente

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

  return (
    <main className="Absolute">
      {/* Componente Header */}
      <Header />

      <section className="text-center text-6xl p-4">
        {/* Bienvenida al entrenador */}
        <blockquote data-arwes-global-palette="error">
          <p className="text-xl">
            <span>Welcome, {nameTrainer}!</span> This is the place where your favorite Pokémon hangs out!
          </p>
        </blockquote>
      </section>


      <section className="capitalize mt-5 mb-10 flex flex-col sm:flex-row justify-center items-center">
        {/* Formulario de búsqueda */}
        <form onSubmit={handleSubmit} className="flex">
          {/* Input de búsqueda */}
          <input
            id="namePokemon"
            placeholder="Looking for a Pokémon!!!..."
            className="relative mb-3 xl:w-96 mx-2 align-baseline bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:w-96"
            label="Type query"
            type="text"
          />


          {/* Botón de búsqueda */}
          <button
            type="text"
            className="px-6 pb-2 pt-2.5 flex-shrink-0 h-10 bg-red-600 text-white font-medium text-sm py-2 text-center mr-2 mb-0 active:scale-95 block rounded uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Search
          </button>
        </form>

        {/* Selección por tipo */}
        <select onChange={handleChangeType} className="mt-3 sm:mt-0 sm:ml-3">
          <option value="toUpperCase">All</option>
          {types.map((type) => (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </section>


      {/* Componente PokemonsList */}
      <PokemonsList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;
