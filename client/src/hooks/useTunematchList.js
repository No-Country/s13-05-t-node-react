import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL_TUNEMATCHLIST } from "../config/api";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { getId } from "../redux/authSlice";

const useTunematchList = () => {
  const id = useSelector(getId);
  const [matchList, setMatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          API_URL_TUNEMATCHLIST.replace(":id", id)
        );
        console.log("Esto es response en el useEffect:", response);
        const data = response.data;
        console.log("Respuesta de la API:", data);
        if (data && data.match_list) {
          setMatchList(data.match_list); // Actualizar el estado matchList con los datos obtenidos
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setError("Ocurrió un error");
          Swal.fire("Error", "Ocurrió un error", "error");
        } else {
          console.error("An error occurred while fetching data:", error);
          setError("Error al obtener los datos"); // Actualizar el estado error con un mensaje de error
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { matchList, loading, error };
};

export default useTunematchList;
