import { Link, useNavigate } from "react-router-dom";
import { CHAT, HOME, MATCH, PROFILE } from "./../../Router/Paths";
import { RiHome6Line } from "react-icons/ri";
import { FaHeart, FaRegBell } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import LOGOBLACK from "../../assets/LOGOBLACK.png";
import { useEffect, useRef, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { revokeAccess } from "../../auxFunctions/logoutFunctions";
import Swal from "sweetalert2";
import { getFotos } from "../../redux/authSlice";

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuHamburguesaRef = useRef(null);
  const dispatch = useDispatch();
  const fotos = useSelector(getFotos);

  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;

  const showMenuHandler = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    revokeAccess(dispatch)
      .then(() => {
        Swal.fire({
          icon: "success",
          background: "#2c2c2c",
          color: "white",
          title: "¡Sesión cerrada exitosamente!",
          text: "Tu sesión se ha cerrado correctamente.",
        }).then(() => {
          navigate("/");
        });
      })
      .catch(handleLogoutError);
  };

  const handleLogoutError = () => {
    console.error("Error al realizar el logout");
    Swal.fire({
      icon: "error",
      background: "#2c2c2c",
      color: "white",
      title: "Error al cerrar sesión",
      text: "Hubo un problema al cerrar sesión. Por favor, intenta de nuevo más tarde.",
    });
  };

  const closeMenuHandler = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuHamburguesaRef.current &&
      !menuHamburguesaRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenuHandler);

    return () => {
      document.removeEventListener("click", closeMenuHandler);
    };
  }, []);

  return (
    <header className="navbar sticky top-0 z-30 w-screen md:w-auto bg-black">
      <div className="flex w-full items-center">
        <div className="flex items-center place-content-start w-1/2">
          <Link
            to={"/"}
            className="btn btn-xs md:h-8 bg-inherit min-h-min border-none hover:bg-inherit"
          >
            <img src={LOGOBLACK} alt="logo en home" />
          </Link>
        </div>
        <div className="flex items-center place-content-end space-x-2 w-full">
          {/** Lista de Nav */}
          <ul className="md:flex md:flex-row hidden md:space-x-7">
            <li>
              <Link
                to={HOME}
                className="btn btn-sm hover:bg-slate-600 hover:text-white rounded-[30px] bg-gray-500"
              >
                <RiHome6Line size={20} color="white" />
                <span className=" text-white hidden sm:flex">Feed</span>
              </Link>
            </li>
            <li>
              <Link
                to={MATCH}
                className="btn btn-sm rounded-[30px] bg-teal-400 border-none shadow-none hover:bg-teal-800"
              >
                <FaHeart size={20} color="white" />
                <span className="hidden sm:flex text-white">Conoce Gente!</span>
              </Link>
            </li>
            <li className="w-8 h-8 flex items-center justify-center rounded-full bg-inherit border-none shadow-none bg-slate-300 cursor-pointer hover:bg-slate-600 hover:text-white">
              <FaRegBell size={20} />
            </li>
            <li>
              <Link
                to={CHAT}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-inherit border-none shadow-none bg-slate-300 cursor-pointer hover:bg-slate-600 hover:text-white"
              >
                <FiMessageCircle size={20} />
              </Link>
            </li>
          </ul>
          {/**Menu navbar en movil */}
          <div className="md:hidden relative w-[45vw]" ref={menuHamburguesaRef}>
            <div className="flex place-content-end" onClick={showMenuHandler}>
              <GrMenu size={24} color="white" />
            </div>
            {showMenu ? (
              <ul
                className="absolute top-9 bg-black left-0 w-full mt-2 shadow-lg rounded-b-md py-3 px-1 space-y-1 text-xs"
                ref={menuRef}
              >
                <li>
                  <Link
                    to={HOME}
                    className="flex items-center btn btn-sm justify-center min-h-min rounded-[30px] bg-gray-500 p-1 hover:bg-slate-600 hover:text-white"
                  >
                    <RiHome6Line size={20} color="white" />
                    <span className=" text-white flex">Feed</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={MATCH}
                    className="flex items-center btn btn-sm justify-center min-h-min rounded-[30px] bg-teal-400 border-none shadow-none hover:bg-teal-800 p-1"
                  >
                    <FaHeart size={20} color="white" />
                    <span className=" text-white">Conoce Gente!</span>
                  </Link>
                </li>
                <li className="btn rounded-full bg-inherit border-none shadow-none bg-slate-300 hover:bg-slate-600 hover:text-white mx-4 sm:mx-8">
                  <FaRegBell size={20} />
                </li>
                <li className="btn rounded-full bg-inherit border-none shadow-none bg-slate-300 hover:bg-slate-600 hover:text-white">
                  <Link to={CHAT}>
                    <FiMessageCircle size={20} />
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          {/**Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:bg-inherit bg-inherit border-none btn-circle avatar"
            >
              <div className="w-9 rounded-full">
                {profilePhoto ? (
                  <img alt="Perfil" src={profilePhoto} />
                ) : (
                  <img
                    alt="Foto de perfil por defecto"
                    src="https://images.pexels.com/photos/4472043/pexels-photo-4472043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box lg:w-52"
            >
              <li>
                <Link to={PROFILE} className="justify-between">
                  {" "}
                  Perfil
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Configuración</a>
              </li>
              <li className="cursor-pointer">
                <a onClick={handleLogout}>Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
