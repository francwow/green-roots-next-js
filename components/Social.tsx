"use client";

import Link from "next/link";
import { FacebookIcon } from "./Icons";
import { InstagramIcon } from "./Icons";
import { useCursorContext } from "../context/Context";

const Social = () => {
  const { hoverLink, setHoverLink } = useCursorContext();

  return (
    <div className="social-container">
      <div style={{ animationDelay: "0.5s" }} className="icon-container">
        <Link
          onMouseEnter={() => {
            setHoverLink(true);
          }}
          onMouseLeave={() => {
            setHoverLink(false);
          }}
          onClick={() => {
            setHoverLink(false);
          }}
          target="_blank"
          href={"https://www.instagram.com/greenrootscolombia/"}
        >
          <FacebookIcon />
        </Link>
      </div>
      <div style={{ animationDelay: "0.7s" }} className="icon-container">
        <Link
          onMouseEnter={() => {
            setHoverLink(true);
          }}
          onMouseLeave={() => {
            setHoverLink(false);
          }}
          onClick={() => {
            setHoverLink(false);
          }}
          target="_blank"
          href={"https://www.instagram.com/greenrootscolombia/"}
        >
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
};

export default Social;
