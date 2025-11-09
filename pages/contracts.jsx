// pages/contracts.jsx
import React from "react";
import CustomHead from "../components/customHead";
import Header from "../components/header";
import Footer from "../components/footer";
import TypicalContracts from "../components/TypicalContracts";

export default function ContractsPage() {
  return (
    <>
      <CustomHead
        title="Типовые договоры — Енисейэлектроком"
        description="Типовые договоры на услуги электроснабжения ООО «Енисейэлектроком». Доступны для просмотра и скачивания."
        keywords="Енисейэлектроком, типовые договоры, электроснабжение, электроэнергия, Енисейск"
        ogTitle="Типовые договоры — ООО «Енисейэлектроком»"
        ogDescription="Скачайте или просмотрите типовые договоры на электроснабжение от ООО «Енисейэлектроком»."
        ogImage="/logoetk.png"
        ogUrl="https://eniseielektrokom.ru/contracts"
      />
      <Header />
      <main>
        <TypicalContracts />
      </main>
      <Footer />
    </>
  );
}