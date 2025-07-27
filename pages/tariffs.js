// pages/tariffs.jsx
import React from "react";
import CustomHead from "../components/customHead";
import TariffsInfo from "../components/TariffsPage"; // Новый компонент для тарифов
import Header from "../components/header";
import Footer from "../components/footer";

const TariffsPage = () => (
  <>
    <CustomHead
      title="Информация по тарифам — Енисейтеплоком"
      description="Тарифы на тепловую энергию, горячее водоснабжение и теплоноситель для г. Енисейск и Енисейского района. Приказы МТП Красноярского края."
      keywords="тарифы, теплоснабжение, ГВС, Енисейск, Енисейтеплоком"
      ogTitle="Тарифы и нормативные документы — Енисейтеплоком"
      ogDescription="Официальные тарифы на тепло, ГВС и техприсоединение. Приказы МТП Красноярского края."
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/tariffs"
    />

    <Header />
    <main>
      <TariffsInfo />
    </main>
    <Footer />
  </>
);

export default TariffsPage;