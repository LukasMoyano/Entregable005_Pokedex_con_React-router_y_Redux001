import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/PokemonId";

function App() {
  
  return (
    <section className='font-["Inter"]'>
      <Routes>

        <Routes path='/' element={<Home />} />

        <Routes path='/pokedex' element={<Pokedex />} />

        <Routes path='/pokedex/:id' element={<PokemonId />} />

      </Routes>
    </section>
  );
}

export default App;
