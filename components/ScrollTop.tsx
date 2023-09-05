"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCursorContext } from "../context/Context";

function ScrollTop() {
  const pathname = usePathname();
  const { hoverLink, setHoverLink } = useCursorContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setHoverLink(false);
  }, [pathname, setHoverLink]);

  return null;
}

export default ScrollTop;
