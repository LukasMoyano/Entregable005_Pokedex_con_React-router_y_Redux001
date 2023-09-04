import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import PokemonDetail from "./pages/PokemonDetail";
import Page404 from "./pages/Page404";

function App() {
  return (
    <section className='font-["Inter"]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<ProtectedRoutes />}>
          <Route index element={<Pokedex />} />
          <Route path="/pokedex/:pokemonId" element={<PokemonDetail />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </section>
  );
}

export default App;
