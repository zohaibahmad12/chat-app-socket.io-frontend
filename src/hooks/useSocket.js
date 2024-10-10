import { useEffect } from "react";
import useUserStore from "../store/useUserStore";
import useChatStore from "../store/useChatStore";
import { io } from "socket.io-client";

const useSocket = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setSocket = useUserStore((state) => state.setSocket);
  const socket = useUserStore((state) => state.socket);
  const setAllIndividualChats = useChatStore((state) => state.setAllIndividualChats);
  const allIndividualChats = useChatStore((state) => state.allIndividualChats);
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("chats are:", allIndividualChats);

  useEffect(() => {
    if (!user) return;
    let newSocket;

    if (!socket) {
      newSocket = io("http://localhost:3000/", { query: { user: JSON.stringify(user) } });
      setSocket(newSocket);
    } else {
      newSocket = socket;
    }

    const onConnect = () => {
      console.log("Socket connected");
      console.log("socket is", newSocket.id);
      setUser(user);
      console.log("chat set", user.currentChats);
      setAllIndividualChats(user.currentChats);
    };

    const onDisconnect = () => {
      console.log("Socket disconnected");
    };

    const onNewUserConnected = ({ email }) => {
      console.log("new user connected", email);
      const userIndex = allIndividualChats.findIndex((chat) => chat?.participant?.email === email);
      console.log("found", userIndex);
      console.log("all chats", allIndividualChats);
      if (userIndex !== -1) {
        console.log("found", userIndex);
        const updatedIndividualChats = [...allIndividualChats];
        updatedIndividualChats[userIndex].participant.status = "online";
        console.log("updations", updatedIndividualChats);
        setAllIndividualChats(updatedIndividualChats);
      }
    };

    // Register event listeners
    newSocket.on("connect", onConnect);
    newSocket.on("disconnect", onDisconnect);
    newSocket.on("newUserConnected", onNewUserConnected);

    // Cleanup function to remove listeners
    return () => {
      newSocket.off("connect", onConnect);
      newSocket.off("disconnect", onDisconnect);
      newSocket.off("newUserConnected", onNewUserConnected);
    };
  }, [user, socket, allIndividualChats]); // Ensure user and socket are included as dependencies
};

export default useSocket;
