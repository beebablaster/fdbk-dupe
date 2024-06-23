import { TThemeContext } from "@/models/Utils";
import { createContext, useContext } from "react";

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);