const Header = () => {
  return (
    <section>
      {/*Franja Roja*/}
      <div className="bg-red-600 h-16 relative">
        <div className="absolute left-0 bottom-0 w-[230px]">
          <img className="" src="/images/logo.png" alt="" />
        </div>
      </div>

      {/*Franja Negra*/}
      <div className="bg-black h-12"></div>

      {/*La Bola*/}
      <div className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute top-7 -right-6 transform -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:bottom-2 after:left-2 after:transform after:border-[9px] after:border-black"></div>
    </section>
  );
};
export default Header;
