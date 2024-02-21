import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
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
  }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
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
  },
});


// selectores
export const getNombre = (state) => state?.auth?.nombre
export const getCorreo = (state) => state?.auth?.correo
export const getPassword = (state) => state?.auth?.password
export const getMiGenero = (state) => state?.auth?.miGenero
export const getFotos = (state) => state?.auth?.fotos
export const getBandas = (state) => state?.auth?.bandas
export const getGeneros = (state) => state?.auth?.generos
export const getTuneMatch = (state) => state?.auth?.tuneMatch
export const getUltimaPosicion = (state) => state?.auth?.ultimaPosicion
export const getEnBuscaDe = (state) => state?.auth?.enBuscaDe
export const getActive = (state) => state?.auth?.active

// actions
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
    setActive 
} = authSlice.actions;


export default authSlice.reducer