import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFotos } from "../../redux/authSlice";
import { BsFillSendFill } from "react-icons/bs";
import { API_URL_CHAT } from "../../config/api";

const socket = io.connect(API_URL_CHAT);

function Chat() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  /**Ajustar esto para que llegue la foto del usuario matcheado */
  const fotos = useSelector(getFotos);
  const profilePhoto = fotos?.length > 0 ? fotos[0] : null;

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);

  return (
    <div className="border-2 rounded-lg mt-6 sm:mt-0 h-[85vh] sm:max-h-[95%] flex flex-col bg-gray-200">
      <div className="w-full bg-[#BB7EBC] h-20 shadow-lg  rounded-t-lg flex items-center space-x-4">
        <div className="pl-4">
          {profilePhoto ? (
            <img
              alt="Perfil"
              src={profilePhoto}
              className="object-cover rounded-full w-12 h-12 ring"
            />
          ) : (
            <img
              alt="Foto de perfil por defecto"
              src="https://images.pexels.com/photos/4472043/pexels-photo-4472043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="object-cover rounded-full w-12 h-12 ring ring-slate-200 ring-opacity-60"
            />
          )}
        </div>
        <div>
          <h1 className="text-white font-semibold">Nombre de Usuario</h1>
        </div>
      </div>
      {/* <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
        className=""
      />
      <button onClick={joinRoom}> Join Room</button> */}
      <div className="px-2 flex-grow">
        <p className="py-2 px-4 bg-white text-slate-600 max-w-min rounded-t-2xl rounded-br-2xl my-2">
          Amo TuneMatch!{messageReceived}
        </p>
      </div>
      <div className="bottom-0 bg-white h-12 flex items-center px-4 justify-between">
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          className="bg-transparent text-slate-600 outline-none"
        />
        <button
          onClick={sendMessage}
          title="Enviar mensaje"
          className="hover:text-[#BB7EBC]"
        >
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
}

export default Chat;
