"use client";

import { useInView } from "react-intersection-observer";
import { useLanguageContext } from "../context/Context";

export const DescOne = () => {
  const { language, setLanguage } = useLanguageContext();
  const { ref: descInfo, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={descInfo}
      className={infoInView ? "desc-info in-view" : "desc-info"}
    >
      {language === "ES" ? (
        <>
          <h2 className="desc-heading">¿Qué es el CBD?</h2>
          <p>
            El CBD, científicamente conocido como Cannabidiol, es un compuesto
            natural que se encuentra en altas concentraciones en el cáñamo. El
            CBD es también el cannabinoide mejor investigado hasta la fecha y la
            lista de sus aplicaciones se amplía constantemente.
            <br />
            <br />
            El CBD interactúa con los receptores cannabinoides de nuestro
            sistema endocannabinoide (ECS), uno de los sistemas de receptores
            más grandes del cuerpo, y puede brindar beneficios de salud únicos a
            nivel físico, psicológico, emocional y espiritual.
            <br />
            <br />
            Recientemente se ha descubierto que el CBD y los cannabinoides
            menores como el CBG y el CBN superan a otros compuestos químicos en
            efectividad sin los efectos secundarios causados por el THC.
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">¿What is CBD?</h2>
          <p>
            CBD, scientifically known as Cannabidiol, is a naturally-occurring
            compound that is found in high concentrations in hemp. CBD is also
            the best-researched cannabinoid to date, and the list of its
            applications is constantly expanding.
            <br />
            <br />
            CBD interacts with the cannabinoid receptors in our Endocannabinoid
            System (ECS), one of the largest receptor systems in the body, and
            can deliver unique health benefits to our bodies.
            <br />
            <br />
            Recent studies have found that CBD and minor cannabinoids like CBG
            and CBN are outperforming other compounds without the side effects
            caused by THC.
          </p>
        </>
      )}
    </div>
  );
};

export const DescTwo = () => {
  const { language, setLanguage } = useLanguageContext();
  const { ref: descInfo, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={descInfo}
      className={infoInView ? "desc-info in-view" : "desc-info"}
    >
      {language === "ES" ? (
        <>
          <h2 className="desc-heading">¿Por qué elegir Green Roots?</h2>
          <p>
            Nosotros retomamos las técnicas tradicionales de elaboración de
            productos de belleza y cuidado personal a mano. Únicamente
            utilizamos ingredientes naturales, sin testeo en animales,
            fabricamos con conciencia, ética y filosofía.
            <br />
            <br />
            Nuestros productos son elaborados con ingredientes de origen
            natural, de la más alta calidad, puros y sin refinar. Los
            ingredientes que usamos se encuentran en la lista de materias primas
            aprobadas por ECOCERT (organismo internacional que certifica a los
            productos como cosmética natural ecológica).
            <br />
            <br />
            No utilizamos productos de origen animal, no testamos en animales y
            sólo compramos ingredientes de proveedores que siguen los mismos
            parámetros. Nuestras fórmulas contienen aceites vegetales de primera
            presión en frio de oliva, ricino, coco, almendras dulces, aguacate,
            argán, rosa mosqueta, jojoba, manteca de cacao y manteca de karité,
            entre otros aceites vegetales que aportan una serie de propiedades a
            la piel, cabello y uñas.
            <br />
            <br />
            También somos una marca que genera un impacto positivo en la
            sociedad, nuestros productos tienen una huella de CO2 muy baja,
            procuramos trabajar con proveedores que generen empleo a comunidades
            menos favorecidas y/o que sean de KM0.
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">Why choose Green Roots?</h2>
          <p>
            We apply traditional techniques of manufacturing. Our products are
            made with raw unrefined natural ingredients, of the highest quality.
            The Ingredients we use are in the list of raw materials approved by
            ECOCERT (international organization that certifies organic natural
            products).
            <br />
            <br />
            We do not use products of animal origin, we do not test on animals
            and We only buy ingredients from suppliers that follow the same
            guidelines. Our formulas contain premium vegetable cold pressed
            olive oils, castor, coconut, sweet almonds, avocado, argan, rosehip,
            jojoba, cocoa butter and shea butter, among other vegetable oils
            that provide a series of properties to the skin, hair and nails.
            <br />
            <br />
            Our brand is committed to bringing low CO2 products to the market,
            our suppliers are KM0 and give jobs to people in vulnerable
            communities.
          </p>
        </>
      )}
    </div>
  );
};
