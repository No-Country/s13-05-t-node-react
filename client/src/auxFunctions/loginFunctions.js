import { API_URL_LOGIN, API_URL_GOOGLE } from "../config/api";
import { updateAll, login } from "../redux/authSlice";
// import { useDispatch } from "react-redux";
// import { setId } from '../redux/authSlice'

export const authenticateUser = async (
  correo,
  password,
  dispatch,
  ultimaPosicion
) => {
  // console.log(ultimaPosicion);

  try {
    const body = {};
    // Verifico si ultimaPosicion tiene valores que no son null
    if (
      ultimaPosicion &&
      ultimaPosicion.lat !== null &&
      ultimaPosicion.lon !== null
    ) {
      body.ultimaPosicion = ultimaPosicion;
    }

    const response = await fetch(API_URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correo, password, ...body }), // Incluyo ultimaPosicion solo si tiene valores válidos
    });

    // Verifica si response fue exitosa
    if (response.ok) {
      const data = await response.json();
      dispatch(updateAll(data.usuario));
      dispatch(login());
      return {
        status: response.status,
        success: true,
        message: data.message,
        usuario: data.usuario,
      };
    } else {
      const errorData = await response.json();
      return {
        status: response.status,
        success: false,
        message: errorData.message,
      };
    }
  } catch (error) {
    console.error("Error de autenticación:", error);
    return { success: false, message: "Hubo un error al iniciar sesión." };
  }
};

export const sendToBackend = (
  response,
  ultimaPosicion,
  dispatch,
  setEmailTuneMatch,
  handleLoginError
) => {
  const body =
    Object.keys(ultimaPosicion).length !== 0
      ? { id_token: response.credential, ultimaPosicion }
      : { id_token: response.credential };

  console.log("Body antes de enviar la solicitud:", body);

  fetch(API_URL_GOOGLE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((res) => {
      dispatch(login());
      localStorage.setItem(
        "emailTuneMatch",
        JSON.stringify(res.usuario.correo)
      );
      localStorage.setItem(
        "sessionData",
        JSON.stringify(res) // Guarda todos los datos de la respuesta en localStorage
      );
      setEmailTuneMatch(res.usuario.correo);

      dispatch(updateAll(res.usuario));
    })
    .catch(handleLoginError);
};

export const handleSignOut = async () => {
  window.google.accounts.id.disableAutoSelect(); // google queda como variable global si se pone el script en el index principal
  window.google.accounts.id.revoke(
    localStorage.getItem("emailTuneMatch"),
    localStorage.getItem("sessionData"),
    (done) => {
      if (done) {
        console.log("Revocación exitosa");
        localStorage.removeItem("emailTuneMatch"); // colocar el correo en el storage puede no ser seguro, pero se necesita durante la sesion para poder cerrar
        localStorage.removeItem("sessionData");
        window.location.reload(); // en caso de que haya quedado algo en el navegador se elimina, pero no es tan necesario, podría funcionar sin reload()
      } else {
        console.error("Error al revocar el consentimiento");
      }
    }
  );
};
