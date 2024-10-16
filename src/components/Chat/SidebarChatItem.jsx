import { FaCircle, FaCheck, FaCheckDouble } from "react-icons/fa";
import useUserStore from "../../store/useUserStore";
import useChatStore from "../../store/useChatStore";
import axios from "axios";
const SidebarChatItem = ({ chat }) => {
  const user = useUserStore((state) => state.user);
  const sessionToken = useUserStore((state) => state.sessionToken);
  const setSelectedChat = useChatStore((state) => state.setSelectedChat);
  const setSelectedInbox = useChatStore((state) => state.setSelectedInbox);

  const handleChatClick = async () => {
    const combinedId = [chat._id, user._id].sort().join("-");
    setSelectedChat(null);
    setSelectedInbox({ ...chat });

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/chat/get-chat?chatId=${combinedId}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      console.log("response", response);
      setSelectedChat(response.data.chat);
    } catch (error) {
      setSelectedChat([]);
    }
  };
  return (
    <li
      onClick={handleChatClick}
      className="flex items-center w-full p-2 bg-gray-900 hover:bg-gray-700 transition duration-300 shadow-md border-t border-b border-gray-700"
    >
      <div className="relative">
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full w-9 h-9 border-2 border-gray-700 shadow-md" />
        <FaCircle className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${chat.activeStatus == "online" ? "text-green-400" : "text-gray-500"}`} />
      </div>

      <div className="flex-1 ml-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-white">{chat.name}</h3>
          <span className="text-xs text-gray-400">{"2 minutes ago"}</span>
        </div>
        <p className="text-xs text-gray-400 flex items-center">
          {"Hello, how are you"}
          {chat.sendStatus === "sent" && <FaCheck className="ml-1 text-gray-400" />}
          {chat.sendStatus === "delivered" && <FaCheckDouble className="ml-1 text-gray-400" />}
          {chat.sendStatus === "viewed" && <FaCheckDouble className="ml-1 text-blue-400" />}
          {!chat.sendStatus && <FaCheckDouble className="ml-1 text-blue-400" />}
        </p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
