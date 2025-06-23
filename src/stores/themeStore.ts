import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme | null;
}

interface ThemeActions {
  toggleTheme: () => void;
  initSystemTheme: () => void;
}

type TThemeStore = ThemeState & ThemeActions;

const ThemeStore: StateCreator<TThemeStore> = (set, get) => ({
  theme: null,

  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    set({ theme: newTheme });
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  },

  initSystemTheme: () => {
    const localTheme = get().theme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme =
      localTheme === "light" || localTheme === "dark"
        ? localTheme
        : prefersDark
          ? "dark"
          : "light";

    set({ theme: initialTheme });

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  },
});

const useThemeStore = create<TThemeStore>()(
  persist(ThemeStore, {
    name: "theme",
  }),
);

export function useThemeState(): ThemeState["theme"] {
  return useThemeStore((s) => s.theme);
}

export function useThemeActions(): ThemeActions {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const initSystemTheme = useThemeStore((s) => s.initSystemTheme);

  return { toggleTheme, initSystemTheme };
}
