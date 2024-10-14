import { useState } from "react";
import { FaSearch, FaTimes, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";
import useUserStore from "../../store/useUserStore";
import useChatStore from "../../store/useChatStore";
const NewChatModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const sessionToken = useUserStore((state) => state.sessionToken);
  const setAllIndividualChats = useChatStore((state) => state.setAllIndividualChats);
  const allIndividualChats = useChatStore((state) => state.allIndividualChats);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/find-by-email?email=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      console.log("result", response);
      setSearchResults(response.data.user);
    } catch (error) {
      setSearchResults({});
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative bg-gray-900 rounded-lg p-6 w-1/3 z-10 shadow-lg max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">New Chat</h2>
          <button onClick={onClose} className="text-white">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSearch}>
          <div className="relative mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </form>
        {searchResults && Object.keys(searchResults).length > 0 ? (
          <div className="mt-4" onClick={() => setAllIndividualChats([...allIndividualChats, searchResults])}>
            <div className="flex items-center p-3 bg-gray-800 text-white rounded mb-2 hover:bg-gray-700 cursor-pointer transition duration-200">
              <img src="https://via.placeholder.com/40" alt={`${searchResults.name}'s profile`} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-semibold">{searchResults.name}</div>
                <div className="text-gray-400">{searchResults.email}</div>
              </div>
            </div>
          </div>
        ) : (
          searchResults &&
          Object.keys(searchResults).length === 0 && (
            <div className="flex items-center mt-4 p-3 bg-red-600 text-white rounded">
              <FaExclamationCircle className="mr-2" />
              <span className="text-lg font-semibold">No user found</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NewChatModal;
