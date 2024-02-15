export const authenticateUser = async (email, password) => {
  // Llama al endpoint de autenticación con fetch
  // y devolver la respuesta
  try {
    const response = await fetch("http://localhost:8080/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error de autenticación:", error);
    return { success: false, message: "Hubo un error al iniciar sesión." };
  }
};

export const sendToBackend = (
  response,
  ultimaPosicion,
  setEmailTuneMatch,
  handleLoginError
) => {
  const body =
    Object.keys(ultimaPosicion).length !== 0
      ? { id_token: response.credential, ultimaPosicion }
      : { id_token: response.credential };

  fetch("http://localhost:8080/api/usuario/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res);
      localStorage.setItem(
        "emailTuneMatch",
        JSON.stringify(res.usuario.correo)
      );
      setEmailTuneMatch(res.usuario.correo);
    })
    .catch(handleLoginError);
};

export const handleSignOut = async () => {
  window.google.accounts.id.disableAutoSelect(); // google queda como variable global si se pone el script en el index principal
  window.google.accounts.id.revoke(
    localStorage.getItem("emailTuneMatch"),
    (done) => {
      if (done) {
        console.log("Revocación exitosa");
        localStorage.removeItem("emailTuneMatch"); // colocar el correo en el storage puede no ser seguro, pero se necesita durante la sesion para poder cerrar
        window.location.reload(); // en caso de que haya quedado algo en el navegador se elimina, pero no es tan necesario, podría funcionar sin reload()
      } else {
        console.error("Error al revocar el consentimiento");
      }
    }
  );
};

/**
 Botoncito que cierra sesión que se puede colocar en NavBar
{
  emailTuneMatch && (
    <button id="g_id_signout" onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
 */
