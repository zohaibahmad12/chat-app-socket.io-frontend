import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; // Importing icons from react-icons
import useFetch from "../../hooks/useFetch";
const NewChatModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [users] = useState([
    { name: "Ivan", email: "ivan@example.com", profilePic: "https://via.placeholder.com/40" },
    { name: "Daniel", email: "daniel@example.com", profilePic: "https://via.placeholder.com/40" },
    { name: "Vlad", email: "vlad@example.com", profilePic: "https://via.placeholder.com/40" },
    { name: "Oleg", email: "oleg@example.com", profilePic: "https://via.placeholder.com/40" },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = users.filter((user) => user.email.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(results);
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
            <input type="text" placeholder="Search by email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full p-3 pl-10 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
        </form>
        <div className="mt-4">
          {searchResults.map((user, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-800 text-white rounded mb-2 hover:bg-gray-700 cursor-pointer transition duration-200">
              <img src={user.profilePic} alt={`${user.name}'s profile`} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-semibold">{user.name}</div>
                <div className="text-gray-400">{user.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;
