import { useDispatch, useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import {
  getFotos,
  getId,
  getNombre,
  getTuneMatch,
  logout,
  selectIsLoggedIn,
} from "../../redux/authSlice";
import { eventos, obtenerDatosUsuario } from "./auxHome";
import { useEffect, useState } from "react";
import CardColumnHome from "./CardColumnHome";
import MiddleColumnHome from "./MiddleColumnHome";

const HomeContent = () => {
  const userId = useSelector(getId);
  const tunematch = useSelector(getTuneMatch);
  // console.log("Este es el userId:", userId);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const fotos = useSelector(getFotos);
  const nombre = useSelector(getNombre);
  const nombreParaUser = nombre
    .replace(/\s/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;
  const [datosUsuario, setDatosUsuario] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (redirectUrl) => {
    window.open(redirectUrl, "_blank");
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      if (!isLoggedIn || !userId) {
        if (isLoggedIn) {
          // para evitar bucle infinito
          dispatch(logout());
        }
        return;
      } else {
        try {
          const datos = await obtenerDatosUsuario(tunematch);
          setDatosUsuario(datos);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    obtenerDatos();
  }, [dispatch, isLoggedIn, tunematch, userId]);

  return (
    <div className="my-4 flex flex-col md:flex-row">
      <div className="w-4/5 md:w-1/4 mx-auto">
        <CardColumnHome
          profilePhoto={profilePhoto}
          nombre={nombre}
          nombreParaUser={nombreParaUser}
          eventos={eventos}
          handleClick={handleClick}
        />
      </div>
      <div className="w-4/5 md:w-2/5 mx-auto">
        <MiddleColumnHome datosUsuario={datosUsuario} />
      </div>
      <div className="w-4/5 md:w-1/4 flex flex-col mx-auto">
        <Chat />
      </div>
    </div>
  );
};

export default HomeContent;
