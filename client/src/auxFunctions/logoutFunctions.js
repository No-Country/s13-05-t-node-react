import { logout } from "../redux/authSlice";

export const revokeAccess = (dispatch, handleLogoutError) => {
  return new Promise((resolve, reject) => {
    try {
      // Limpia completamente el localStorage
      localStorage.clear();
      console.log("LocalStorage limpiado exitosamente");
      dispatch(logout());
      resolve();
    } catch (error) {
      // Si ocurre un error, maneja el logout y rechaza la promesa
      console.error("Error al limpiar el localStorage:", error);
      handleLogoutError();
      reject(error);
    }
  });
};
