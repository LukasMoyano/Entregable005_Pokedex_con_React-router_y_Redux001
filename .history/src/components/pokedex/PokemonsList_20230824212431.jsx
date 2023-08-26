import { useState } from "react"; // Importa la función useState desde la librería React.
import PropTypes from "prop-types"; // Importa PropTypes para definir las propiedades del componente.
import PokemonCard from "./pokemonCard"; // Importa el componente PokemonCard desde un archivo local.

const ITEMS_PER_PAGE = 9; // Define una constante para el número de elementos por página.

const PokemonsList = ({ pokemons }) => { // Declara un componente de función llamado PokemonsList que recibe una propiedad "pokemons".
  const [currentPage, setCurrentPage] = useState(1); // Declara una variable de estado "currentPage" inicializada en 1 y una función "setCurrentPage" para actualizarla.
  const totalPages = Math.ceil(pokemons.length / ITEMS_PER_PAGE); // Calcula el número total de páginas según la cantidad de pokémons y elementos por página.

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; // Calcula el índice de inicio de los elementos a mostrar en la página actual.
  const endIndex = currentPage * ITEMS_PER_PAGE; // Calcula el índice de finalización de los elementos a mostrar en la página actual.

  const visiblePokemons = pokemons.slice(startIndex, endIndex); // Crea un array con los pokémons a mostrar en la página actual.

  const goToPage = (page) => { // Define una función para cambiar a una página específica.
    setCurrentPage(page); // Actualiza el estado de la página actual.
  };

  const goToNextPage = () => { // Define una función para ir a la siguiente página.
    if (currentPage < totalPages) { // Verifica si no se encuentra en la última página.
      setCurrentPage(currentPage + 1); // Incrementa la página actual.
    }
  };

  const goToPreviousPage = () => { // Define una función para ir a la página anterior.
    if (currentPage > 1) { // Verifica si no se encuentra en la primera página.
      setCurrentPage(currentPage - 1); // Decrementa la página actual.
    }
  };

  return (
    <section>
      {/* Sección que muestra las tarjetas de los Pokémon */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {visiblePokemons.map((pokemon) => ( // Mapea los pokémons visibles y crea una tarjeta para cada uno.
          <li key={pokemon.url} className="w-full h-full">
            <div className="bg-white w-250 h-383 mx-auto">
              <PokemonCard pokemonUrl={pokemon.url} /> {/* Renderiza el componente PokemonCard para cada pokémon. */}
            </div>
          </li>
        ))}
      </ul>
      {/* Sección de paginación */}
      <div className="flex justify-center mt-4">
        {/* Botón para ir a la página anterior */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="mr-2 px-2 py-1 rounded bg-red-500"
        >
          &lt;&lt; {/* Muestra un símbolo para ir a la página anterior. */}
        </button>

        {/* Botones de número de página */}
        {Array.from({ length: totalPages }).map((_, index) => {
          if (
            index < 3 ||
            index === currentPage - 1 ||
            index === totalPages - 1
          ) {
            // Botones de página visible
            return (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`mr-2 px-2 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-red-500"
                }`}
              >
                {index + 1} {/* Muestra el número de página. */}
              </button>
            );
          } else if (index === 3) {
            // Botón de puntos suspensivos
            return (
              <button
                key={index}
                disabled
                className="mr-2 px-2 py-1 rounded bg-red-500"
              >
                ... {/* Muestra puntos suspensivos para indicar más páginas. */}
              </button>
            );
          } else {
            return null; // No muestra botón para otras páginas intermedias.
          }
        })}

        {/* Botón para ir a la página siguiente */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 rounded bg-red-500"
        >
          &gt;&gt; {/* Muestra un símbolo para ir a la página siguiente. */}
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
  ).isRequired, // Define las propiedades esperadas y sus tipos.
};

export default PokemonsList; // Exporta el componente PokemonsList para su uso en otros lugares.
