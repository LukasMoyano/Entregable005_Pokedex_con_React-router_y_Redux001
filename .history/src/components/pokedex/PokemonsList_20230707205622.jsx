import { useState } from "react";
import PropTypes from "prop-types";
import PokemonCard from "./pokemonCard";

const ITEMS_PER_PAGE = 9;

const PokemonsList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pokemons.length / ITEMS_PER_PAGE);

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
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
        {visiblePokemons.map((pokemon) => (
          <div className="w-261 h-383 flex-shrink-0" key={pokemon.url}>
            <PokemonCard pokemonUrl={pokemon.url} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="mr-2 px-2 py-1 rounded bg-gray-200"
        >
          &lt;&lt;
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          if (index < 3 || index === currentPage - 1 || index === totalPages - 1) {
            return (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`mr-2 px-2 py-1 rounded ${
                  currentPage === index + 1 ? "bg-gray-500 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            );
          } else if (index === 3) {
            return (
              <button key={index} disabled className="mr-2 px-2 py-1 rounded bg-gray-200">
                ...
              </button>
            );
          } else {
            return null;
          }
        })}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 rounded bg-gray-200"
        >
          &gt;&gt;
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
