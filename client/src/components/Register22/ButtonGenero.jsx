import { useState, useEffect } from 'react';
import useGeneros from '../../hooks/useGeneros';

/* eslint-disable react/prop-types */
const ButtonGenero = ({ text, onClick }) => {
    // Obtener el estado inicial desde localStorage, si está disponible
    const initialState = localStorage.getItem(`buttonState_${text}`) === 'true';
    const [isClicked, setIsClicked] = useState(initialState);

    const  { buttonGeneroStorege } = useGeneros()

    useEffect(() => {
        // Guardar el estado en localStorage cada vez que cambie
        localStorage.setItem(`buttonState_${text}`, isClicked);
       
        // Eliminar todo el contenido del localStorage
        // console.log(buttonGeneroStorege)
        // if (!buttonGeneroStorege) { 
        //     localStorage.clear() 
        // }
        
    }, [isClicked, text, buttonGeneroStorege]);

    const handleClick = () => {
        setIsClicked(!isClicked);
        onClick(text);
    };

    return (
        <button
            className={`${isClicked ? 'bg-[#1f1e1f]' : 'bg-[#c329c5]'
                } hover:bg-[nuevo-color] active:bg-[#111011] rounded-3xl h-8 focus:outline-none focus:ring focus:border-purple-300`}
            style={{ width: 'auto' }}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default ButtonGenero;
















