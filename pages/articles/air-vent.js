import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AirVent from "../../components/articles/AirVent";

export default function AirVentPage() {
  return (
    <>
      <CustomHead
        title="Завоздушивание систем отопления и разграничение ответственности — Енисейтеплоком"
        description="Проблемы завоздушивания систем отопления, воздухоотводные устройства, нормативные требования и разграничение ответственности между РСО, УО и жильцами в МКД."
        keywords="завоздушивание, воздухоотводные устройства, системы отопления, разграничение ответственности, РСО, УО, Енисейтеплоком, воздушные пробки"
        ogTitle="Завоздушивание систем отопления и разграничение ответственности"
        ogDescription="Решение проблем завоздушивания систем отопления и четкое разграничение ответственности между участниками процесса"
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/articles/air-vent"
      />
      <Header />
      <AirVent />
      <Footer />
    </>
  );
}
