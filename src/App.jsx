import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonId from "./pages/PokemonId";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";


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
          <Route path=":id" element={<PokemonId />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
