import { create } from "zustand";

const useChatStore = create((set) => ({
  selectedChat: null,
  inbox: [],
  selectedInbox: null,
  setSelectedChat: (selectedChat) => set({ selectedChat }),
  setInbox: (inbox) => set({ inbox }),
  setSelectedInbox: (selectedInbox) => set({ selectedInbox }),
}));

export default useChatStore;
