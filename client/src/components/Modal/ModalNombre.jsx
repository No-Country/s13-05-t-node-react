import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import useName from "../../hooks/useName";
import { useForm } from "react-hook-form";
import Input from "../reusable-components/forms/Input";
import RegisterButton from "../reusable-components/forms/RegisterButton";


const ModalNombre = () => {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    const { handleRename  } = useName()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        
        handleRename(data)
    };

    return (

        <>
            <button className="rounded-full " onClick={openModal}>
                <FaPenToSquare color="#BB7EBC" />
            </button>
            {showModal && (
                <dialog className="modal" open>

                    <div className=" bg-[#6C2B6D] px-4 pt-4 pb-2  rounded-lg 
                     w-90 md:w-80 ">
                        
                        <p className="text-l text-center text-white">Cambia tu nombre</p>
                        <div className="relative z-10 -top-14 right-2 justify-end">
                            <button
                                className="btn btn-circle btn-ghost btn-sm bg-[#BB7EBC] text-white"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>
                        <form action="onSubmit" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Introduce tu nombre"
                                    name="name"
                                    register={register}
                                    error={errors.name?.message}

                                />
                            </div>


                            <div className=" bg-[#BB7EBC] hover:text-[#BB7EBC] btn border-none w-full text-white rounded-3xl">
                                <RegisterButton text="Guardar" />
                            </div>


                        </form>

                    </div>
                </dialog>


            )}


        </>

    )
}

export default ModalNombre