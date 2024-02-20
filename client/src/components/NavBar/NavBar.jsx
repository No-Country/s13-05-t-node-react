import { Link } from "react-router-dom";
import { HOME } from "./../../Router/Paths";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineMusicVideo, MdOutlineExplore } from "react-icons/md";
import { FaHeart, FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import LOGOBLACK from '../../assets/LOGOBLACK.png'

function NavBar() {
  return (
    <header className="navbar sticky top-0 z-30 w-full bg-white pl-4 pr-8 shadow">
      <div className="flex w-screen gap-5 justify-center">
        <div className="w-[13%] h-12">
          <Link
            to={HOME}
            className="btn bg-inherit border-none hover:bg-inherit text-xl "
          >
            <img src={LOGOBLACK} alt="" />
          </Link>
        </div>
        <div className="flex gap-5 justify-between items-center">
          <div className="btn h-8 min-h-min rounded-[30px] ">
            <RiHome6Line size={20} color="white" />
            <span className=" text-white">Feed</span>
          </div>
          <div className="btn h-8 min-h-min rounded-[30px] bg-inherit border-none shadow-none hover:bg-slate-300">
            <MdOutlineExplore size={20} color="black" />
            <span className=" text-black">Explorar</span>
          </div>
          <div className="btn h-8 min-h-min rounded-[30px] bg-inherit border-none shadow-none hover:bg-slate-300">
            <MdOutlineMusicVideo size={20} color="black" />
            <span className=" text-black">Biblioteca</span>
          </div>
          <div className="btn h-8 min-h-min rounded-[30px] bg-teal-400 border-none shadow-none hover:bg-teal-800">
            <FaHeart size={20} color="white" />
            <span className=" text-white">Conoce Gente!</span>
          </div>
          <label className="input input-bordered- h-8 min-h-min rounded-[30px] bg-slate-300 flex items-center gap-2">
            <IoSearchOutline size={20} color="black" />
            <input
              type="text"
              className="grow bg-slate-300"
              placeholder="Search"
            />
          </label>
          <div className="btn h-8 min-h-min btn-circle bg-inherit border-none shadow-none hover:bg-slate-300 ">
            <FaRegBell size={20} color="black" />
          </div>
          <div className="btn h-8 min-h-min btn-circle bg-inherit border-none shadow-none hover:bg-slate-300 ">
            <FiMessageCircle size={20} color="black" />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:bg-inherit bg-inherit border-none btn-circle  avatar"
            >
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className="btn h-8 min-h-min rounded-[30px] bg-teal-400 border-none shadow-none hover:bg-teal-800">
            <AiOutlinePlus size={20} color="white" />
            <span className=" text-white">Crear</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
