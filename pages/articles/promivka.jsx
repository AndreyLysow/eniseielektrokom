import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Promyvka from "../../components/articles/Promyvka";

export default function PromyvkaPage() {
  return (
    <>
      <CustomHead
        title="Промывка систем теплоснабжения — Енисейэлектроком"
        description="Полная инструкция по промывке систем теплоснабжения: методы, этапы, таблицы и нормативные требования."
        keywords="промывка отопления, гидропневматическая промывка, Енисейэлектроком"
        ogTitle="Промывка систем теплоснабжения"
        ogDescription="Методы промывки: гидропневматическая, химическая, биологическая. Требования и таблицы."
        ogImage="/logoetk.png"
        ogUrl="https://eniseielektrokom.ru/articles/promivka"
      />
      <Header />
      <Promyvka />
      <Footer />
    </>
  );
}