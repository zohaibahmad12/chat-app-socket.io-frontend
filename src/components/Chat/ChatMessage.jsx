// ChatMessage.js
import { FaCheck, FaCheckDouble } from "react-icons/fa";

const ChatMessage = ({ isSender, message, time, status }) => {
  const getStatusIcon = () => {
    if (status === "sent") return <FaCheck className="text-gray-400" />;
    if (status === "delivered") return <FaCheckDouble className="text-gray-400" />;
    if (status === "viewed") return <FaCheckDouble className="text-blue-500" />;
  };

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`max-w-xs p-3 rounded-lg shadow-md ${isSender ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
        <p className="text-sm mb-1">{message}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-200">{time}</span>
          {isSender && <span className="ml-2">{getStatusIcon()}</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
