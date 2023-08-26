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
