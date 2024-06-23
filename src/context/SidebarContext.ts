import React, { ReactNode } from "react";

interface ISidebarContext {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export const SidebarContext = React.createContext<ISidebarContext | undefined>(undefined);