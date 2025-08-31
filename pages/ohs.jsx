import CustomHead from "../components/customHead";
import OhsPage from "../components/ohs/OhsPage";
import HeaderWhite from "../components/header";
import Footer from "../components/footer";

export default function Ohs() {
  return (
    <>
      <CustomHead
        title="Охрана труда — Енисейтеплоком"
        description="Политика безопасности труда, контроль рисков, обучение, СИЗ и подготовка к отопительному сезону."
        keywords="охрана труда, ТБ, СИЗ, безопасность, Енисейтеплоком"
        ogTitle="Охрана труда — ООО «Енисейтеплоком»"
        ogDescription="Как мы обеспечиваем безопасность и здоровье сотрудников на объектах."
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/ohs"
      />

      {/* Хедер */}
      <HeaderWhite />

      {/* Контент страницы */}
      <OhsPage />

      {/* Футер */}
      <Footer />
    </>
  );
}