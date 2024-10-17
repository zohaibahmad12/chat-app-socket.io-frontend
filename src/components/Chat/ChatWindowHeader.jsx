import { FaCircle, FaEllipsisV } from "react-icons/fa";
import useChatStore from "../../store/useChatStore";
const ChatWindowHeader = () => {
  const selectedInbox = useChatStore((state) => state.selectedInbox);
  console.log("inbox", selectedInbox);
  return (
    <div className="flex items-center justify-between p-2 bg-gray-900 text-white shadow-lg">
      <div>
        <h3 className="font-semibold text-base">{selectedInbox?.name}</h3>
        <div className="flex items-center">
          <FaCircle className={`text-xs ${selectedInbox?.activeStatus == "online" ? "text-green-500" : "text-gray-500"} mr-1`} />
          <span className="text-sm">{selectedInbox?.activeStatus == "online" ? "Online" : `Last seen: 1h ago`}</span>
        </div>
      </div>
      <FaEllipsisV className="text-gray-400 hover:text-white cursor-pointer" />
    </div>
  );
};

export default ChatWindowHeader;
