export type ThemeContextType = "light" | "dark";
export type ThemePreferenceType = ThemeContextType | "system";

export type TThemeContext = {
  theme: ThemeContextType;
  isLight: boolean;
  isDark: boolean;
  setTheme: React.Dispatch<React.SetStateAction<ThemeContextType>>;
  preference?: ThemePreferenceType;
}

export type TModal = {
  isLoading: boolean;
  isOpen: boolean;
  variant: 'verification';
}

export type TLocales = "ru" | "kz" | "en";
export type TTranslations = {
  [key: string]: string;
};