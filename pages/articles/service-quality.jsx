import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ServiceQuality from "../../components/articles/ServiceQuality";

export default function ServiceQualityPage() {
  return (
    <>
      <CustomHead
        title="Требования к качеству коммунальных услуг — Енисейэлектроком"
        description="Допустимые отклонения качества коммунальных услуг, продолжительность перерывов, порядок перерасчета платы по ПП РФ №354."
        keywords="качество коммунальных услуг, отопление, горячее водоснабжение, Енисейэлектроком"
        ogTitle="Требования к качеству коммунальных услуг"
        ogDescription="Правила предоставления коммунальных услуг: отопление и ГВС, нормативы качества"
        ogImage="/logoetk.png"
        ogUrl="https://eniseielektrokom.ru/articles/service-quality"
      />
      <Header />
      <ServiceQuality />
      <Footer />
    </>
  );
}