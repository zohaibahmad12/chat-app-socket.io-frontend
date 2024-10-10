import { FaCircle, FaCheck, FaCheckDouble } from "react-icons/fa";

const SidebarChatItem = ({ name, message, time, unread, status, lastSeen, sendStatus }) => {
  return (
    <li className="flex items-center w-full p-3 bg-gray-900 hover:bg-gray-700 transition duration-300 shadow-md rounded-md">
      <div className="relative">
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full w-12 h-12 border-2 border-gray-700 shadow-md" />
        <FaCircle className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${status == "online" ? "text-green-400" : "text-gray-500"}`} />
      </div>

      <div className="flex-1 ml-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-white">{name}</h3>
          <span className="text-xs text-gray-400">{time}</span>
        </div>
        <p className="text-sm text-gray-400 flex items-center">
          {message}
          {sendStatus === "sent" && <FaCheck className="ml-1 text-gray-400" />}
          {sendStatus === "delivered" && <FaCheckDouble className="ml-1 text-gray-400" />}
          {sendStatus === "viewed" && <FaCheckDouble className="ml-1 text-blue-400" />}
        </p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
