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
        title="Типовые договоры — Енисейтеплоком"
        description="Типовые договоры на услуги отопления и ГВС ООО «Енисейтеплоком». Доступны для просмотра и скачивания."
        keywords="Енисейтеплоком, типовые договоры, отопление, горячее водоснабжение, Енисейск"
        ogTitle="Типовые договоры — ООО «Енисейтеплоком»"
        ogDescription="Скачайте или просмотрите типовые договоры на отопление и ГВС от ООО «Енисейтеплоком»."
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/contracts"
      />
      <Header />
      <main>
        <TypicalContracts />
      </main>
      <Footer />
    </>
  );
}