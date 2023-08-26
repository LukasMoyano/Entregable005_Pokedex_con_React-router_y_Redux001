const FooterHome = () => {
  return (
    <section>
      {/*Red Section*/}
      <div className="bg-red-600 h-20"></div>

      {/*Black Section*/}
      <div className="bg-black h-14"></div>

      {/*Ball button*/}
      <div className="flex items-center justify-center w-20 h-20 bg-white border-50 border-black rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-16 bg-black rounded-full"></div>
      </div>
    </section>  )
}

export default FooterHome