"use client";

import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import product2 from "../assets/webpImages/product2.webp";
import product1 from "../assets/webpImages/product1.webp";
import { useLanguageContext } from "../context/Context";
import Image from "next/image";

export const HeaderCopy = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <>
      {language === "ES" ? (
        <h1 className="main-header">
          Productos de CBD, para paz y tranquilidad.
        </h1>
      ) : (
        <h1 className="main-header">
          CBD products, for peace and tranquillity.
        </h1>
      )}
    </>
  );
};

export const TiendaCopy = () => {
  const { ref: tiendaProduct, inView: productInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: tiendaCopy, inView: copyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="tienda-copy-wrapper">
      <div className="tienda-copy-container first-copy">
        <div
          ref={tiendaCopy}
          className={
            copyInView ? "product-copy-wrapper in-view" : "product-copy-wrapper"
          }
        >
          <div className="copy-background-one"></div>
          <div className="copy-background-two"></div>
          {language === "ES" ? (
            <div className="tienda-copy">
              <h2>Nuestros productos son 100% naturales y 100% colombianos</h2>
              <p>
                Green Roots ofrece productos totalmente naturales, hechos a mano
                y creados a base de CBD(sin químicos). Al comprar nuestros
                productos estás ayudando a reducir tu propia huella de CO2 ya
                que somos una empresa que únicamente trabaja con insumos KM0.
              </p>
            </div>
          ) : (
            <div className="tienda-copy">
              <h2>100% colombian, 100% natural</h2>
              <p>
                Green Roots offers natural, handmade CBD produts fabricated
                without the use of chemicals. when you buy one of our products
                you are helping reduce your own CO2 footrpint, we are a
                completely KM0 company.
              </p>
            </div>
          )}
        </div>
        <div
          ref={tiendaProduct}
          className={
            productInView ? "tienda-product in-view" : "tienda-product"
          }
        >
          <Image src={product1} alt="Green Roots product" />
        </div>
      </div>
    </div>
  );
};

export const TiendaCopy2 = () => {
  const { ref: tiendaProduct, inView: productInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: tiendaCopy, inView: copyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="tienda-copy-wrapper">
      <div className="tienda-copy-container second-copy">
        <div
          ref={tiendaProduct}
          className={
            productInView ? "tienda-product in-view" : "tienda-product"
          }
        >
          <Image src={product2} alt="Green Roots product" />
        </div>
        <div
          ref={tiendaCopy}
          className={
            copyInView ? "product-copy-wrapper in-view" : "product-copy-wrapper"
          }
        >
          <div className="copy-background-one"></div>
          <div className="copy-background-two"></div>
          {language === "ES" ? (
            <div className="tienda-copy">
              <h2>El CBD ama tu piel {"<"}3</h2>
              <p>
                ¿Sabías que tu cuerpo tiene un sistema de receptores de CBD
                llamado sistema endocannabinoide? <br />
                Muchos de estos receptores se encuentran en la piel, recientes
                investigaciones han comprobado que el uso de aceite de CBD puede
                ayudar a mejorar condiciones dermatológicas como el acné,
                recequedad, picazón e incluso mejorar el proceso de
                envejecimiento de la piel debido a sus propiedades
                anti-inflamatorias y su alto conteido en antioxidantes.
              </p>
            </div>
          ) : (
            <div className="tienda-copy">
              <h2>CBD loves your skin {"<"}3</h2>
              <p>
                Did you know that your body interacts with CBD trough the
                endocannabinoid receptor system?
                <br />
                Many of these recetors can be found in the skin, recent studies
                have found that CBD oil can help improve conditions like acne,
                dryness, itching and it can also help with the aging process due
                to its antioxidant and anti-inflammatory properties.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
