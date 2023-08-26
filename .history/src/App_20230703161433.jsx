import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <>
      <Routes>
        <Routes path='/' element={<Home />} />
        <Routes path='/pokedex' element={<Pokedex />} />
        <Routes path='/pokedex/:id' element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
