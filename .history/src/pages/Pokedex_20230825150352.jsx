import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";

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
    <main>
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

<section className="absolute">
      {/* Formulario de búsqueda */}
      <form onSubmit={handleSubmit}>
        <div className>
          {/* Input de búsqueda */}
          <input
            id="namePokemon"
            placeholder="Looking for a Pokémon!!!..."
            type="text"
            className=""
          />

          {/* Botón de búsqueda */}
          <button
            type="text"
            className="flex-shrink-0 h-10 bg-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-0 active:scale-95 duration-300"
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
