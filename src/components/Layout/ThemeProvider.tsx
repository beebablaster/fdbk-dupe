import { ThemeContext } from '@/context/ThemeContext';
import { ThemeContextType, ThemePreferenceType } from '@/models/Utils';
import { ThemeContextDevError } from '@/utils/error/ThemeContext.dev.error';
import React from 'react';
import { initialTheme } from '../constants/colors';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const preference = 
    typeof localStorage !== 'undefined' ?
    localStorage.getItem("themePreference") as ThemePreferenceType : 
    undefined;
  
  const themeFromLocalStorage = 
    typeof localStorage !== 'undefined' ?
    localStorage.getItem("theme") as ThemeContextType : 
    undefined;

  const isPreferenceSystem = preference === "system" || !preference;
  
  const [theme, setTheme] = React.useState<ThemeContextType>(themeFromLocalStorage || initialTheme);

  const isLight = theme === "light";
  const isDark = theme === "dark";
  
  React.useEffect(() => {    
    if(isPreferenceSystem && typeof window !== 'undefined') {
      const matchesDark = window.matchMedia("(prefers-color-scheme: dark)");
      const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        const _theme = e.matches ? "dark" : "light"
        setTheme(_theme);
        localStorage.setItem("theme", _theme);
      }
      matchesDark.addEventListener('change', handleMediaQueryChange);

      return () => {
        matchesDark.removeEventListener('change', handleMediaQueryChange);
      };
    }
  }, [isPreferenceSystem]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, isLight, preference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new ThemeContextDevError;
  }

  return context;
}
