import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import GosuslugiDom from "../../components/articles/GosuslugiDom";

export default function GosuslugiDomPage() {
  return (
    <>
      <CustomHead
        title="Госуслуги Дом — решайте вопросы ЖКХ онлайн"
        description="Удобное приложение для собственников и арендаторов: передача показаний, оплата ЖКУ, заявки, отчёты, голосование на собраниях и гостевой доступ."
        keywords="Госуслуги Дом, ЖКХ приложение, оплата ЖКУ, передача показаний, капремонт, заявки, ОСС"
        ogTitle="Госуслуги Дом"
        ogDescription="Решайте все вопросы ЖКХ в одном приложении — скачайте Госуслуги Дом."
        ogImage="/media/gosuslugi_dom.jpg"
        ogUrl="https://eniseiteplokom.ru/articles/gosuslugi-dom"
      />
      <Header />
      <GosuslugiDom />
      <Footer />
    </>
  );
}