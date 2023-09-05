"use client";

import Image from "next/image";
import whatsappLogo from "../assets/webpImages/whatsapp_logo.webp";
import Link from "next/link";
import { useCursorContext, useMenuContext } from "../context/Context";

const Whatsapp = () => {
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
        href={"https://web.whatsapp.com/"}
      >
        <Image src={whatsappLogo} alt="Whatsapp logo" />
      </Link>
    </aside>
  );
};

export default Whatsapp;
