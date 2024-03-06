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
        Swal.fire({
          title: "¿Eres mayor de  18 años?",
          background: "#2c2c2c",
          icon: "question",
          iconColor: "#BB7EBC",
          color: "white",
          showCancelButton: true,
          confirmButtonText: "Sí, soy mayor",
          cancelButtonText: "No, soy menor",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            // Si el usuario confirma que es mayor de  18 años, redirigimos a /register22
            Swal.fire({
              title: "¡Bienvenido a TuneMatch!",
              background: "#2c2c2c",
              color: "white",
              icon: "success",
              imageAlt: "Custom image",
              text: "Completa tu registro siguiendo los pasos",
            });
            console.log("Esto es en handleLoginSuccess:", response);
            navigate("/register22");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Si el usuario niega ser mayor de  18 años, muestro un alert de disculpa
            Swal.fire({
              background: "#2c2c2c",
              title: "Lo sentimos",
              text: "Debes ser mayor de  18 años para ingresar.",
              color: "white",
              icon: "info",
            });
          }
        });
      }
    } catch (error) {
      console.error("Google login error:", error);
      handleLoginError(error);
    }
  };

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
