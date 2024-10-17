import { useEffect } from "react";
import useUserStore from "../store/useUserStore";
import useChatStore from "../store/useChatStore";
import { socket } from "../socketConnection";
const useSocket = () => {
  const setSocket = useUserStore((state) => state.setSocket);
  const setInbox = useChatStore((state) => state.setInbox);
  const inbox = useChatStore((state) => state.inbox);

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
      const userIndex = inbox.findIndex((chat) => chat?.participant?.email === email);
      console.log("all chats", inbox);
      if (userIndex !== -1) {
        const updatedIndividualChats = [...inbox];
        updatedIndividualChats[userIndex].participant.status = "online";
        setInbox(updatedIndividualChats);
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
  }, [inbox, setInbox, setSocket]);
};

export default useSocket;
