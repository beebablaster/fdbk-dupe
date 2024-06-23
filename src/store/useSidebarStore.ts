import { create } from 'zustand';

interface ISidebarStore {
  isExpanded: boolean;
  toggle: () => void;
}

export const useSidebarStore = create<ISidebarStore>()((set) => ({
  isExpanded: false,
  toggle: () => set((state) => ({ isExpanded: !state.isExpanded })),
}));

