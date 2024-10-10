import { useEffect } from "react";
import useUserStore from "../store/useUserStore";
import useChatStore from "../store/useChatStore";
import { socket } from "../socketConnection";
const useSocket = () => {
  const setSocket = useUserStore((state) => state.setSocket);
  const setAllIndividualChats = useChatStore((state) => state.setAllIndividualChats);
  const allIndividualChats = useChatStore((state) => state.allIndividualChats);

  useEffect(() => {
    const onSocketConnect = () => {
      console.log("connected with id", socket.id);
      setSocket(socket);
    };
    const onSocketDisconnect = () => {
      console.log("disconnected with id", socket.id);
    };
    const onNewUserConnected = ({ email }) => {
      console.log("new user connected", email);
      const userIndex = allIndividualChats.findIndex((chat) => chat?.participant?.email === email);
      console.log("all chats", allIndividualChats);
      if (userIndex !== -1) {
        const updatedIndividualChats = [...allIndividualChats];
        updatedIndividualChats[userIndex].participant.status = "online";
        setAllIndividualChats(updatedIndividualChats);
      }
    };

    socket.on("connect", onSocketConnect);
    socket.on("disconnect", onSocketDisconnect);
    socket.on("newUserConnected", onNewUserConnected);

    return () => {
      socket.off("connect", onSocketConnect);
      socket.off("disconnect", onSocketDisconnect);
      socket.off("newUserConnected", onNewUserConnected);
    };
  }, [allIndividualChats, setAllIndividualChats, setSocket]);
};

export default useSocket;
