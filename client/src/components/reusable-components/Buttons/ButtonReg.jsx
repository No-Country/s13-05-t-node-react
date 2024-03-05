
import { useState } from 'react';

/* eslint-disable react/prop-types */
const ButtonReg = ({ text, onClick }) => {
  
  const [isClicked, setIsClicked] = useState();

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




// function ButtonReg({text}) {
//   return (
//     <>
//       <button 
//       className="bg-[#BB7EBC] hover:bg-slate-800 rounded-3xl h-8"
//       style={{ width: 'auto' }}
//       >#{text}</button>
//     </>
//   );
// }

export default ButtonReg;
