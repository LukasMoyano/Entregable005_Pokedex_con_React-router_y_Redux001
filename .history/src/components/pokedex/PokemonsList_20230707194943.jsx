import { useState } from "react";
import PropTypes from "prop-types";
import PokemonCard from "./pokemonCard";

const ITEMS_PER_PAGE = 5;
const PAGES_PER_GROUP = 3;

const PokemonsList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pokemons.length / ITEMS_PER_PAGE);
  const totalGroups = Math.ceil(totalPages / PAGES_PER_GROUP);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;

  const visiblePokemons = pokemons.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {visiblePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="mr-2 px-2 py-1 rounded bg-gray-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17L18 12L13 7"
              stroke="#FBFBFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 17L11 12L6 7"
              stroke="#FBFBFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {Array.from({ length: totalGroups }).map((_, index) => {
          const startPage = index * PAGES_PER_GROUP + 1;
          const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, totalPages);

          return (
            <button
              key={index}
              onClick={() => goToPage(startPage)}
              className={`mr-2 px-2 py-1 rounded ${
                currentPage >= startPage && currentPage <= endPage
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {startPage}-{endPage}
            </button>
          );
        })}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 rounded bg-gray-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17L6 12L11 7"
              stroke="#FBFBFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 17L13 12L18 7"
              stroke="#FBFBFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonsList;
