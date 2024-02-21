import generos from "../../assets/generos.png";
import LOGO from "../../assets/LOGO.png";

const PageSelection = () => {
  return (
    <div>
      <nav className="flex items-center w-full top-0 z-20 relative bg-black text-white pt-2 pb-2 md:pb-0 md:pt-4">
        <ul className="flex items-center space-x-4 sm:space-x-8 md:space-x-14 mx-4 md:mx-10">
          <li>
            <img src={LOGO} alt="logo" title="logo de la aplicación" />
          </li>
        </ul>
      </nav>

      <div
        className="pt-20 pb-40 sm:pt-40 h-[90vh] flex items-center text-white relative"
        style={{
          backgroundImage: `url(${generos})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between w-full h-[85vh]  px-2 sm:px-4 md:px-10 z-40">
          <div className="place-content-start flex flex-col w-11/12 mx-auto justify-normal sm:justify-center sm:mx-0 sm:w-1/2 md:w-3/4 mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-6xl text-start py-10">
              Cuentanos acerca de tus géneros favoritos
            </h1>
            <p className="text-base md:text-xl  md:pr-56">
              Dinos qué música te apasiona y nos aseguraremos de conectar
              contigo a personas que comparten tus mismos gustos. ¡Comparte tu
              pasión musical y descubre nuevas experiencias con personas afines!
            </p>
            <div className="flex items-center justify-center  my-5 sm:my-10">
              {/** Aquí se agregaría la lista de géneros con opciones seleccionables */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSelection;
