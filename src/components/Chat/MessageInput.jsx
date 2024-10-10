import { FaPaperPlane } from "react-icons/fa"; // Import the send message icon

const MessageInput = () => {
  return (
    <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="ml-2 p-2 rounded-full border border-blue-500 bg-transparent flex items-center justify-center transition duration-300 transform hover:bg-blue-600 hover:border-blue-600 hover:scale-105">
        <FaPaperPlane className="text-blue-500 transition duration-300 transform hover:text-white" size={24} />
      </button>
    </div>
  );
};

export default MessageInput;
