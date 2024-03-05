import NavBar from "../components/NavBar/NavBar";
import Chat from "../components/Chat/Chat";

function ChatPage() {
  return (
    <>
      <NavBar />
      <div className="w-full sm:min-h-[89vh] sm:bg-slate-400">
        <div className="grid grid-cols-1 md:grid md:grid-cols-12">
          <div className="hidden md:grid md:col-span-4"></div>
          <div className="col-span-1 md:col-span-4 mx-4 sm:w-1/2 sm:m-auto md:w-full sm:p-[13.5px] bg-white">
            <Chat />
          </div>
          <div className="hidden md:grid md:col-span-4"></div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
