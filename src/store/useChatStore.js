import { create } from "zustand";

const useChatStore = create((set) => ({
  allIndividualChats: [],
  allGroupChats: [],
  selectedChat: null,
  isSelectedChatLoading: false,
  setAllIndividualChats: (allIndividualChats) => set({ allIndividualChats }),
  setAllGroupChats: (allGroupChats) => set({ allGroupChats }),
  setSelectedChat: (selectedChat) => set({ selectedChat }),
  setIsSelectedChatLoading: (isSelectedChatLoading) => set({ isSelectedChatLoading }),
}));

export default useChatStore;
