import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string
}

type Actions = {
  setToken: (token: string) => void
}

const useAuthStore = create(persist<State & Actions>(
  (set) => ({
    token: '',
    setToken: (token: string) => set((state) => ({
      ...state,
      token
    }))
  }), {name: 'auth'}
));

export { useAuthStore };
