import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bandsSlice from "./bandsSlice";
import genresSlice from "./genresSlice"

/**Se importa la función configureStore de la biblioteca @reduxjs/toolkit para configurar el store de Redux.
También se importa el slice de autenticación (authSlice) que definimos en otro archivo y en el caso que hubiera más slices, se deben agregar acá tambien. */

/**Se obtiene el estado persistido del almacenamiento local. Si existe, se convierte de JSON a un objeto JS utilizando JSON.parse(). De lo contrario, se establece como un objeto vacío. */
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

/**Se crea el store de Redux utilizando la función configureStore.
reducer: Se pasa un objeto donde la clave es el nombre del slice de Redux (auth en este caso) y el valor es el reducer correspondiente (authSlice.reducer).
devTools: Se establece en true si process.env.NODE_ENV no es "production", lo que habilita las herramientas de desarrollo de Redux para la extensión de navegador Redux DevTools, (a mi no me funcionaba si no le agregaba esto)
preloadedState: Se pasa el estado persistido al store para que se cargue inicialmente. */
export const store = configureStore({
  reducer: {
    auth: authSlice,
    bands: bandsSlice,
    genres: genresSlice

  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: persistedState,
});

/**Se suscribe una función al store que se ejecuta cada vez que cambia el estado.
Dentro de esta función, el estado actual del store se guarda en el almacenamiento local utilizando localStorage.setItem(). */
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

console.log('Estado actual de Redux:', store.getState());