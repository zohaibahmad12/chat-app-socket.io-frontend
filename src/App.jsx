import { useEffect } from "react";
import { socket } from "./socket";
import ChatForm from "./components/ChatForm";
function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Client is connected successfully to server via web socket");
    });
    socket.on("disconnect", () => {
      console.log("Client is disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <ChatForm />
    </>
  );
}

export default App;
