import { useEffect } from "react";
import useUserStore from "../store/useUserStore";
import { io } from "socket.io-client";
const useSocket = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setSocket = useUserStore((state) => state.setSocket);
  const user = localStorage.getItem("user");
  useEffect(() => {
    const socket = io("http://localhost:3000/", { query: { user: user } });
    socket.on("connect", () => {
      console.log("Socket connected");
      setSocket(socket);
      setUser(JSON.parse(user));
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socket?.disconnect();
    };
  }, []);
};

export default useSocket;
