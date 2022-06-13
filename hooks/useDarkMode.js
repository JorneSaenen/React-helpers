import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
};
