import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";

const pokeLinearGradients = {
  grass:
    "border-t border-l border-r border-gray-400 rounded-t-lg bg-gradient-to-b from-teal-400 to-green-400",
  fire: "rounded-t-md bg-gradient-to-b from-red-500 via-red-600 to-yellow-500",
  water: "bg-gradient-to-b from-blue-900 to-blue-100",
  bug: "bg-gradient-to-b from-green-500 to-lime-300",
  flying: "bg-gradient-to-l from-red-700 via-pink-600 to-red-900",
  fighting: "bg-gradient-to-b from-#96402A to-#F1613C via-#CB735D",
  poison: "bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
  ghost: "bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-700",
  rock: "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-200",
  dark: "bg-gradient-to-b from-black via-gray-900 to-gray-500",
  ice: "bg-gradient-to-b from-blue-300 via-blue-400 to-blue-100",
  steel: "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-400",
  dragon: "bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300",
  fairy: "bg-gradient-to-b from-red-700 via-pink-500 to-pink-300",
  electric: "bg-gradient-to-b from-blue-900 via-blue-900 to-blue-300",
  ground: "bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-500",
  psychic: "bg-gradient-to-b from-purple-700 via-purple-500 to-pink-500",
  normal: "bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
};

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
      <PokemonsList pokemons={pokemonsByName} />

// Modificación para tarjetas de Pokemon individuales
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {pokemonsByName.map((pokemon) => (
    <div className="w-261 h-383 flex-shrink-0 border rounded-lg" key={pokemon.url}>
      <div className={`relative h-40 ${pokeLinearGradients[pokemon?.types[0]?.type?.name]}`}>
        <div className="absolute px-12 w-214 h-147 flex-shrink-0">
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            alt={pokemon?.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sección NOMBRE */}
      <section className="flex flex-col items-center justify-center w-173 h-17 flex-shrink-0">
        <h3 className="mx-auto items-center capitalize hover:uppercase text-center font-bold text-3xl my-7">
          {pokemon?.name}
        </h3>
      </section>

      {/* TYPE */}
      <section className="flex flex-col items-center justify-center w-119 h-10 flex-shrink-0">
        <h5 className="text-xl text-center capitalize">{formatTypesPokemon(pokemon?.types)}</h5>
      </section>

      <section className="flex flex-col items-center justify-center w-56 h-10 flex-shrink-0">
        <span className="capitalize text-2xl flex items-center justify-center text-gray-600">
          Type
        </span>
      </section>

      <hr />

      <section className="whitespace-normal">
        <div className="grid grid-cols-3 gap-1">
          {pokemon?.stats?.map((stat) => (
            <div
              className="flex flex-col items-center p-2 border border-gray-300 rounded-lg"
              key={stat.stat.name}
            >
              {/* Tipo de ataque */}
              <h6 className="bg-red-600 text-white text-center capitalize w-full flex-grow">
                {stat.stat.name}
              </h6>
              {/* Fuerza del ataque */}
              <span className="text-center rounded bg-black text-white w-full flex-grow">
                {stat.base_stat}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ))}
</div>
    </main>
  );
};

export default Pokedex;
