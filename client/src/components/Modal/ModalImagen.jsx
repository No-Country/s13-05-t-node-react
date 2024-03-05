import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux"
import { getFotos } from "../../redux/authSlice"
 
const ModalImagen = () => {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const fotos = useSelector(getFotos)


    return (

        <>
            <button className="rounded-full pt-20" onClick={openModal}>
                <FaPenToSquare color="#BB7EBC" />
            </button>
            {showModal && (
                <dialog className="modal" open>

                    <div className=" bg-[#6C2B6D] px-4 pt-4 pb-2  rounded-lg 
                     w-90 md:w-80 ">

                        <p className="text-l text-center text-white">Cambia tu imagen</p>
                        <div className="relative z-10 -top-14 right-2 justify-end">
                            <button
                                className="btn btn-circle btn-ghost btn-sm bg-[#BB7EBC] text-white"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-5 w-full -mt-3 ">
                            {fotos && fotos.length > 0 ? (
                                fotos.map((foto, index) => (
                                    <div key={index}>
                                        <img
                                            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                                            src={foto}
                                            alt="foto"
                                        />
                                    </div>
                                ))
                            ) : (
                                
                                <div className="grid grid-cols-3 gap-5 w-full -mt-3">
                                    <div className="bg-gray-200 h-32 w-32"></div>
                                    <div className="bg-gray-200 h-32 w-32"></div>
                                    <div className="bg-gray-200 h-32 w-32"></div>
                                    
                                </div>
                            )}


                        </div>


                    </div>
                </dialog>


            )}


        </>

    )
}

export default ModalImagen