import { useState } from "react";
import Sidebar from "./components/Chat/Sidebar";
import ChatWindow from "./components/Chat/ChatWindow";
import useSocket from "./hooks/useSocket";
import useUserStore from "./store/useUserStore";
const App = () => {
  useSocket();
  const user = useUserStore((state) => state.user);
  const socket = useUserStore((state) => state.socket);

  console.log("user is", user);
  console.log("socket is", socket);
  const [selectedChat, setSelectedChat] = useState({
    name: "Zain",
    email: "zain@gmail.com",
    online: true,
    lastSeen: "10 mins ago",
    messages: [
      { text: "Hey, how's it going?", time: "3 mins ago", isSender: false, status: "viewed" },
      { text: "All good, you?", time: "2 mins ago", isSender: true, status: "viewed" },
      { text: "I'm doing great!", time: "1 min ago", isSender: false, status: "delivered" },
    ],
  });

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar onSelectChat={setSelectedChat} />
      <div className="flex-1 h-full">
        <ChatWindow chat={selectedChat} />
      </div>
    </div>
  );
};

export default App;
