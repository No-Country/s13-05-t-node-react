
import LOGO from "../../assets/LOGO.png";
import REGISTER22 from "../../assets/generos.png";
import useGeneros from "../../hooks/useGeneros";
import ButtonGenero from "./ButtonGenero";
import usePagination from "../../hooks/usePagination";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const Register22 = () => {
    
    const { handleGeneroClick, handleRegister23 } = useGeneros()

    const { 
        currentPage,
        currentItems,
        totalPage,
        handleNextPage,
        handlePrevPage 
    } = usePagination();
   
    return (
        <div className="w-screen  min-h-[140vh] sm:min-h-screen flex bg-black ">
            <div className="relative">
                <div
                    className="absolute top-0 left-0 w-0 h-0 border-solid border-transparent border-r-[35vw] border-b-[100vh] border-black bg-black z-10"
                    style={{
                        clipPath: "polygon(0% 100%, 30% 100%, 0% 0%)",
                    }}
                ></div>
                <div
                    className="absolute border-solid border-transparent border-l-[100vw] border-b-[100vh] border-black bg-black z-10"
                    style={{
                        clipPath: "polygon(100% 0, 50% 0, 100% 95%)",
                    }}
                ></div>

                <nav className="flex items-center w-full top-0 z-20 relative bg-black text-white pt-2 pb-2 md:pb-0 md:pt-4">
                    <ul className="flex items-center space-x-4 sm:space-x-8 md:space-x-14 mx-4 md:mx-10">
                        <li>
                            <img src={LOGO} alt="logo" title="logo de la aplicación" />
                        </li>
                    </ul>
                </nav>
                <div
                    className="pt-20 pb-40 sm:pt-40 h-[90vh] flex items-center text-white relative"
                    style={{
                        backgroundImage: `url(${REGISTER22})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="flex flex-col sm:flex-row justify-between w-full h-[85vh]  px-2 sm:px-4 md:px-10 z-40 -mt-10">
                        <div className="place-content-start flex flex-col w-11/12 mx-auto justify-normal sm:justify-center sm:mx-0 sm:w-1/2 md:w-3/4 mb-4 sm:mb-0">
                            <h1 className="text-2xl sm:text-3xl md:text-6xl text-start py-10">
                                <p>Cuentanos acerca de tus</p> 
                                <p>géneros favoritos</p>
                            </h1>
                            <p className="text-base md:text-xl  md:pr-56">
                                Dinos qué música te apasiona y nos aseguraremos de
                                conectar contigo a personas que comparten tus
                                mismos gustos. ¡Comparte tu pasión musical y
                                descubre nuevas  experiencias con personas afines!
                            </p>
                        <div className="flex items-center justify-center  my-5 sm:my-10"></div>
                        </div>
                        <div
                            className="place-content-end w-11/12 mx-auto sm:mx-0 sm:w-1/2 md:w-1/3 px-4 py-6 rounded-lg bg-opacity-95"
                            style={{
                                backgroundImage: ` linear-gradient(180deg, rgba(102,77,102,1) 0%, rgba(108,43,109,0.9808298319327731) 34%)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <h1 className="text-3xl text-center -mt-3">Escoge tus generos musicales preferidos!</h1>
                            <div className="flex items-center justify-center pt-6">
                                <div className="grid grid-cols-3 gap-5 w-full">
                                    {currentItems?.map((genero) => (
                                        <ButtonGenero
                                            key={genero?._id}
                                            id={genero?._id}
                                            text={genero?.name}
                                            onClick={() => handleGeneroClick(genero?._id)}
                                          
                                        />
                                    ))}
                                </div>
                            </div>
                          
                            <span className=" pt-14 -mt-[38px] flex items-center justify-center mx-auto text-center w-max  bg-[#6C2B6D]">
                                Puedes cambiar estos ajustes cuando quieras
                            </span>
                            <div className="flex items-center flex-col my-6">
                                <button
                                    className="bg-[#BB7EBC] btn border-none w-full text-white rounded-3xl"
                                    onClick={handleRegister23}
                                >
                                    Siguiente
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-6">
                                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                                    <ChevronsLeft/>
                                </button>
                                <span className="mx-2">{currentPage}</span>
                                <button onClick={handleNextPage} disabled={currentPage === totalPage}>
                                    <ChevronsRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register22;


