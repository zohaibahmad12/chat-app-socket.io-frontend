import { FaCircle, FaCheck, FaCheckDouble } from "react-icons/fa";

const SidebarChatItem = ({ name, message, time, unread, online, status }) => {
  return (
    <li className="flex items-center p-3 rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition duration-300 shadow-md">
      <div className="relative">
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full w-12 h-12 border-2 border-gray-700 shadow-md" />
        <FaCircle className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${online ? "text-green-500" : "text-gray-500"}`} />
      </div>

      <div className="flex-1 ml-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-white">{name}</h3>
          <span className="text-xs text-gray-400">{time}</span>
        </div>
        <p className="text-sm text-gray-400 flex items-center">
          {message}
          {status === "sent" && <FaCheck className="ml-1 text-gray-400" />}
          {status === "delivered" && <FaCheckDouble className="ml-1 text-gray-400" />}
          {status === "viewed" && <FaCheckDouble className="ml-1 text-blue-500" />}
        </p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
