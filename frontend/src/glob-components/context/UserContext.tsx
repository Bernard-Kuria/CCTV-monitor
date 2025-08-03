import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<"bright" | "dark">>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
