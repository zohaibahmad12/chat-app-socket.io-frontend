import { create } from "zustand";

const useUserStore = create((set) => ({
  socket: null,
  user: null,
  isAuthenticated: null,
  sessionToken: null,
  setSocket: (socket) => set({ socket }),
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setSessionToken: (sessionToken) => set({ sessionToken }),
}));

export default useUserStore;
