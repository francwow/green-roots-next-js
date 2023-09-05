export type deskTop = boolean;

export type rotate = number;

export type hoverLink = boolean;

export type language = string;

export type menuActive = boolean;

export type scrollDown = boolean;

export type setHoverLink = (value: boolean) => void;

export type setMenuActive = (value: boolean) => void;

export type setLanguage = (value: string) => void;

export type CursorContextType = {
  hoverLink: hoverLink;
  setHoverLink: (hoverLink: boolean) => void;
};

export type MenuActiveType = {
  menuActive: menuActive;
  setMenuActive: (menuActive: boolean) => void;
};

export type ScrollContextType = {
  scrollDown: scrollDown;
  setScrollDown: (scrollDown: boolean) => void;
};

export type LanguageContextType = {
  language: language;
  setLanguage: (language: string) => void;
};
