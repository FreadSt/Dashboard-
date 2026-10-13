import { Text } from "@/shared/Text/Text.js";
import { useTheme } from "../../../providers/ThemeProvider.jsx";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center w-full border-b p-2 h-14.25">
      <Text variant="heading">Logo</Text>
      <section className="flex items-center justify-between gap-5">
        <button onClick={toggleTheme} className="transition-all duration-300 ease-in-out hover:scale-105">{theme === "light" ? <Moon/> : <Sun/> }</button>
      </section>
    </header>
  );
};
