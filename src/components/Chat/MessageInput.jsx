import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import useChatStore from "../../store/useChatStore";
import useUserStore from "../../store/useUserStore";
import axios from "axios";
const MessageInput = () => {
  const [inputMessage, setInputMessage] = useState("");
  const user = useUserStore((state) => state.user);
  const sessionToken = useUserStore((state) => state.sessionToken);
  const selectedInbox = useChatStore((state) => state.selectedInbox);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedId = [selectedInbox._id, user._id].sort().join("-");
    const response = await axios.post(
      "http://localhost:3000/chat/add-message",
      {
        participants: [user._id, selectedInbox._id],
        senderId: user._id,
        text: inputMessage.trim(),
        sendStatus: "sent",
      },
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      }
    );
    console.log("response", response);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="ml-2 p-2 rounded-full border border-blue-500 bg-transparent flex items-center justify-center transition duration-300 transform hover:bg-blue-600 hover:border-blue-600 hover:scale-105">
          <FaPaperPlane className="text-blue-500 transition duration-300 transform hover:text-white" size={24} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
