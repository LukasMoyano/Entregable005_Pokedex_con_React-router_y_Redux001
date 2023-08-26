// Importa la función useState desde la librería React.
import { useState } from "react";

import PropTypes from "prop-types"; 

import PokemonCard from "./pokemonCard"; 

const ITEMS_PER_PAGE = 6;

const PokemonsList = ({ pokemons }) => {
  console.log(pokemons);

  // Declara un componente de función llamado PokemonsList que recibe una propiedad "pokemons".
  const [currentPage, setCurrentPage] = useState(1); // Declara una variable de estado "currentPage" inicializada en 1 y una función "setCurrentPage" para actualizarla.
  const totalPages = Math.ceil(pokemons.length / ITEMS_PER_PAGE); // Calcula el número total de páginas según la cantidad de pokémons y elementos por página.

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; // Calcula el índice de inicio de los elementos a mostrar en la página actual.
  const endIndex = currentPage * ITEMS_PER_PAGE; // Calcula el índice de finalización de los elementos a mostrar en la página actual.

  const visiblePokemons = pokemons.slice(startIndex, endIndex); // Crea un array con los pokémons a mostrar en la página actual.

  
// Define una función para cambiar a una página específica.
  const goToPage = (page) => {
    // Actualiza el estado de la página actual.
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    // Define una función para ir a la siguiente página.
    if (currentPage < totalPages) {
      // Verifica si no se encuentra en la última página.
      
      // Incrementa la página actual.
      setCurrentPage(currentPage + 1); 
    }
  };

  const goToPreviousPage = () => {
    // Define una función para ir a la página anterior.
    
    {/* Verifica si no se encuentra en la primera página.*/}
    if (currentPage > 1) 
      
    // Decrementa la página actual.
    setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      {/* Sección que muestra las tarjetas de los Pokémon */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Mapea los pokémons visibles y crea una tarjeta para cada uno.*/}
        {visiblePokemons.map((pokemon) => (
          <li key={pokemon.url} className="w-full h-full">
            <div className="bg-white w-250 h-383 mx-auto">
              {/* Renderiza el componente PokemonCard para cada pokémon. */}
              <PokemonCard pokemonUrl={pokemon.url} />
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
          
          {/* Muestra un símbolo para ir a la página anterior. */}
          &lt;&lt; 
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

                {/* Muestra el número de página. */}
                {index + 1} 
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
                {/* Muestra puntos suspensivos para indicar más páginas. */}
              </button>
            );
          } else {
            
            // No muestra botón para otras páginas intermedias.
            return null; 
          }
        })}

        {/* Botón para ir a la página siguiente */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 rounded bg-red-500"
        >
          {/* Muestra un símbolo para ir a la página siguiente. */}
          &gt;&gt; 
        </button>
      </div>
    </section>
  );

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  
  // Define las propiedades esperadas y sus tipos.
    ).isRequired, 
};

export default PokemonsList;
