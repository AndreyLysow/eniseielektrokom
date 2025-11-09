import React from "react";
import CustomHead from "../components/customHead";
import AboutContent from "../components/AboutContent";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="О компании — Енисейэлектроком"
      description="Официальная информация об ООО «Енисейская электроснабжающая компания»: реквизиты, адреса, виды деятельности и контактные данные."
      keywords="Енисейэлектроком, электроснабжение, Енисейск, о компании, паспорт предприятия"
      /* ――― Open Graph ――― */
      ogTitle="О компании — Енисейэлектроком"
      ogDescription="Паспорт предприятия ООО «Енисейская электроснабжающая компания» — полная справочная информация, контакты, реквизиты."
      ogImage="/logoetk.png"
      ogUrl="https://eniseielektrokom.ru/about"
    />

    <Header />
    <AboutContent />
    <Footer />
  </>
);

export default AboutPage;
