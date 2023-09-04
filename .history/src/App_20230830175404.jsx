import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/PokemonDetail";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import PokemonDetail from "./pages/PokemonDetail";
import Page404 from "./pages/Page404";


function App() {
  return (
    <section className='font-["Inter"]'>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ProtectedRoutes se anida bajo /pokedex */}
        <Route path="/pokedex" element={<ProtectedRoutes />}>
          {/* Pokedex es accesible bajo /pokedex */}
          <Route index element={<Pokedex />} />

          {/* PokemonId es accesible bajo /pokedex/:id */}
          <Route path="/pokedex/:pokemonId" element={<PokemonDetail />} />
          <Route path="*" element={<Page404/>} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
