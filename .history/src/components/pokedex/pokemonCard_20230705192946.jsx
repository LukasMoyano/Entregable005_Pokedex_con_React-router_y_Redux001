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
    <article>
      {/* Seccion Superior */}
      <section>
        <div>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
        </div>
      </section>

      {/* Seccion inferior */}
      <section>
        <h3>{pokemon?.name}</h3>
        <h5></h5>
        <span>Type</span>

        <hr />
      </section>

      <section className="whitespace-normal">
        <div className="grid grid-cols-3 gap-4">
          {pokemon?.stats?.map((stat) => (
            <div
              className="flex flex-col items-center p-2 border border-gray-300 rounded-lg"
              key={stat.stat.name}
            >
              {/* Tipo de ataque */}
              <h6 className="px-1 bg-gray-800 text-white text-xs">
                {stat.stat.name}
              </h6>
              <hr />
              {/* Fuerza del ataque */}
              <span className="py-0.5 px-1 rounded bg-gray-500 text-white text-xs">
                {stat.base_stat}
              </span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default PokemonCard;
