import axios from "axios";
import { useEffect, useState } from "react";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  console.log(pokemon);

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {/* Mapear y mostrar las cartas de pokémon */}
      {paginatedPokemons.map((pokemon) => (
        <div
          key={pokemon.url}
          className="w-64 max-h flex-shrink-0 m-4 border border-gray-300 rounded-lg"
        >
          <PokemonCard pokemonUrl={pokemon.url} />
        </div>
      ))}

      {/* Mostrar paginación si hay más de una página */}
      {pokemons.length > itemsPerPage && (
        <div className="w-full flex justify-center mt-4">
          <nav
            className="relative z-0 inline-flex shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {/* Botón de página anterior */}
            <button
              onClick={() => setPageNumber((prevPage) => prevPage - 1)}
              className={`whitespace-nowrap inline-flex items-center justify-center py-2 px-3 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 ${
                pageNumber === 0 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={pageNumber === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="flex items-center justify-center bg-white border-t border-b border-gray-300 py-2 px-4">
              {/* Botones de páginas */}
              {Array.from(
                Array(Math.ceil(pokemons.length / itemsPerPage)).keys()
              ).map((page, index) => (
                <button
                  key={index}
                  onClick={() => setPageNumber(page)}
                  className={`whitespace-nowrap inline-flex items-center justify-center py-2 px-3 border border-gray-300 text-sm font-medium ${
                    pageNumber === page
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
            {/* Botón de página siguiente */}
            <button
              onClick={() => setPageNumber((prevPage) => prevPage + 1)}
              className={`whitespace-nowrap inline-flex items-center justify-center py-2 px-3 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 ${
                pageNumber === Math.ceil(pokemons.length / itemsPerPage) - 1
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={
                pageNumber === Math.ceil(pokemons.length / itemsPerPage) - 1
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};
  
export default PokemonCard;
