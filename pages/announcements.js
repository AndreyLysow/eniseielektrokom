// pages/announcements.jsx
import React from "react";
import CustomHead from "../components/customHead";
import Announcements from "../components/announcements/announcement1";
import Header from "../components/header";
import Footer from "../components/footer";

const AnnouncementsPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="График отключения ГВС — Енисейтеплоком"
      description="График приостановления горячего водоснабжения в межотопительный период 2025 года от ООО «Енисейтеплоком»"
      keywords="Енисейтеплоком, график отключения, горячее водоснабжение, Енисейск, Абалаково, Верхнепашино, Шапкино, ГВС"
      /* ――― Open Graph ――― */
      ogTitle="График отключения ГВС — Енисейтеплоком"
      ogDescription="График приостановления горячего водоснабжения по адресам в Енисейском районе в 2025 году"
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/announcements"
    />

    <Header />
    <Announcements />
    <Footer />
  </>
);

export default AnnouncementsPage;