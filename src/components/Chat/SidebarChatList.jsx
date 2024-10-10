import SidebarChatItem from "./SidebarChatItem";
import useChatStore from "../../store/useChatStore";
const SidebarChatList = ({ title }) => {
  const allIndividualChats = useChatStore((state) => state.allIndividualChats);
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">{title}</h2>
      <ul className="space-y-3">
        {allIndividualChats.map((chat, index) => (
          <SidebarChatItem
            key={index}
            name={chat.participant.name}
            message={chat.lastMessage}
            time={chat.time}
            unread={chat.unread}
            status={chat.participant.status}
            lastSeen={chat.participant.lastSeen}
            sendStatus={chat.sendStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarChatList;
