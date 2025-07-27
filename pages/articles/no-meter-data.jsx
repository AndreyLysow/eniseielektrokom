import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import NoMeterData from "../../components/articles/NoMeterData";

export default function NoMeterDataPage() {
  return (
    <>
      <CustomHead
        title="Последствия непредоставления показаний и изменения числа проживающих — Енисейтеплоком"
        description="Информация о порядке расчета платы при непредоставлении показаний приборов учета и изменении числа проживающих."
        keywords="показания приборов учета, норматив, изменение числа проживающих, Енисейтеплоком"
        ogTitle="Последствия непредоставления показаний"
        ogDescription="Правила расчета платы и обязанности потребителя по уведомлению."
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/articles/no-meter-data"
      />
      <Header />
      <NoMeterData />
      <Footer />
    </>
  );
}