import { FaCircle, FaEllipsisV } from "react-icons/fa";
const ChatWindowHeader = ({ name, online, lastSeen }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-900 text-white shadow-lg">
      <div>
        <h3 className="font-semibold text-base">{name}</h3>
        <div className="flex items-center">
          <FaCircle className={`text-xs ${online ? "text-green-500" : "text-gray-500"} mr-1`} />
          <span className="text-sm">{online ? "Online" : `Last seen: ${lastSeen}`}</span>
        </div>
      </div>
      <FaEllipsisV className="text-gray-400 hover:text-white cursor-pointer" />
    </div>
  );
};

export default ChatWindowHeader;
