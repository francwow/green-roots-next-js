"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useInView } from "react-intersection-observer";
import { tiendaItems } from "../data/tiendaItems";
import Image from "next/image";
import { useCursorContext, useLanguageContext } from "../context/Context";

const Carousel = () => {
  const { ref: carousel, inView: carouselInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const deskTop = useMediaQuery("(min-width: 961px)");
  const { language, setLanguage } = useLanguageContext();
  const { hoverLink, setHoverLink } = useCursorContext();

  const initialState = 0;
  const [index, setIndex] = useState<number>(initialState);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const startCarousel = setInterval(function () {
      increaseIndex();
    }, 5000);
    return () => clearInterval(startCarousel);
  });

  const increaseIndex = () => {
    // console.log(index); //
    if (index < tiendaItems.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(initialState);
    }
  };

  return (
    <div
      ref={carousel}
      className={carouselInView ? "carousel in-view" : "carousel"}
    >
      <div className="carousel-heading">
        {language === "ES" ? (
          <h2>Nuestros Productos</h2>
        ) : (
          <h2>Our Products</h2>
        )}
      </div>
      <div className="carousel-item-container">
        {tiendaItems.map((item) => {
          return (
            <div
              key={item.index}
              aria-label="0"
              className={`carousel-item ${
                index === item.index ? "show-item" : ""
              }`}
            >
              <div className="item-info">
                <h2
                  className={`${
                    hovered && deskTop
                      ? "button-hovered item-header"
                      : "item-header"
                  } ${index === item.index ? "fade-in-right" : ""}`}
                >
                  {language === "ES" ? item.nameES : item.nameEN}
                </h2>

                <button
                  onMouseEnter={() => {
                    setHovered(true);
                    setHoverLink(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(false);
                    setHoverLink(false);
                  }}
                  className={index === item.index ? "button" : ""}
                >
                  {language === "ES" ? "COMPRAR" : "BUY"}
                </button>
              </div>
              <div className="img-container">
                <Image src={item.img} alt="GreenRoots product" />
              </div>
            </div>
          );
        })}
        <div className="carousel-dots">
          {tiendaItems.map((item) => {
            return (
              <button
                onMouseEnter={() => {
                  setHoverLink(true);
                }}
                onMouseLeave={() => {
                  setHoverLink(false);
                }}
                onClick={() => {
                  setIndex(item.index);
                }}
                key={item.index}
                className={
                  item.index === index ? "carousel-dot clicked" : "carousel-dot"
                }
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
