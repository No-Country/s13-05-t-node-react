/* eslint-disable react/prop-types */
// import { CiLocationOn } from "react-icons/ci";
import banner from "../../assets/banner.jpg";
import ModalComponent from "../Modal/ModalComponent";
import {
  // bandasMusicales,
  // generosMusicales,
  // miGeneroX,
} from "../../utils/datas";
import ModalGeneros from "../Modal/ModalGeneros";
import useGeneros from "../../hooks/useGeneros";
import ModalBandas from "../Modal/ModalBandas";
import useBands from "../../hooks/useBands";
import ModalNombre from "../Modal/ModalNombre";
import ModalImagen from "../Modal/ModalImagen"

function ProfileCard({
  img,
  nombre,
  bandas,
  generos,
  activo,
  miGenero,
  // ultimaPosicion,
  fotos,
}) {
  const { handleReloaded } = useGeneros();
  const { handleReloadedBands } = useBands();

  const MAX_LENGTH = 10;

  const displayGeneros =
    generos.length > MAX_LENGTH
      ? `${generos.substring(0, MAX_LENGTH)}...`
      : generos;
  const displayBandas =
    bandas.length > MAX_LENGTH
      ? `${bandas.substring(0, MAX_LENGTH)}...`
      : bandas;

  return (
    <section className="w-screen bg-white ">
      <div className=" bg-gray-100 flex flex-col">
        {/* Banner */}
        <div
          className="h-[240px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          {/* <img src={banner} alt="" //> */}
        </div>

        {/* Avatar */}
        <div className="flex justify-center items-center -mt-20">
          <img
            src={img}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <ModalImagen
            titulo={"Imagenes"}
          />

        </div>

        {/* Info */}
        <div className="flex-grow flex flex-col items-center gap-10 py-6">
          <div className="w-[80%] md:w-[50%] lg:[50%] flex flex-col items-center gap-4">
            {/* Status */}
            <div className="flex gap-2">
              <h1 className="text-2xl text-black font-semibold mb-2">
                {nombre}
              </h1>
              <ModalNombre titulo={"Nombre"} />
            </div>
            <div className="flex items-center gap-6 mb-4">
              {activo === true ? (
                <span className="inline-block bg-green-500 text-white text-sm font-bold rounded-full px-3 py-1">
                  Activo
                </span>
              ) : (
                <span className="inline-block bg-red-500 text-white text-sm font-bold rounded-full px-3 py-1">
                  Inactivo
                </span>
              )}
              <div>
                {miGenero === "Mujer" ? (
                  <span className="inline-block bg-pink-700 text-white text-sm font-bold rounded-full px-3 py-1">
                    Mujer
                  </span>
                ) : (
                  <span className="inline-block bg-blue-600 text-white text-sm font-bold rounded-full px-3 py-1">
                    Hombre
                  </span>
                )}
               
              </div>
              {/* <span className="flex items-center bg-slate-600 text-white text-sm font-bold rounded-full px-3 py-1">
                <CiLocationOn /> a {ultimaPosicion} km de distancia
              </span> */}
            </div>
            {/* Name */}

            <div className="full">
              <div className="flex gap-2">
                <h2 className="text-gray-800 font-bold text-2xl">About me</h2>
                <ModalComponent titulo={"About me"} id={4} />
              </div>
              <p className="text-slate-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sit dolorem assumenda quo molestias. Unde saepe
                maiores, sit laudantium soluta animi ipsam alias odit nisi ea
                quisquam sed odio perferendis?
              </p>
            </div>

            {/* Gender */}
            <div className="w-full">
              <div className="flex gap-2">
                <h2 className="text-gray-800 font-bold text-2xl">
                  Mis Generos Favs
                </h2>
                <ModalGeneros 
                  titulo={"Mis Géneros Favoritos"}
                  onClick={handleReloadedBands}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {displayGeneros && displayGeneros.length > 0 ? (
                  displayGeneros.map((genero, index) => (
                    <span
                      key={index}
                      className="bg-[#BB7EBC] text-white text-sm font-bold rounded-full px-3 py-1 mb-3 mr-3 truncate"
                      style={{ maxWidth: "calc(33.3333% - 1rem)" }} // Definir el ancho máximo de cada elemento
                      title={genero}
                    >
                      #{genero}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">Escoge tus generos Favs</span>
                )}
              </div>
            </div>

            {/* Bands */}
            <div className="w-full">
              <div className="flex gap-2">
                <h2 className="text-gray-800 font-bold text-2xl">
                  Mis Bandas Favs
                </h2>
                <ModalBandas
                  titulo={"Mis Bandas Favoritas"}
                  onClick={handleReloaded}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {displayBandas && displayBandas.length > 0 ? (
                  displayBandas.map((banda, index) => (
                    <span
                      key={index}
                      className="bg-[#BB7EBC] text-white text-sm font-bold rounded-full px-3 py-1 mb-3 mr-3 truncate"
                      style={{ maxWidth: "calc(33.3333% - 1rem)" }} // Definir el ancho máximo de cada elemento
                      title={banda}
                    >
                      #{banda}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">Escoge tus bandas Favs</span>
                )}
              </div>
            </div>

            {/* Gallery */}
          </div>
          <h2 className="text-gray-800 font-bold text-2xl">Galeria</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {fotos.map((foto, index) => (
              <div key={index}>
                <img
                  className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                  src={foto}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
