import { useState } from "react";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "" || room.trim() === "") return;
    console.log(`Message: ${message}, Room: ${room}`);
    setMessage("");
    setRoom("");
  };

  return (
    <div className="flex flex-col p-4 max-w-lg mx-auto">
      <form onSubmit={handleSendMessage} className="space-y-4">
        <div>
          <label
            htmlFor="room"
            className="block text-sm font-medium text-gray-700"
          >
            Room
          </label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Type room name..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Type your message..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
