const MessageInput = () => {
  return (
    <div className="p-4 bg-white border-t border-gray-300 flex items-center">
      <input type="text" placeholder="Type a message..." className="flex-1 p-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button className="ml-2 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600">Send</button>
    </div>
  );
};

export default MessageInput;
