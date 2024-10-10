import { FaSearch, FaPencilAlt } from "react-icons/fa";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-900 shadow-lg sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Talky</h1>
        <button className="p-2 border border-gray-600 bg-transparent rounded-full transition duration-200 ease-in-out hover:bg-gray-600 flex items-center">
          <FaPencilAlt className="text-gray-300 h-5 w-5" />
        </button>
      </div>
      <div className="mt-2 mx-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
          <span className="absolute left-3 top-3 text-gray-400">
            <FaSearch className="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
