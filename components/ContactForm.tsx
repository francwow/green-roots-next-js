"use client";

import { useLanguageContext } from "../context/Context";
import ContactFormES from "./ContactFormES";
import ContactFormEN from "./ContactFormEN";

const ContactForm = () => {
  const { language } = useLanguageContext();

  return language === "ES" ? <ContactFormES /> : <ContactFormEN />;
};

export default ContactForm;
