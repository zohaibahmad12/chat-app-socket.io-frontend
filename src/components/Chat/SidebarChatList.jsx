import SidebarChatItem from "./SidebarChatItem";

const SidebarChatList = ({ title, chats }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">{title}</h2>
      <ul className="space-y-3">
        {chats.map((chat, index) => (
          <SidebarChatItem key={index} name={chat.name} message={chat.message} time={chat.time} unread={chat.unread} online={chat.online} status={chat.status} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarChatList;
