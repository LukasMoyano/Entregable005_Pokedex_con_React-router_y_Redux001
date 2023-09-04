import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";


const Pokedex = () => { 
  
  const {
    pokemons,
    namePokemon,
    types,
    currentType,
    nameTrainer,
    handleChangeType,
    handleSubmit
  } = usePokedex();

  return (
    <main className="Absolute">
      {/* Componente Header */}
      <Header />

      <section className="text-center text-6xl p-4">
        {/* Bienvenida al entrenador */}
        <blockquote data-arwes-global-palette="error">
          <p className="text-xl">
          <span className="text-red-700 font-bold ">
  Welcome, {nameTrainer}!
</span> This is the place where your favorite Pokémon hangs out!
          </p>
        </blockquote>
      </section>


      <section className=" mt-5 mb-10 flex flex-col sm:flex-row justify-center items-center">
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
            className="px-6 pb-2 pt-2.5 flex-shrink-0 h-10 bg-red-600 text-white font-medium text-sm py-2 text-center mr-2 mb-0 active:scale-95 block rounded uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Search
          </button>
        </form>

        {/* Selección por tipo */}
        <select onChange={handleChangeType} className=" capitalize mt-3 sm:mt-0 sm:ml-3">
          <option value="">By Type</option>
          {types.map((type) => (
            <option
              className="capitalize text-center"
              value={type.name}
              key={type.name}>
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
