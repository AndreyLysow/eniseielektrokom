// pages/announcements.jsx
import React from "react";
import CustomHead from "../components/customHead";
import Announcements from "../components/announcements/announcement_mine";
import Header from "../components/header";
import Footer from "../components/footer";

const AnnouncementsPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="Объявления для абонентов — Енисейэлектроком"
      description="Актуальные объявления и информация для потребителей услуг ООО «Енисейэлектроком»: графики отключений, профилактика, ремонт, платежи"
      keywords="Енисейэлектроком, объявления, информация, Енисейск, Абалаково, Верхнепашино, Шапкино, ГВС, отопление"
      /* ――― Open Graph ――― */
      ogTitle="Объявления для абонентов — Енисейэлектроком"
      ogDescription="Все важные объявления для потребителей от ООО «Енисейэлектроком»: отключения, работы, рекомендации"
      ogImage="/logoetk.png"
      ogUrl="https://eniseielektrokom.ru/announcements"
    />

    <Header />
    <Announcements />
    <Footer />
  </>
);

export default AnnouncementsPage;