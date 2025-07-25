import React from "react";
import CustomHead from "../components/customHead";
import Payment from "../components/Consumers/payment";
import Header from "../components/header";
import Footer from "../components/footer";

const PaymentPage = () => (
  <>
    <CustomHead
      title="Передача показаний и оплата услуг — Енисейтеплоком"
      description="Информация о передаче показаний и способах оплаты для абонентов ООО «Енисейтеплоком»: телефоны, онлайн-сервисы, пункты приема платежей"
      keywords="Енисейтеплоком, передача показаний, оплата, ЖКХ, Енисейск"
      ogTitle="Передача показаний и оплата услуг — Енисейтеплоком"
      ogDescription="Все способы передачи показаний и оплаты коммунальных услуг от ООО «Енисейтеплоком»"
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/payment"
    />

    <Header />
    <Payment />
    <Footer />
  </>
);

export default PaymentPage;