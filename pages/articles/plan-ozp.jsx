import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PlanOZP from "../../components/articles/PlanOZP";

export default function PlanOZPPage() {
  return (
    <>
      <CustomHead
        title="План подготовки к ОЗП 2025–2026 гг. — Енисейэлектроком"
        description="Информация о плане подготовки к отопительному сезону 2025–2026 годов, требования для УК, ТСЖ и потребителей."
        keywords="план подготовки к отопительному сезону, Енисейэлектроком, ОЗП 2025"
        ogTitle="План подготовки к отопительному сезону"
        ogDescription="Требования к подготовке к ОЗП 2025–2026 гг. по приказу №2234"
        ogImage="/logoetk.png"
        ogUrl="https://eniseielektrokom.ru/articles/plan-ozp"
      />
      <Header />
      <PlanOZP />
      <Footer />
    </>
  );
}