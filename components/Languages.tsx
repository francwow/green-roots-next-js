"use client";

import { useLanguageContext, useCursorContext } from "../context/Context";

type Languages = {
  inicio: boolean;
};

const Languages = (props: Languages) => {
  const { inicio } = props;
  const { language, setLanguage } = useLanguageContext();
  const { hoverLink, setHoverLink } = useCursorContext();

  return (
    <div
      style={
        inicio
          ? { position: "absolute", top: "2%", right: "2%" }
          : { position: "initial" }
      }
    >
      <ul className="language-container">
        <li>
          <span
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            tabIndex={0}
            onClick={() => setLanguage("EN")}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => e.preventDefault}
            className={language === "EN" ? "language selected" : "language"}
          >
            EN
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            tabIndex={0}
            onClick={() => setLanguage("ES")}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => e.preventDefault}
            className={language === "ES" ? "language selected" : "language"}
          >
            ES
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
