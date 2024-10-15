import { FaUser, FaUsers } from "react-icons/fa";
import SidebarChatItem from "./SidebarChatItem";

const SidebarChatList = ({ allChats }) => {
  return (
    <div className="mb-4">
      <ul className="">
        {allChats.map((chat, index) => (
          <SidebarChatItem key={index} chat={chat} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarChatList;
