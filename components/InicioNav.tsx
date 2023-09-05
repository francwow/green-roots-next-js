"use client";

import Link from "next/link";
import { InicioNavItems } from "../data/navItems";
import { useCursorContext, useLanguageContext } from "../context/Context";

const InicioNav = () => {
  const { language, setLanguage } = useLanguageContext();
  const { hoverLink, setHoverLink } = useCursorContext();

  return (
    <div className="inicio-nav-container">
      <ul className="inicio-nav">
        {InicioNavItems.map((item, index) => {
          return (
            <li
              key={index}
              style={{ animationDelay: `${index / 7}s` }}
              className="inicio-list-item"
            >
              <Link
                onMouseEnter={() => {
                  setHoverLink(true);
                }}
                onMouseLeave={() => {
                  setHoverLink(false);
                }}
                href={item.href}
                onClick={() => {
                  setHoverLink(false);
                }}
              >
                {language === "ES" ? item.nameES : item.nameEN}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InicioNav;
