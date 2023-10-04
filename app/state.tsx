import { create } from "zustand";

interface BearState {
  displayKeypad: boolean;
  code: string;
  enableKeypad: () => void;
  pressKey: (key: string | number) => void;
  success: boolean;
}

export const useStore = create<BearState>()((set) => ({
  displayKeypad: false,
  code: "",
  success: false,
  enableKeypad: () =>
    set(() => {
      console.log(
        "The code is in the bottom left corner of the webpage if you're having trouble finding it!"
      );
      return { displayKeypad: true };
    }),
  pressKey: (key) => {
    set((state) => {
      switch (key) {
        case "Back":
          if (state.code.length === 0) return { code: state.code };
          else return { code: state.code.slice(0, -1) };
        case "Enter":
          if (state.code === "5817")
            return {
              success: true, // 5/8/17 -> August 5th, 2017 (Start of Plexi)
            };
          else return { code: "" };
        default:
          if (state.code.length === 4) return { code: state.code };
          return { code: state.code + key };
      }
    });
  },
}));