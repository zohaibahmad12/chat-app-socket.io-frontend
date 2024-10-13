import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import Sidebar from "./components/Chat/Sidebar";
// import ChatWindow from "./components/Chat/ChatWindow";
// import useSocket from "./hooks/useSocket";
// import useUserStore from "./store/useUserStore";
// import useChatStore from "./store/useChatStore";
// const App = () => {
//   useSocket();
//   const setUser = useUserStore((state) => state.setUser);
//   const setAllIndividualChats = useChatStore((state) => state.setAllIndividualChats);
//   const userObj = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     if (!userObj) return;
//     setUser(userObj);
//     setAllIndividualChats(userObj.currentChats);
//   }, []);

//   const [selectedChat, setSelectedChat] = useState({
//     name: "Zain",
//     email: "zain@gmail.com",
//     online: true,
//     lastSeen: "10 mins ago",
//     messages: [
//       { text: "Hey, how's it going?", time: "3 mins ago", isSender: false, status: "viewed" },
//       { text: "All good, you?", time: "2 mins ago", isSender: true, status: "viewed" },
//       { text: "I'm doing great!", time: "1 min ago", isSender: false, status: "delivered" },
//     ],
//   });

//   return (
//     <div className="h-screen flex bg-gray-100">
//       <Sidebar onSelectChat={setSelectedChat} />
//       <div className="flex-1 h-full">
//         <ChatWindow chat={selectedChat} />
//       </div>
//     </div>
//   );
// };

// export default App;
