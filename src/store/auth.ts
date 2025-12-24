import { create } from "zustand";

type User = { token: string } | null;

type StateType = {
  user: User;
  setUser: (user: User) => void;
};

export const useAuthStore = create<StateType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
