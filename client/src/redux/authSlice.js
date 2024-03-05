import { createSlice } from "@reduxjs/toolkit";

/** Este es un slice de Redux que maneja el estado de autenticación de un usuario  */

/** Este objeto define el estado inicial del slice de autenticación. Contiene propiedades como id, nombre, correo, password, etc., que representan la información básica de un usuario. */
const initialState = {
  id: "",
  nombre: "",
  correo: "",
  password: "",
  miGenero: "",
  fotos: [],
  bandas: [],
  generos: [],
  tuneMatch: [],
  ultimaPosicion: {},
  enBuscaDe: [],
  active: false,
  google: false,
  aboutMe: [],
};

/**Se crea un slice de Redux llamado authSlice utilizando la función createSlice de Redux Toolkit.
name: Define el nombre del slice como "auth".
initialState: Se utiliza el objeto initialState definido anteriormente como el estado inicial del slice.
reducers: Define las acciones que pueden modificar el estado del slice. Cada acción es una función que toma el estado actual como argumento y puede modificarlo según sea necesario. */
export const authSlice = createSlice({
  name: "auth",
  initialState,
  /**Las acciones definidas son funciones que modifican el estado del slice.
Por ejemplo, login establece el estado isLoggedIn en true, mientras que logout establece múltiples propiedades del estado en sus valores iniciales y elimina un elemento, en este caso todo lo que esté del usuario en reduxstate, del almacenamiento local. */
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.id = "";
      state.nombre = "";
      state.correo = "";
      state.password = "";
      state.miGenero = "";
      state.fotos = [];
      state.bandas = [];
      state.generos = [];
      state.tuneMatch = [];
      state.ultimaPosicion = {};
      state.enBuscaDe = [];
      state.active = false;
      localStorage.removeItem("reduxState");
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
    setCorreo: (state, action) => {
      state.correo = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setMiGenero: (state, action) => {
      state.miGenero = action.payload;
    },
    setFotos: (state, action) => {
      state.fotos = action.payload;
    },
    setBandas: (state, action) => {
      state.bandas = action.payload;
    },
    setGeneros: (state, action) => {
      state.generos = action.payload;
    },
    setTuneMatch: (state, action) => {
      state.tuneMatch = action.payload;
    },
    setUltimaPosicion: (state, action) => {
      state.ultimaPosicion = action.payload;
    },
    setEnBuscaDe: (state, action) => {
      state.enBuscaDe = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setGoogleAuth: (state, action) => {
      state.google = action.payload;
    },
    updateAll: (state, action) => {
      return { ...state, ...action.payload };
    },
    setAboutMe: (state, action) => {
      state.aboutMe = action.payload;
    },
  },
});

// selectores
/**Se definen selectores que proporcionan acceso a partes específicas del estado.
Por ejemplo, getNombre, getCorreo, etc., devuelven las respectivas propiedades del estado de autenticación. */
export const getId = (state) => state?.auth?.id;
export const getNombre = (state) => state?.auth?.nombre;
export const getCorreo = (state) => state?.auth?.correo;
export const getPassword = (state) => state?.auth?.password;
export const getMiGenero = (state) => state?.auth?.miGenero;
export const getFotos = (state) => state?.auth?.fotos;
export const getBandas = (state) => state?.auth?.bandas;
export const getGeneros = (state) => state?.auth?.generos;
export const getTuneMatch = (state) => state?.auth?.tuneMatch;
export const getUltimaPosicion = (state) => state?.auth?.ultimaPosicion;
export const getEnBuscaDe = (state) => state?.auth?.enBuscaDe;
export const getActive = (state) => state?.auth?.active;
export const getGoogleAuth = (state) => state.auth?.google;
export const selectIsLoggedIn = (state) => state?.auth?.isLoggedIn;
export const getAllState = (state) => state?.auth;
export const getAboutMe = (state) => state?.auth.aboutMe;

// actions
/**Todas las acciones definidas en reducers se exportan para que puedan ser utilizadas en otros lugares de la aplicación. */
export const {
  login,
  logout,
  setId,
  setNombre,
  setCorreo,
  setPassword,
  setMiGenero,
  setFotos,
  setBandas,
  setGeneros,
  setTuneMatch,
  setUltimaPosicion,
  setEnBuscaDe,
  setActive,
  setGoogleAuth,
  updateAll,
  setAboutMe,
} = authSlice.actions;

/**El reducer (authSlice.reducer) se exporta como el valor predeterminado, lo que permite combinarlo con otros reducers utilizando combineReducers en el store de Redux. Que por ahora no está siendo utilizado pero se puede utilizar más adelante, si es necesario */
export default authSlice.reducer;
