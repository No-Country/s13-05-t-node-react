import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER_BANDAS, API_URL_UPDATE } from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { getId, setBandas } from "../redux/authSlice";
import { setBands } from "../redux/bandsSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";

const useBands = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector(getId)

    let bands = []
    
    // Verificar si hay datos en localStorage para 'generos'
    const storedbands = localStorage.getItem('bands');

    // Si hay datos, usarlos; de lo contrario, inicializar con un array vacío
    bands = storedbands ? JSON.parse(storedbands) : [];

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL_REGISTER_BANDAS);
            const data = response.data;
            console.log(data)

            if (data && data?.bands) {
                // console.log(data);
                // setbandBDD(data.bands);
                dispatch(setBands(data.bands))
            } else {
                console.error("Faltan datos o propiedad de bandas.");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire("Error", "Ocurrió un error", "error");
            } else {
                console.error("Se produjo un error al obtener datos:", error);
            }
        }
    };

     fetchData()

     },[]);


    const handleBandClick = (band) => {
        const arrayBefore = bands.length
        bands= bands.filter(item => item !== band)
        const arrayCurrent = bands.length 
        if (arrayBefore === arrayCurrent) { bands = [...bands, band]}

        // Guardar el array 'generos' en localStorage
        localStorage.setItem('bands', JSON.stringify(bands));
        console.log(bands)
    }; 


    const handleRegister = async() => {
        

        dispatch(setBandas(bands)) 
        await axios
              .put(`${API_URL_UPDATE}/${id}`, { bandas: bands })
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
        // localStorage.removeItem('bands');
       

        navigate("/register2");
    };

        const handleReloadedBands = () => {
        localStorage.removeItem('bands');
    }

    const handleUpdateBands = async() => {

        
        try {
            
            const response = await axios.put(`${API_URL_UPDATE}/${id}`, { bandas: bands })
            const data = response.data
            console.log(data)
            
            if (data) {
                console.log(data.bandas);
                dispatch(setBandas(data.bandas))
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

        handleBandClick,
        handleRegister,
        handleReloadedBands,
        handleUpdateBands      
    }

}

export default useBands