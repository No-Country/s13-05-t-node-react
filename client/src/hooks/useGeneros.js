import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER_GENEROS, API_URL_UPDATE } from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { getId, setGeneros } from "../redux/authSlice";
import { setGenres } from "../redux/genresSlice"
import { useEffect } from "react";
import Swal from "sweetalert2";

const useGeneros = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(getId)

    let generos = []
    
    // Verificar si hay datos en localStorage para 'generos'
    const storedGeneros = localStorage.getItem('generos');

    // Si hay datos, usarlos; de lo contrario, inicializar con un array vacío
    generos = storedGeneros ? JSON.parse(storedGeneros) : [];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL_REGISTER_GENEROS);
                const data = response.data;
                // console.log(data)

                if (data && data?.musicalGenres) {
                    // console.log(data);
                    dispatch(setGenres(data.musicalGenres))
                } else {
                    console.error("Data or bands property is missing.");
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    Swal.fire("Error", "Ocurrió un error", "error");
                } else {
                    console.error("An error occurred while fetching data:", error);
                }
            }
        };

        fetchData();
    },[]);


    const handleGeneroClick = (genero) => {
        const arrayBefore = generos.length
        generos = generos.filter(item => item !== genero)
        const arrayCurrent = generos.length 
        if (arrayBefore === arrayCurrent) { generos = [...generos, genero]}

        // Guardar el array 'generos' en localStorage
        localStorage.setItem('generos', JSON.stringify(generos));
        console.log(generos)
    }; 


    const handleRegister23 = async() => {
        
        dispatch(setGeneros(generos)) 
        await axios
              .put(`${API_URL_UPDATE}/${id}`, { generos })
              .then(async({data}) =>{
                   console.log(data)
              })
              .catch(async(error)=> {
                if(error.response.status === 400){
                   Swal.fire("Error", "Ocurrió un error", "error")
                   return
                }

              }) 

        // Limpiar 'generos' en localStorage después de usarlos
        // localStorage.removeItem('generos');
        // setbuttonGeneroStorege(false)

        navigate("/register221");
    };

    const handleReloaded = () => {
        localStorage.removeItem('generos');
    }

    const handleUpdateGenres = async() => {

        try {
            
            const response = await axios.put(`${API_URL_UPDATE}/${id}`, { generos })
            const data = response.data
            console.log(data)
            
            if (data) {
                console.log(data.generos);
                dispatch(setGeneros(data.generos))
            } else {
                console.error("Genero no se actualizo");
            }
            
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire("Error", "Ocurrió un error", "error");
            } else {
                console.error("Se produjo un error al obtener datos:", error);
            }
            
        }

    } 


    return {
        handleGeneroClick,
        handleRegister23,
        handleReloaded,
        handleUpdateGenres
        // buttonGeneroStorege
    }

}

export default useGeneros