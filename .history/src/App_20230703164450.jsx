import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/PokemonId";

function App() {
  
  return (
    <section className='font-["Inter"]'>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/pokedex' element={<Pokedex />} />

        <Route path='/pokedex/:id' element={<PokemonId />} />

      </Routes>
    </section>
  );
}

export default App;
