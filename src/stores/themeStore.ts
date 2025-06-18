import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  initSystemTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",

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

        document.documentElement.classList.toggle(
          "dark",
          initialTheme === "dark",
        );
      },
    }),
    {
      name: "theme",
    },
  ),
);
