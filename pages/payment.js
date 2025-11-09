import React from "react";
import CustomHead from "../components/customHead";
import Payment from "../components/Consumers/payment";
import Header from "../components/header";
import Footer from "../components/footer";

const PaymentPage = () => (
  <>
    <CustomHead
      title="Передача показаний и оплата услуг — Енисейэлектроком"
      description="Информация о передаче показаний и способах оплаты для абонентов ООО «Енисейэлектроком»: телефоны, онлайн-сервисы, пункты приема платежей"
      keywords="Енисейэлектроком, передача показаний, оплата, ЖКХ, Енисейск"
      ogTitle="Передача показаний и оплата услуг — Енисейэлектроком"
      ogDescription="Все способы передачи показаний и оплаты коммунальных услуг от ООО «Енисейэлектроком»"
      ogImage="/logoetk.png"
      ogUrl="https://eniseielektrokom.ru/payment"
    />

    <Header />
    <Payment />
    <Footer />
  </>
);

export default PaymentPage;