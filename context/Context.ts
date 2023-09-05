"use client";

import { createContext, useContext } from "react";
import {
  CursorContextType,
  LanguageContextType,
  MenuActiveType,
  ScrollContextType,
} from "../types/Types";

export const CursorContext = createContext<CursorContextType | null>(null);
export const LanguageContext = createContext<LanguageContextType | null>(null);
export const MenuActiveContext = createContext<MenuActiveType | null>(null);
export const ScrollContext = createContext<ScrollContextType | null>(null);

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useCursorContext = (): CursorContextType => {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useMenuContext = (): MenuActiveType => {
  const context = useContext(MenuActiveContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
