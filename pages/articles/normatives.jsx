import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Normatives from "../../components/articles/Normatives";

export default function NormativesPage() {
  return (
    <>
      <CustomHead
        title="Нормативы потребления коммунальной услуги по отоплению — Енисейэлектроком"
        description="Нормативы отопления в жилых и нежилых помещениях на территории города Енисейска. Данные по категориям домов."
        keywords="нормативы отопления, коммунальная услуга, Енисейэлектроком, город Енисейск"
        ogTitle="Нормативы потребления отопления"
        ogDescription="Нормативы отопления на отопительный период по категориям зданий (Енисейск)"
        ogImage="/logoetk.png"
        ogUrl="https://eniseielektrokom.ru/articles/normatives"
      />
      <Header />
      <Normatives />
      <Footer />
    </>
  );
}