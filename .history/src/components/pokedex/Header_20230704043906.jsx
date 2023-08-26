const Header = () => {
  return (
    <section>
      {/*Red Section*/}
      <div className="bg-red-600 h-20"></div>

      {/*Black Section*/}
      <div className="bg-black h-14"></div>

      {/*Ball button*/}
      <div className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute top-12 -left-1/2 transform -translate-x-1/2 after:content-[''] after:h-11 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:bottom-2 after:left-2 after:transform -translate-x-1/2 after:border-[9px] after:border-black"></div>
    </section>
  );
};

export default Header;
