// pages/announcements.jsx
import React from "react";
import CustomHead from "../components/customHead";
import Announcements from "../components/announcements/announcements";
import Header from "../components/header";
import Footer from "../components/footer";

const AnnouncementsPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="Объявления для абонентов — Енисейтеплоком"
      description="Актуальные объявления и информация для потребителей услуг ООО «Енисейтеплоком»: графики отключений, профилактика, ремонт, платежи"
      keywords="Енисейтеплоком, объявления, информация, Енисейск, Абалаково, Верхнепашино, Шапкино, ГВС, отопление"
      /* ――― Open Graph ――― */
      ogTitle="Объявления для абонентов — Енисейтеплоком"
      ogDescription="Все важные объявления для потребителей от ООО «Енисейтеплоком»: отключения, работы, рекомендации"
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/announcements"
    />

    <Header />
    <Announcements />
    <Footer />
  </>
);

export default AnnouncementsPage;