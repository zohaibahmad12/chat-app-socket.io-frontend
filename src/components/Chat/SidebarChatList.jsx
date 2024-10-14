import { FaUser, FaUsers } from "react-icons/fa";
import SidebarChatItem from "./SidebarChatItem";

const SidebarChatList = ({ title, allIndividualChats }) => {
  // Choose the icon based on the type (individual or group)
  const sectionIcon = title === "Individual" ? <FaUser className="text-grey-400 w-3 h-3" /> : <FaUsers className="text-green-400 w-6 h-6" />;

  return (
    <div className="mb-4 px-4">
      <div className="flex items-center mb-2">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full mr-2">{sectionIcon}</div>
        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-200">{title === "Individual" ? "Individual Chats" : "Group Chats"}</h2>
      </div>

      <ul className="space-y-3">
        {allIndividualChats.map((chat, index) => (
          <SidebarChatItem key={index} name={chat.name} message={chat.message} time={chat.time} unread={chat.unread} status={chat.online} sendStatus={chat.status} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarChatList;
