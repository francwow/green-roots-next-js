"use client";

import NavMenu from "./NavMenu";
import Languages from "./Languages";
import {
  useCursorContext,
  useMenuContext,
  useScrollContext,
} from "../context/Context";
import { useEffect } from "react";

const Header = () => {
  const { menuActive, setMenuActive } = useMenuContext();
  const { hoverLink, setHoverLink } = useCursorContext();
  const { scrollDown, setScrollDown } = useScrollContext();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    let noScroll = 0;

    function scrollHandle() {
      const scrolled = window.scrollY;
      if (scrolled > noScroll) {
        setScrollDown(true);
      } else if (scrolled < noScroll) {
        setScrollDown(false);
      }
      noScroll = scrolled <= 0 ? 0 : scrolled;
    }

    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <div className={!menuActive && scrollDown ? "header scrolled" : "header"}>
      <Languages inicio={false} />
      <div className="burger">
        <button
          onMouseEnter={() => {
            setHoverLink(true);
          }}
          onMouseLeave={() => {
            setHoverLink(false);
          }}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          className={menuActive ? "burger-btn toggle" : "burger-btn"}
        >
          <div className="line_1"></div>
          <div className="line_2"></div>
          <div className="line_3"></div>
        </button>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
