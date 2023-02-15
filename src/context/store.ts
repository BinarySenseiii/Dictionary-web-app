import { create } from 'zustand';

export type fontType = {
  id?: number;
  text: string;
  value: 'openSans' | 'nunito' | 'montserrat' | 'ubuntu' | 'poppins' | 'roboto';
};

interface BearState {
  font: fontType;
  actions: {
    setFont: (newFont: fontType) => void;
  };
}

const useFontStore = create<BearState>()((set) => ({
  font: { text: 'Ubuntu', value: 'ubuntu' },

  actions: {
    setFont: (newFont) => set(() => ({ font: newFont })),
  },
}));

export const useFont = () => useFontStore((state) => state.font);
export const useFontActions = () => useFontStore((state) => state.actions);
