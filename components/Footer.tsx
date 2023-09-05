"use client";

import { navItems } from "../data/navItems";
import Logo from "./Logo";
import Social from "./Social";
import Link from "next/link";
import { useCursorContext, useLanguageContext } from "../context/Context";

const Footer = () => {
  const { hoverLink, setHoverLink } = useCursorContext();
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="footer-wrapper">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#012321"
            fillOpacity="1"
            d="M0,160L120,154.7C240,149,480,139,720,138.7C960,139,1200,149,1320,154.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer-container">
        <Logo />
        <div className="footer-info">
          <ul className="info-container">
            <li className="info-item">
              <span>+57 3132105286</span>
            </li>
            <li className="info-item">
              <span>601 8964576</span>
            </li>
            <li className="info-item">
              <span>cra 18 # 140-33 Barrio Alcala, Bogota DC, Colombia</span>
            </li>
          </ul>
          <ul className="footer-nav">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ animationDelay: `${index / 7}s` }}
                  className="footer-nav-item"
                >
                  <Link
                    onMouseEnter={() => {
                      setHoverLink(true);
                    }}
                    onMouseLeave={() => {
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
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
