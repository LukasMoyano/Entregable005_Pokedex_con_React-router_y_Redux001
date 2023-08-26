// Importa la función useDispatch de react-redux, que se utiliza para enviar acciones a la tienda Redux.
import { useDispatch } from "react-redux";

// Importa el componente FooterHome desde una ubicación relativa.
import FooterHome from "../components/home/FooterHome";

// Importa una acción llamada setNameTrainer desde un archivo relacionado con Redux.
import { setNameTrainer } from "../store/slices/nameTrainer.slice";

// Importa la función useNavigate de react-router-dom, que se utiliza para navegar entre rutas en una aplicación de enrutamiento.
import { useNavigate } from "react-router-dom";



const Home = () => {
  // Define un componente funcional llamado "Home".
  const dispatch = useDispatch(); // Inicializa la función dispatch para enviar acciones Redux.

  const navigate = useNavigate("Pokedex"); // Inicializa la función navigate para realizar la navegación entre rutas.

  
      // Define una función llamada handleSubmit que se ejecuta cuando se envía el formulario.
  const handleSubmit = (e) => {

         // Previene el comportamiento predeterminado del formulario de recargar la página.
    e.preventDefault();
    
    // Obtiene el valor del campo de entrada con el id "nameTrainer" del formulario.
    const nameTrainer = e.target.nameTrainer.value; 
    
    // Envía una acción Redux llamada setNameTrainer con el nombre del entrenador como argumento.
    dispatch(setNameTrainer(nameTrainer)); 
    
    // Navega a la ruta "/pokedex".
    navigate("/pokedex"); 
  };


  return (
    <main className="row-gap column-gap  grid grid-rows-[1fr_auto] min-h-screen">
      {/* Sección superior */}
      <section className="flex flex-col items-center justify-center mx-2">
        <article>
          <div className="text-center">
            <img className="w-full mx-auto" src="/images/logo.png" alt="" />
          </div>
          <h3 className="text-red-500 font-bold text-center text-2xl">
            Hello Trainer!
          </h3>
          <p className="text-center text-lg">To start, please introduce your...</p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              required
              id="nameTrainer"
              type="text"
              placeholder="Nickname..."
              className="mr-1"
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

export default Home; // Exporta el componente "Home" para que pueda ser utilizado en otros lugares de la aplicación.
