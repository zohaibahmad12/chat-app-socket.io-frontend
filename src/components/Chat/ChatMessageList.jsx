// ChatMessageList.js
import ChatMessage from "./ChatMessage";

const ChatMessageList = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {messages.map((message, index) => (
        <ChatMessage key={index} isSender={message.isSender} message={message.text} time={message.time} status={message.status} />
      ))}
    </div>
  );
};

export default ChatMessageList;
