import { create } from "zustand";

export const useStore = create((set) => ({
  filter: null,
  setFilter: (filter: string) => set({ filter: filter }),
}));
