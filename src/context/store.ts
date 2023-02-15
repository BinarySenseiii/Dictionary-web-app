import { create } from 'zustand';

export type fontType = {
  id?: number;
  text: string;
  value: 'openSans' | 'nunito' | 'montserrat' | 'ubuntu' | 'poppins' | 'roboto' | 'julee';
};

interface BearState {
  font: fontType;
  actions: {
    setFont: (newFont: fontType) => void;
  };
}

const useFontStore = create<BearState>()((set) => ({
  font: { text: 'Open Sans', value: 'openSans' },

  actions: {
    setFont: (newFont) => set(() => ({ font: newFont })),
  },
}));

export const useFont = () => useFontStore((state) => state.font);
export const useFontActions = () => useFontStore((state) => state.actions);
