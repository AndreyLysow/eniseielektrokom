import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AirVent from "../../components/articles/AirVent";

export default function AirVentPage() {
  return (
    <>
      <CustomHead
        title="Завоздушивание систем отопления и воздухоотводные устройства — Енисейтеплоком"
        description="Проблемы завоздушивания систем отопления, воздухоотводные устройства, нормативные требования и разделение ответственности между РСО, УО и жильцами."
        keywords="завоздушивание, воздухоотводные устройства, системы отопления, Енисейтеплоком, воздушные пробки"
        ogTitle="Завоздушивание систем отопления"
        ogDescription="Решение проблем завоздушивания систем отопления с помощью воздухоотводных устройств"
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/articles/air-vent"
      />
      <Header />
      <AirVent />
      <Footer />
    </>
  );
}
