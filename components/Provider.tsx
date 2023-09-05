"use client";

import { PropsWithChildren, useState } from "react";
import { hoverLink, language, menuActive, scrollDown } from "../types/Types";
import {
  CursorContext,
  LanguageContext,
  MenuActiveContext,
  ScrollContext,
} from "../context/Context";

const Provider = (props: PropsWithChildren) => {
  const [hoverLink, setHoverLink] = useState<hoverLink>(false);
  const [language, setLanguage] = useState<language>("ES");
  const [menuActive, setMenuActive] = useState<menuActive>(false);
  const [scrollDown, setScrollDown] = useState<scrollDown>(false);

  return (
    <ScrollContext.Provider value={{ scrollDown, setScrollDown }}>
      <MenuActiveContext.Provider value={{ menuActive, setMenuActive }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <CursorContext.Provider value={{ hoverLink, setHoverLink }}>
            {props.children}
          </CursorContext.Provider>
        </LanguageContext.Provider>
      </MenuActiveContext.Provider>
    </ScrollContext.Provider>
  );
};

export default Provider;
