"use client";

import { InfoEn, InfoEs } from "./ContactoInfo";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { useLanguageContext } from "../context/Context";

const Contacto = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div style={{ backgroundColor: "white" }} className="main-wrapper">
      <section className="section-container">
        <div className="contacto-wrapper">
          <ContactForm />
          <div className="contacto-info-container">
            {language === "ES" ? <InfoEs /> : <InfoEn />}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacto;
