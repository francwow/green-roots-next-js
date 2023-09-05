"use client";

import { useInView } from "react-intersection-observer";
import tiendaIcon1 from "../assets/webpImages/tienda-icon-01.webp";
import tiendaIcon2 from "../assets/webpImages/tienda-icon-02.webp";
import tiendaIcon3 from "../assets/webpImages/tienda-icon-03.webp";
import tiendaIcon4 from "../assets/webpImages/tienda-icon-04.webp";
import { useLanguageContext } from "../context/Context";
import Image from "next/image";

const TiendaIcons = () => {
  const { language, setLanguage } = useLanguageContext();

  const { ref: icons, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={icons}
      className={iconsInView ? "tienda-icons in-view" : "tienda-icons"}
    >
      {/* <div className="icons-background-one"></div>
      <div className="icons-background-two"></div> */}
      <div className="tienda-icon">
        <Image src={tiendaIcon1} alt="Icon" />
        <span>{language === "ES" ? "Natural" : "Natural"}</span>
      </div>
      <div className="tienda-icon">
        <Image src={tiendaIcon2} alt="Icon" />
        <span>{language === "ES" ? "Cruelty Free" : "Cruelty-Free"}</span>
      </div>
      <div className="tienda-icon">
        <Image src={tiendaIcon3} alt="Icon" />
        <span>{language === "ES" ? "Hecho a mano" : "Handmade"}</span>
      </div>
      <div className="tienda-icon">
        <Image src={tiendaIcon4} alt="Icon" />
        <span>{language === "ES" ? "Libre de parabenos" : "Paraben-Free"}</span>
      </div>
    </div>
  );
};

export default TiendaIcons;
