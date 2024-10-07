import { useEffect } from "react";
import { io } from "socket.io-client";
function App() {
  useEffect(() => {
    const socket = io("http://localhost:3000/");
    socket.on("connect", () => {
      console.log("Client is connected successfully to server via web socket");
    });
    socket.on("disconnect", () => {
      console.log("Client is disconnected from server");
    });
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
