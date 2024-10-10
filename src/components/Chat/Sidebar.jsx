import SidebarChatList from "./SidebarChatList";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  const individualChats = [
    { name: "Ivan", message: "Hey, how's it going?", time: "3 mins ago", unread: true, online: true, status: "sent" },
    { name: "Daniel", message: "Are we still on for today?", time: "10 mins ago", online: false, status: "viewed" },
    { name: "Vlad", message: "Thanks for the help!", time: "30 mins ago", online: true, status: "delivered" },
    { name: "Oleg", message: "Sure, let’s do it.", time: "1 hour ago", unread: true, online: false, status: "viewed" },
  ];

  const groupChats = [
    { name: "Developers", message: "Meeting is scheduled at 5.", time: "2 mins ago", online: true, status: "sent" },
    { name: "Family", message: "Dinner at 7?", time: "15 mins ago", online: false, status: "delivered" },
  ];

  return (
    <div className="w-1/4 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 text-white flex flex-col shadow-lg h-full">
      <SidebarHeader className="sticky top-0 z-10" />
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <SidebarChatList title="Individual Chats" chats={individualChats} />
        <div className="border-t border-gray-700 mt-4 pt-4">
          <SidebarChatList title="Group Chats" chats={groupChats} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
