// pages/announcements.jsx
import React from "react";
import CustomHead from "../components/customHead";
import Announcements from "../components/announcements/DispatchCenter";
import Header from "../components/header";
import Footer from "../components/footer";

const AnnouncementsPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="График отключения электроэнергии — Енисейэлектроком"
      description="График приостановления электроснабжения в плановый период 2025 года от ООО «Енисейэлектроком»"
      keywords="Енисейэлектроком, график отключения, электроснабжение, Енисейск, Абалаково, Верхнепашино, Шапкино"
      /* ――― Open Graph ――― */
      ogTitle="График отключения электроэнергии — Енисейэлектроком"
      ogDescription="График приостановления электроснабжения по адресам в Енисейском районе в 2025 году"
      ogImage="/logoetk.png"
      ogUrl="https://eniseielektrokom.ru/announcements"
    />

    <Header />
    <Announcements />
    <Footer />
  </>
);

export default AnnouncementsPage;