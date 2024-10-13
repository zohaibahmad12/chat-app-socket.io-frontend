import { create } from "zustand";

const useUserStore = create((set) => ({
  socket: null,
  user: null,
  isAuthenticated: false,
  sessionToken: null,
  setSocket: (socket) => set({ socket }),
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => ({ isAuthenticated }),
  setSessionToken: (sessionToken) => ({ sessionToken }),
}));

export default useUserStore;
