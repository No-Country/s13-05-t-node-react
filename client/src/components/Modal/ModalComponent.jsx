/* eslint-disable react/prop-types */
import { useState } from "react";

import { FaPenToSquare } from "react-icons/fa6";

export default function ModalComponent({ titulo, id, opciones, generos }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOptionToggle = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  return (
    <>
      <button className="rounded-full" onClick={openModal}>
        <FaPenToSquare color="#BB7EBC" />
      </button>
      {showModal && (
        <dialog id={`my_modal_${id}`} className="modal" open>
          <div className="modal-box flex w-100 flex-col items-center justify-center overflow-auto overflow-x-hidden p-2">
            <h3 className="text-xl font-bold">Cambia tu {titulo} </h3>
            {id === 1 ? (
              <form className="mt-4 space-y-4">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className=" flex-col ">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Enviar
                </button>
              </form>
            ) : id === 2 || id === 3 ? (
              <form className="mt-4 space-y-4">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-60">
                  {opciones.map((option, index) => (
                    <label
                      key={index}
                      className={`inline-flex items-center text-slate-700 text-sm font-bold rounded-full px-3 py-1 gap-4 cursor-pointer ${
                        selectedOptions.includes(option)
                          ? "bg-[#BB7EBC]"
                          : "bg-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox text-transparent bg-transparent border-2 border-white rounded-full appearance-none checked:bg-transparent checked:border-transparent"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleOptionToggle(option)}
                      />
                      <span>#{option}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="btn btn-primary mt-4">
                    Enviar
                  </button>
                </div>
              </form>
            ) : id === 4 ? (
              <form className="mt-4 space-y-4">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className=" flex-col">
                  <textarea
                    placeholder="Bio"
                    className="textarea textarea-bordered  textarea-lg  max-h-full w-full resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Enviar
                </button>
              </form>
            ) : id === 5 ? (
              <form className="mt-4 space-y-4 justify-center items-center">
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={closeModal}
                >
                  ✕
                </button>
                <div className="flex  gap-5">
                  {generos.map((gender, index) => (
                    <span
                      key={index}
                      className={`inline-block cursor-pointer text-sm font-bold rounded-full px-3 py-1 ${
                        gender === "Mujer" ? "bg-pink-700" : "bg-blue-600"
                      }`}
                    >
                      {gender}
                    </span>
                  ))}
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Enviar
                </button>
              </form>
            ) : null}
          </div>
        </dialog>
      )}
    </>
  );
}
