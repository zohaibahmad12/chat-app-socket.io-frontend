import { create } from "zustand";

const useUserStore = create((set) => ({
  socket: null,
  user: null,
  setSocket: (socket) => set({ socket }),
  setUser: (user) => set({ user }),
}));

export default useUserStore;
