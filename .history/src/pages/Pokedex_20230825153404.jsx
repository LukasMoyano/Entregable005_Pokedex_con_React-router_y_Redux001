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

      {/* Bienvenida al entrenador */}
      <section className="">
        <blockquote data-arwes-global-palette="error">
          <p className="text-xl">
            <span>Welcome {nameTrainer}</span>, here you can find your favorite
            Pokemon.
          </p>
        </blockquote>
      </section>

      <section className="relative ">
        {/* Formulario de búsqueda */}
        <form onSubmit={handleSubmit}>
          <div className>
            {/* Input de búsqueda */}
            <input
              id="namePokemon"
              placeholder="Looking for a Pokémon!!!..."
              className=""
              label="Type query"


              type="text"






            />

            {/* Botón de búsqueda */}
            <button
              type="text"
              className="
            
            px-6 pb-2 pt-2.5
            
            
            flex-shrink-0 h-10 bg-red-600 text-white font-medium text-sm  py-2 text-center mr-2 mb-0 active:scale-95



            block w-full rounded uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Search
            </button>
          </div>

          {/* Selección por tipo */}
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
      </section>

      {/* Componente PokemonsList */}
      <PokemonsList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;
