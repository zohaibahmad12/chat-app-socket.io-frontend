import SidebarChatList from "./SidebarChatList";
import SidebarHeader from "./SidebarHeader";
import useChatStore from "../../store/useChatStore";
const Sidebar = () => {
  const inbox = useChatStore((state) => state.inbox);

  return (
    <div className="w-1/4 bg-gray-800 text-white flex flex-col shadow-lg h-full">
      <SidebarHeader />
      <div className="flex-1 overflow-y-auto space-y-4 scrollbar-thin">
        <SidebarChatList inbox={inbox} />
      </div>
    </div>
  );
};

export default Sidebar;
