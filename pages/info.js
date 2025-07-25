// pages/info.jsx
import React from "react";
import CustomHead from "../components/customHead";
import InfoDisclosure from "../components/info"; // Переименуем компонент для читаемости
import Header from "../components/header";
import Footer from "../components/footer";

const InfoPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="Раскрытие информации — Енисейтеплоком"
      description="Финансовая отчетность, бухгалтерский баланс и пояснительные записки ООО «Енисейтеплоком». Данные за 2023–2024 годы."
      keywords="Енисейтеплоком, раскрытие информации, бухгалтерский баланс, отчетность, Енисейск"
      /* ――― Open Graph ――― */
      ogTitle="Раскрытие информации — ООО «Енисейтеплоком»"
      ogDescription="Официальная информация: бухгалтерский баланс, пояснения, финансовая отчетность за 2023–2024 годы."
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/info"
    />

    <Header />
    <main>
      <InfoDisclosure />
    </main>
    <Footer />
  </>
);

export default InfoPage;