import ChatMessage from "./ChatMessage";
import useChatStore from "../../store/useChatStore";
import InitialLoadingIndicator from "../global/InitialLoadingIndicator";
const ChatMessageList = () => {
  const selectedChat = useChatStore((state) => state.selectedChat);
  const selectedInbox = useChatStore((state) => state.selectedInbox);

  if (selectedInbox && !selectedChat) {
    return <InitialLoadingIndicator />;
  }
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {selectedChat.messages.map((message, index) => (
        <ChatMessage key={index} isSender={message.isSender} message={message.text} time={message.time} status={message.status} />
      ))}
    </div>
  );
};

export default ChatMessageList;
