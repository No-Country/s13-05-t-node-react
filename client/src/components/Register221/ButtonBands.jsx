import { useState, useEffect } from "react";
// import usebands from '../../hooks/useBands';

/* eslint-disable react/prop-types */
const ButtonBand = ({ text, onClick }) => {
  // Obtener el estado inicial desde localStorage, si está disponible
  const initialState =
    localStorage.getItem(`buttonStateBand_${text}`) === "true";
  const [isClicked, setIsClicked] = useState(initialState);

  // const { buttonGeneroStorege } = usebands()

  const MAX_LENGTH = 8;
  const displayText =
    text.length > MAX_LENGTH ? `${text.substring(0, MAX_LENGTH)}...` : text;

  useEffect(() => {
    // Guardar el estado en localStorage cada vez que cambie
    localStorage.setItem(`buttonStateBand_${text}`, isClicked);
    // Eliminar todo el contenido del localStorage
    // console.log(buttonGeneroStorege)
    // if (!buttonGeneroStorege) {
    //     localStorage.clear()
    // }
  }, [isClicked, text]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick(text);
  };

  return (
    <button
      className={`truncate ${
        isClicked ? "bg-[#1f1e1f]" : "bg-[#c329c5]"
      } hover:bg-[nuevo-color] active:bg-[#111011] rounded-3xl h-8 focus:outline-none focus:ring focus:border-purple-300`}
      style={{ width: "auto" }}
      title={text}
      onClick={handleClick}
    >
      {displayText}
    </button>
  );
};

export default ButtonBand;
