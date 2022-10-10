import create from "zustand";

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
    enableKeypad: () => set({ displayKeypad: true }),
    pressKey: (key) => {
        set((state) => {
            switch (key) {
                case "Back":
                    if (state.code.length === 0) return { code: state.code };
                    else return { code: state.code.slice(0, -1) };
                case "Enter":
                    if (state.code === "3258") return { success: true };
                    else return { code: "" };
                default:
                    if (state.code.length === 4) return { code: state.code };
                    return { code: state.code + key };
            }
        });
    },
}));
