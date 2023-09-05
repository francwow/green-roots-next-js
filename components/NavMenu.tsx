"use client";

import { navItems } from "../data/navItems";
import Social from "./Social";
import Link from "next/link";
import {
  useCursorContext,
  useLanguageContext,
  useMenuContext,
} from "../context/Context";

const NavMenu = () => {
  const { menuActive, setMenuActive } = useMenuContext();
  const { language, setLanguage } = useLanguageContext();
  const { hoverLink, setHoverLink } = useCursorContext();

  return (
    <>
      {menuActive ? (
        <div className="main-nav">
          <ul className="nav-container container-flex-column">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ animationDelay: `${index / 7}s` }}
                  className="nav-list-item"
                >
                  <Link
                    onMouseEnter={() => {
                      setHoverLink(true);
                    }}
                    onMouseLeave={() => {
                      setHoverLink(false);
                    }}
                    onClick={() => {
                      setMenuActive(false);
                      setHoverLink(false);
                    }}
                    href={item.href}
                  >
                    {language === "ES" ? item.nameES : item.nameEN}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Social />
        </div>
      ) : null}
    </>
  );
};

export default NavMenu;
