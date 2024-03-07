export const API_URL_BASE =
  import.meta.env.VITE_URL_BASE || "https://tunematch.onrender.com/api";

//--------------------------------------------------------------------------

export const API_URL_REGISTER = API_URL_BASE + "/usuario/sign-up";
export const API_URL_LOGIN = API_URL_BASE + "/usuario/login";
export const API_URL_GOOGLE = API_URL_BASE + "/usuario/google";
export const API_URL_UPDATE = API_URL_BASE + "/usuario";
export const API_URL_TUNEMATCHLIST =
  API_URL_BASE + "/usuario/match/profile/:id";
export const API_URL_LIKES = API_URL_BASE + "/usuario/likes";
export const API_URL_UNDO = API_URL_BASE + "/usuario/undo";

//---------------------------------------------------------------------------

export const API_URL_REGISTER_GENEROS = API_URL_BASE + "/musicalGenre";
export const API_URL_REGISTER_BANDAS = API_URL_BASE + "/band";
export const API_URL_MATCHLIST = API_URL_BASE + "/usuario/list/:id";
export const API_URL_CHAT = "https://tunematch.onrender.com/";
