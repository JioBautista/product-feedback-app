import { create } from "zustand";

export const useStore = create((set) => ({
  data: null,
  setData: (newData) => set({ data: newData }),
}));
