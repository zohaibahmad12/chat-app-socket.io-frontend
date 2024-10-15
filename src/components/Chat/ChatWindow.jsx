import ChatWindowHeader from "./ChatWindowHeader";
import ChatMessageList from "./ChatMessageList";
import MessageInput from "./MessageInput";
import WelcomeMessage from "./WelcomeMessage";
import useChatStore from "../../store/useChatStore";
const ChatWindow = () => {
  const selectedChat = useChatStore((state) => state.selectedChat);
  if (!selectedChat) return <WelcomeMessage />;
  console.log("selected chat", selectedChat);
  return (
    <div className="flex-1 flex flex-col bg-gray-100 h-full">
      <ChatWindowHeader />
      <ChatMessageList messages={[]} />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
