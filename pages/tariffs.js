// pages/tariffs.jsx
import React from "react";
import CustomHead from "../components/customHead";
import TariffsInfo from "../components/TariffsPage"; // Новый компонент для тарифов
import Header from "../components/header";
import Footer from "../components/footer";

const TariffsPage = () => (
  <>
    <CustomHead
      title="Информация по тарифам — Енисейэлектроком"
      description="Тарифы на электроэнергию для г. Енисейск и Енисейского района. Приказы МТП Красноярского края."
      keywords="тарифы, электроснабжение, электроэнергия, Енисейск, Енисейэлектроком"
      ogTitle="Тарифы и нормативные документы — Енисейэлектроком"
      ogDescription="Официальные тарифы на электроэнергию и техприсоединение. Приказы МТП Красноярского края."
      ogImage="/logoetk.png"
      ogUrl="https://eniseielektrokom.ru/tariffs"
    />

    <Header />
    <main>
      <TariffsInfo />
    </main>
    <Footer />
  </>
);

export default TariffsPage;