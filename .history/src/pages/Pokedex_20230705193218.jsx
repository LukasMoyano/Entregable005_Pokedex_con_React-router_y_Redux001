import { useSelector } from "react-redux";
import Header from "/components/pokedex/Header";
import { useEffect,useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonnList"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
 
  const nameTrainer = useSelector(store => store.nameTrainer)

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=40'

    axios.get(URL)
    .then(({ data }) => setPokemons(data.results))
    .catch(({ err }) => console.log(err))
  }, [])

  return (
  <main>
      <Header />
      <main>
        <p>
          <span>Welcome {nameTrainer}</span>, here you can find your favorite
          Pokemon.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="namePokemon"
              placeholder="Looking for a Pokémon!!!..."
              type="text"
              className=""
              />
            <button

              type="submit"
              className="flex-shrink-0 w-40 h-10 bg-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-0 active:scale-95 duration-300"
              >
              Search
            </button>
          </div>
          <select onChange={handleChangeType}>

            <option value="">All</option>
            {types.map((type) => (
              <option value={type.name} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </main>
    </main>
  );
};

export default Pokedex;

///    const // = "https://pokeapi.co/api/v2/pokemon?limit=1281";