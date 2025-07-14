import React from "react";
import CustomHead from "../components/customHead";
import AboutContent from "../components/AboutContent";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="О компании — Енисейтеплоком"
      description="Официальная информация об ООО «Енисейская теплоснабжающая компания»: реквизиты, адреса, виды деятельности и контактные данные."
      keywords="Енисейтеплоком, теплоснабжение, Енисейск, о компании, паспорт предприятия"
      /* ――― Open Graph ――― */
      ogTitle="О компании — Енисейтеплоком"
      ogDescription="Паспорт предприятия ООО «Енисейская теплоснабжающая компания» — полная справочная информация, контакты, реквизиты."
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/about"
    />

    <Header />
    <AboutContent />
    <Footer />
  </>
);

export default AboutPage;
