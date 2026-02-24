import { Auth } from "@/types/auth";
import { create } from "zustand";

export const useAuthStore = create<Auth>((set) => ({
    login: false,
    setLogin: (login: boolean) => set({ login }),
    clearLogin: () => set({ login: false }),
}))