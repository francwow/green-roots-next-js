"use client";

import Link from "next/link";
import { useCursorContext, useLanguageContext } from "../context/Context";

const CTA = () => {
  const { language, setLanguage } = useLanguageContext();
  const { hoverLink, setHoverLink } = useCursorContext();

  return (
    <div className="cta-container">
      <div className="heading-container">
        {language === "ES" ? (
          <h2 className="desc-heading">Conoce nuestros productos</h2>
        ) : (
          <h2 className="desc-heading">Take a look at our products</h2>
        )}
      </div>
      <div className="btn-container">
        <Link href={"/tienda"}>
          {language === "ES" ? (
            <button
              onMouseEnter={() => setHoverLink(true)}
              onMouseLeave={() => setHoverLink(false)}
              className="button"
            >
              TIENDA
            </button>
          ) : (
            <button
              onMouseEnter={() => setHoverLink(true)}
              onMouseLeave={() => setHoverLink(false)}
              className="button"
            >
              STORE
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default CTA;
