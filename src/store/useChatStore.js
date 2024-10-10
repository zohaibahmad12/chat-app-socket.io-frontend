import { create } from "zustand";

const useChatStore = create((set) => ({
  allIndividualChats: [],
  allGroupChats: [],
  setAllIndividualChats: (allIndividualChats) => set({ allIndividualChats }),
  setAllGroupChats: (allGroupChats) => set({ allGroupChats }),
}));

export default useChatStore;
