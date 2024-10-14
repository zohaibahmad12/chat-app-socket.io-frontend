import { FaSearch } from "react-icons/fa";
import { RiChatNewLine } from "react-icons/ri";
import NewChatModal from "../global/NewChatModal";
import { useState } from "react";
const SidebarHeader = () => {
  const [isNewChatModalOpen, setisNewChatModalOpen] = useState(false);
  return (
    <>
      <NewChatModal isOpen={isNewChatModalOpen} onClose={() => setisNewChatModalOpen(false)} />

      <div className="flex flex-col p-4 bg-gray-900 shadow-lg sticky top-0 z-10 space-y-4">
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/25" alt="App Logo" className="h-6 w-6" />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Talky</h1>
        </div>

        <button onClick={() => setisNewChatModalOpen(true)} className="w-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 transition duration-200 ease-in-out hover:shadow-lg">
          <RiChatNewLine className="h-5 w-5" />
          <span>New Chat</span>
        </button>

        <div className="relative">
          <input type="text" placeholder="Search" className="w-full p-2 pl-10 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          <span className="absolute left-3 top-3 text-gray-400">
            <FaSearch className="h-5 w-5" />
          </span>
        </div>
      </div>
    </>
  );
};

export default SidebarHeader;
