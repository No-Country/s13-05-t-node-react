import Swal from "sweetalert2";
import useGeolocation from "../hooks/useGeolocation";
import axios from "axios";
import { API_URL_GOOGLE } from "../config/api";
import { useDispatch } from "react-redux";
import { updateAll, login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const useLoginGoogle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { obtenerPosicion, ultimaPosicion } = useGeolocation();

  const handleLoginSuccess = async (response) => {
    try {
      await obtenerPosicion();
      console.log("Google login success:", response);
      console.log("Ultima posición:", ultimaPosicion);
      const body = { id_token: response.credential, ultimaPosicion };

      const { data } = await axios.post(API_URL_GOOGLE, body);
      console.log(data);
      const { id } = data.usuario;
      if (id) {
        dispatch(updateAll(data.usuario));
        dispatch(login());
        navigate("/register22");

        Swal.fire({
          title: "Bienvenido a TuneMatch!",
          background: "#2c2c2c",
          color: "white",
          imageUrl:
            "https://images.pexels.com/photos/4406761/pexels-photo-4406761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageWidth: 350,
          imageHeight: 200,
          imageAlt: "Custom image",
          text: "Conecta a través de la música🎷",
        });
        console.log("Esto es en handleLoginSuccess:", response);
        navigate("/home");
      }
    } catch (error) {
      console.error("Google login error:", error);
      Swal.fire({
        title: "Error de autenticación",
        text: "Prueba ingresar un cuenta válida",
        background: "#2c2c2c",
        color: "white",
        icon: "error",
      });
    }
  };

  //    const result = () => {

  //    }

  const handleLoginError = (error) => {
    console.error("Google login error:", error);
    Swal.fire({
      title: "Error de autenticación",
      text: "Prueba ingresar un cuenta válida",
      background: "#2c2c2c",
      color: "white",
      icon: "error",
    });
  };

  return { handleLoginSuccess, handleLoginError };
};

export default useLoginGoogle;
