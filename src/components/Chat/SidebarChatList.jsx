import { FaUser, FaUsers } from "react-icons/fa";
import SidebarChatItem from "./SidebarChatItem";

const SidebarChatList = ({ inbox }) => {
  return (
    <div className="mb-4">
      <ul className="">
        {inbox?.map((chat, index) => (
          <SidebarChatItem key={index} chat={chat} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarChatList;
