import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect } from "react";

const Pokedex = () => {

  const namenameTrainer = useSelector(store => store.nameTrainer)

  useEffect(() => {

  }, [])





  return (
    <main>
      <Header />
      <main>
      <p>
        <span>Welcome {nameTrainer}</span>, here you can find your favorite Pokemon.
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
            className="flex-shrink-0 w-40 h-10 bg-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-0 active:scale-95 duration-300">
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
}

export default Pokedex;