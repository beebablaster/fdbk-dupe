import { create } from 'zustand';

interface IWarningStore {
  warnings: Record<string, string | undefined>;
  setWarning: (key: string, message: string) => void;
  clearWarning: (key: string) => void;
}

export const useWarningStore = create<IWarningStore>()((set) => ({
  warnings: {},
  setWarning: (key, message) => set((state) => ({ warnings: { ...state.warnings, [key]: message } })),
  clearWarning: (key) => set((state) => ({ warnings: { ...state.warnings, [key]: undefined } })),
}));

