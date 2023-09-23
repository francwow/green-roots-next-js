"use client";

import Image from "next/image";
import whatsappLogo from "../assets/webpImages/whatsapp_logo.webp";
import Link from "next/link";
import {
  useCursorContext,
  useLanguageContext,
  useMenuContext,
} from "../context/Context";

const Whatsapp = () => {
  const { language } = useLanguageContext();
  const { menuActive, setMenuActive } = useMenuContext();
  const { hoverLink, setHoverLink } = useCursorContext();

  return menuActive ? null : (
    <aside className="whatsapp">
      <Link
        onMouseEnter={() => {
          setHoverLink(true);
        }}
        onMouseLeave={() => {
          setHoverLink(false);
        }}
        target="_blank"
        href={
          language === "ES"
            ? "https://wa.me/573132335432?text=Hola%20Green%20Roots"
            : "https://wa.me/573132335432?text=Hello%20Green%20Roots"
        }
      >
        <Image src={whatsappLogo} alt="Whatsapp logo" />
      </Link>
    </aside>
  );
};

export default Whatsapp;
