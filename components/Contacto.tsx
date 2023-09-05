"use client";

import { InfoEn, InfoEs } from "./ContactoInfo";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { useLanguageContext } from "../context/Context";

const Contacto = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div style={{ backgroundColor: "white" }} className="main-wrapper">
      {/* <section className="picture-container">
        <div className="contacto-picture">
          <div className="main-header-wrapper">
            {language === "ES" ? (
              <h1 className="main-header">Contacto</h1>
            ) : (
              <h1 className="main-header">Contact</h1>
            )}
          </div>
          <div className="picture-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="white"
                fillOpacity="1"
                d="M0,160L120,154.7C240,149,480,139,720,138.7C960,139,1200,149,1320,154.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section> */}
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
