import ButtonGenero from "../Register22/ButtonGenero"
import useGeneros from "../../hooks/useGeneros"
import usePagination from "../../hooks/usePagination"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";


const ModalGeneros = () => {
    
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const [showModal, setShowModal] = useState(false);

    const { handleGeneroClick, handleUpdateGenres } = useGeneros()

    const {
        currentPage,
        currentItems,
        totalPage,
        handleNextPage,
        handlePrevPage
    } = usePagination();

    return (
        
        <>
            <button className="rounded-full" onClick={openModal}>
                <FaPenToSquare color="#BB7EBC" />
            </button>
        {showModal && (
        <dialog  className="modal" open>

                    <div className=" bg-[#6C2B6D] px-4 pt-4 pb-2  rounded-lg 
                     w-90 md:w-80 ">
                    {/* <div > */}
                        <p className="text-l text-center ">Escoge tus generos musicales preferidos!</p>
                        <div className="relative z-10 -top-14 right-2 justify-end">
                            <button
                                className="btn btn-circle btn-ghost btn-sm bg-[#BB7EBC] text-white"
                                onClick={closeModal}
                            >
                                ✕
                            </button>

                        </div>

                        <div className="grid grid-cols-3 gap-5 w-full -mt-3 ">
                            {currentItems?.map((genero) => (
                                <ButtonGenero
                                    key={genero?._id}
                                    id={genero?._id}
                                    text={genero?.name}
                                    onClick={() => handleGeneroClick(genero?._id)}
                                />
                            ))}
                        </div>
                    {/* </div> */}
                    <div className="flex items-center justify-center mt-4 mb-4">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            <ChevronsLeft />
                        </button>
                        <span className="mx-2">{currentPage}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPage}>
                            <ChevronsRight />
                        </button>
                    </div>
                    <button
                        className="bg-[#BB7EBC] btn border-none w-full text-white rounded-3xl mb-4"
                        onClick={handleUpdateGenres}
                    >
                        Guardar
                    </button>
        </div>   
        </dialog>
      

        )}
        

        </>
       
    )
}

export default ModalGeneros