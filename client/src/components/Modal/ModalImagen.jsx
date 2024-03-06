import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import usePaginationPhotos from "../../hooks/usePaginationImage";
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import UploadImage from "../Profile/UploadImage";
import ButtonImages from "../Profile/ButtonImages";

 
const ModalImagen = () => {

  

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const {
        currentPage,
        currentItems,
        totalPage,
        handleNextPage,
        handlePrevPage
    } = usePaginationPhotos();

    const photoAuxiliar = 'https://www.elmueble.com/medio/2023/03/30/perro-labrador-retriever_5e8d307f_230330133647_900x900.jpg'

    // const handleImagenClick = (foto) => {
        
    //     let currentFoto = foto

    //     let items = currentItems.unshiift(currentFoto)

    // }


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
                       

                        <div className="grid grid-cols-3 w-full -mt-3  ">
                            {currentItems?.length === 0 && (
                                    <ButtonImages
                                    url={photoAuxiliar}
                                    // onClick={() => handleImagenClick(photoAuxiliar)}
                                    />

                            )}
                            {currentItems?.map((url, index) => (
                                <ButtonImages

                                    key={index}
                                    url={url}
                                    //onClick={() => handleImageClick(foto)}
                                    
                                />
                            ))}
                        </div>
                        
                       
                        
                        <div className="flex items-center justify-center mt-4 mb-4 ">
                            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                                <ChevronsLeft />
                            </button>
                            <span className="mx-2">{currentPage}</span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPage}>
                                <ChevronsRight />
                            </button>
                        </div>
                        <div>
                            <UploadImage />
                        </div>

                    
                    
                    </div>
                </dialog>


            )}


        </>

    )
}

export default ModalImagen