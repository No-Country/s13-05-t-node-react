import { useState } from 'react'
import { 
    // useDispatch, 
    useSelector } from 'react-redux'
import { 
    getId, 
    // setFotos
} from '../redux/authSlice'
// import axios from 'axios';

// import { API_URL_IMAGE } from '../config/api';

const useImage = () => {

        const userId = useSelector(getId)
        // const dispatch = useDispatch()
        
        const [image, setImage] = useState(null)
        // const [userId] = useState('65c6da2b67f3ab4af06f7d19')
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(null)

        
        const handleImageChange = e => {
            setImage(e.target.files[0])
        }

        const convertBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file)
                fileReader.addEventListener('load', () => {
                    resolve(fileReader.result)
                })
                fileReader.addEventListener('error', () => {
                    reject(fileReader.error)
                })
            });
        };

        const handleSubmit = async e => {
            e.preventDefault()
            setIsLoading(true)
            setError(null)

            try {
                
                const img = await convertBase64(image)
                const data = { image: img, id: userId }
                console.log(data)
                const response = await fetch("https://tunematch.onrender.com/api/usuario/imagen", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                if (response.ok) {
                    const data = await response.json()
                    // dispatch(setFotos(data.fotos))
                    console.log('Imagen subida con éxito! :', data.url)
                } else {
                    
                    const errorData = await response.json()
                    setError(errorData.message)
                    console.log(error)
                }
            } catch (error) {
                console.error('Error Al subir la imagen:', error.message)
                setError('Ocurrió un error en el proceso.')
            } finally {
                setIsLoading(false)
            }
        }

        

// const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//         const img = await convertBase64(image);
//         const data = { image: img, id: userId };
//         console.log(data);

//         const response = await axios.post("https://tunematch.onrender.com/api/usuario/imagen", data);

//         if (response.status === 200) {
//             const responseData = response.data;
//             dispatch(setFotos(responseData.fotos));
//             console.log('Imagen subida con éxito! :', responseData.url);
//         } else {
//             const errorData = response.data;
//             setError(errorData.message);
//             console.log(errorData);
//         }
//     } catch (error) {
//         console.error('Error al subir la imagen:', error.message);
//         setError('Ocurrió un error en el proceso.');
//     } finally {
//         setIsLoading(false);
//     }
// };



    return {
       handleSubmit,
       handleImageChange,
       error,
       isLoading


    }


}

export default useImage