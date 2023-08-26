import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (

    <section>

      <div className="bg-red-600 h-16 relative">
        {/* Franja Roja */}
        <div className="absolute left-2 bottom-0 w-[230px]">
          <img className="" src="/images/logo.png" alt="" />
        </div>

      </div>

      {/* Franja Negra */}
      <div className="bg-black h-12"></div>

      {/* La Bola */}
      <button
        onClick={handleHomeClick}
        hover="true"
        className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute top-7 -right-6 transform -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:bottom-2 after:left-2 after:transform after:border-[9px] after:border-black"
      >
       Home
      </button>
    </section>
  );
};

export default Header;
