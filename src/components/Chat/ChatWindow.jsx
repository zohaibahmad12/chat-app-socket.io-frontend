// ChatWindow.js
import ChatWindowHeader from "./ChatWindowHeader";
import ChatMessageList from "./ChatMessageList";
import MessageInput from "./MessageInput";

const ChatWindow = ({ chat }) => {
  return (
    <div className="flex-1 flex flex-col bg-gray-100 h-full">
      {/* Header */}
      <ChatWindowHeader name={chat.name} email={chat.email} online={chat.online} lastSeen={chat.lastSeen} />

      {/* Chat Messages */}
      <ChatMessageList messages={chat.messages} />

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
