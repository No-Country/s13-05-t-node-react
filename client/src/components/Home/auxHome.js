import { API_URL_MATCHLIST } from "../../config/api";
import axios from "axios";

export const eventos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Metallica",
    city: "Buenos Aires",
    redirect: "https://www.metallica.com",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "AC/DC",
    city: "La Plata",
    redirect: "https://www.acdc.com/tour/",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Foo Fighters",
    city: "Rosario",
    redirect: "https://foofighters.com/",
  },
];

export const obtenerDatosUsuario = async (tuneMatch) => {
  try {
    let matchIds = [];
    if (Array.isArray(tuneMatch)) {
      // Verificar si tuneMatch es un array de objetos con una propiedad 'id'
      if (
        tuneMatch.length > 0 &&
        typeof tuneMatch[0] === "object" &&
        "id" in tuneMatch[0]
      ) {
        matchIds = tuneMatch.map((match) => match.id);
      } else {
        matchIds = tuneMatch; // Si no es un array de objetos, se asume que es un array de ids
      }
    } else {
      throw new Error("El parametro tuneMatch DEBE ser un ARRAY."); //hasta ahi llegamos con las comprobaciones, mandenlo en un array ;D
    }

    const perfilesUsuarios = await Promise.all(
      matchIds.map(async (id) => {
        try {
          const perfilResponse = await axios.get(
            API_URL_MATCHLIST.replace(":id", id)
          );

          if (!perfilResponse.data) {
            throw new Error(
              `Error al obtener el perfil del usuario con ID: ${id}`
            );
          }

          return perfilResponse.data;
        } catch (error) {
          throw new Error(
            `Error al obtener el perfil del usuario con ID: ${id}`
          );
        }
      })
    );

    return perfilesUsuarios;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
