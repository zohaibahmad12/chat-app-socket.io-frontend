import { FaUser, FaUsers } from "react-icons/fa";
import SidebarChatItem from "./SidebarChatItem";

const SidebarChatList = ({ allChats }) => {
  return (
    <div className="mb-4">
      <ul className="">
        {allChats.map((chat, index) => (
          <SidebarChatItem
            key={index}
            name={chat.name}
            message={chat.message}
            time={"3 mins ago"}
            unread={false}
            activeStatus={chat.activeStatus}
            sendStatus={"delivered"}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarChatList;
