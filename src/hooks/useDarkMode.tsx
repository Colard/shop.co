import { useCallback, useEffect } from "react";

const useDarkMode = () => {
  useEffect(() => {
    let darkMode = localStorage.getItem("dark-mode");
    if (
      darkMode === "true" ||
      (darkMode === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  let toggleDarkMode = useCallback(() => {
    let darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "true") {
      localStorage.setItem("dark-mode", "false");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("dark-mode", "true");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return toggleDarkMode;
};

export default useDarkMode;
