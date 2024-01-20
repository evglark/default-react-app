import { createContext } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (val: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
