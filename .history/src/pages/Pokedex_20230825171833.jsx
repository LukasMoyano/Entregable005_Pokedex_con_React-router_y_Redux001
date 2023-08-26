import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";
import React, { useState } from "react";
import { useEffect } from "react"; // Importa useEffect por separado


const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const nameTrainer = useSelector((state) => state.nameTrainer.name);
  const [showHomeButton, setShowHomeButton] = useState(false); // Estado para controlar la visibilidad del botón


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

  useEffect(() => {
    // Verificar si el nombre del entrenador está definido para mostrar el botón de inicio
    if (nameTrainer) {
      setShowHomeButton(true);
    } else {
      setShowHomeButton(false);
    }
  }, [nameTrainer]); // Se ejecutará cada vez que cambie el nombre del entrenador


  return (
    <main className="Absolute">
      {/* Componente Header */}
      <Header />

      <section className="text-center text-6xl p-4">
        {/* Bienvenida al entrenador */}
        <blockquote data-arwes-global-palette="error">
          <p className="text-xl">
            <span>Welcome {nameTrainer}</span>, here you can find your favorite Pokemon.
          </p>
        </blockquote>
      </section>

      {/* Añadir el botón de inicio */}
      {showHomeButton && (
        <div
          className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute bottom-3 left-1/2 transform  after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:bottom-2 after:left-2 after:transform -translate-x-1/2 after:border-[9px] after:border-black"
          onClick={() => navigate("/")}
        >
          <p className="text-center text-xs pt-1">Home</p>
        </div>
      )}

      <section className="capitalize mt-5 mb-10 flex flex-col sm:flex-row justify-center items-center">
        {/* Formulario de búsqueda */}
        <form onSubmit={handleSubmit} className="flex">
          {/* Input de búsqueda */}
          {/* ... */}
        </form>

        {/* Selección por tipo */}
        <select onChange={handleChangeType} className="mt-3 sm:mt-0 sm:ml-3">
          {/* ... */}
        </select>
      </section>

      {/* Componente PokemonsList */}
      <PokemonsList pokemons={pokemonsByName} />
    </main>
  );
};

export default Pokedex;