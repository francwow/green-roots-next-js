"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useCursorContext } from "../context/Context";

export const InfoEs = () => {
  const { setHoverLink } = useCursorContext();
  const { ref: contact, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={contact}
      className={
        contactInView ? "contacto-container in-view" : "contacto-container"
      }
    >
      <div className="contacto-heading">
        <h2>
          También nos puedes escribir por whatsapp:
          <br />
          <br />
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            href={"https://wa.me/573132335432?text=Hola%20Green%20Roots"}
          >
            <span className="info-number">-{">"} +57 3132335432</span>
          </Link>
        </h2>
      </div>
      {/* <ul className="contacto-social">
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blanket"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Instagram
          </Link>
        </li>
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Facebook
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export const InfoEn = () => {
  const { setHoverLink } = useCursorContext();
  const { ref: contact, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={contact}
      className={
        contactInView ? "contacto-container in-view" : "contacto-container"
      }
    >
      <div className="contacto-heading">
        <h2>
          You can also message us in whatsapp:
          <br />
          <br />
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            href={"https://wa.me/573132335432?text=Hello%20Green%20Roots"}
          >
            <span className="info-number">-{">"} +57 3132335432</span>
          </Link>
        </h2>
      </div>
      {/* <ul className="contacto-social">
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Instagram
          </Link>
        </li>
        <li className="info-item">
          <Link
            onMouseEnter={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
            target="_blank"
            to={"https://www.instagram.com/greenrootscolombia/"}
          >
            Facebook
          </Link>
        </li>
      </ul> */}
    </div>
  );
};
