// Importa la función useDispatch de react-redux, que se utiliza para enviar acciones a la tienda Redux.
import { useDispatch } from "react-redux";

// Importa el componente FooterHome desde una ubicación relativa.
import FooterHome from "../components/home/FooterHome";

// Importa una acción llamada setNameTrainer desde un archivo relacionado con Redux.
import { setNameTrainer } from "../store/slices/nameTrainer.slice";

// Importa la función useNavigate de react-router-dom, que se utiliza para navegar entre rutas en una aplicación de enrutamiento.
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate("Pokedex"); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="row-gap column-gap  grid grid-rows-[1fr_auto] min-h-screen bg-[#E5E5E5]">
      {/* Sección superior */}
      <section className="flex flex-col items-center justify-center mx-2">
        <article>
          <div className="text-center">
            <img className="w-full mx-auto" src="/images/logo.png" alt="" />
          </div>
          <h3 className="text-red-500 font-bold text-center text-2xl">
            Hello Trainer!
          </h3>
          <p className="text-center text-lg">
            To start, please introduce your...
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              required
              id="nameTrainer"
              type="text"
              placeholder="Nickname..."
              className="relative mb-3 xl:w-96 mx-2 align-baseline bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:w-96 mr-1"
            />
            <button
              type="submit"
              className="px-3 rounded bg-red-500 hover:bg-red-600 text-white border-blue-700"
            >
              Play!
            </button>
          </form>
        </article>
      </section>
      {/* Sección inferior */}
      <FooterHome />{" "}
      {/* Renderiza el componente FooterHome en la sección inferior. */}
    </main>
  );
};

export default Home; 
