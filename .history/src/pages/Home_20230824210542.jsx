import { useDispatch } from "react-redux";
import FooterHome from "../components/home/FooterHome";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="grid grid-rows-[1fr_auto] min-h-screen">
      {/* Sección superior */}
      <section className="flex flex-col items-center justify-center mx-2 max-w-lg">
        <div className="text-center">
          <img className="w-full mx-auto" src="/images/logo.png" alt="" />
        </div>
        <h3 className="text-red-500 font-bold text-center text-2xl">
          Hello Trainer!
        </h3>
        <p>To start, please introduce your...</p>
        <form onSubmit={handleSubmit} className="mb-2 block flex justify-center">
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
      </section>

      {/* Sección inferior */}
      <FooterHome />
    </main>
  );
};
export default Home;
