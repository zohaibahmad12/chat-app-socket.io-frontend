import Sidebar from "../components/Chat/Sidebar";
import ChatWindow from "../components/Chat/ChatWindow";
const Chat = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 h-full">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Chat;
