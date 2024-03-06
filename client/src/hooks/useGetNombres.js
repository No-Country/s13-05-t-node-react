import { useEffect, useState } from "react";
import axios from "axios";
import {
  API_URL_REGISTER_BANDAS,
  API_URL_REGISTER_GENEROS,
} from "../config/api";

const useGetNombres = () => {
  const [nombres, setNombres] = useState({
    bandas: {},
    generos: {},
  });

  useEffect(() => {
    const fetchNombres = async () => {
      try {
        const responseBandas = await axios.get(API_URL_REGISTER_BANDAS);
        const responseGeneros = await axios.get(API_URL_REGISTER_GENEROS);

        const nombresActualizados = {
          bandas: {},
          generos: {},
        };

        // Verificar si la respuesta contiene la propiedad musicalGenres
        if (responseGeneros.data.musicalGenres) {
          responseGeneros.data.musicalGenres.forEach((genero) => {
            nombresActualizados.generos[genero._id] = genero.name;
          });
        }

        // Verificar si la respuesta contiene la propiedad bands
        if (responseBandas.data.bands) {
          responseBandas.data.bands.forEach((banda) => {
            nombresActualizados.bandas[banda._id] = banda.name;
          });
        }

        setNombres(nombresActualizados);
      } catch (error) {
        console.error("Error al obtener los nombres:", error);
      }
    };

    fetchNombres();
  }, []);

  return nombres;
};

export default useGetNombres;
