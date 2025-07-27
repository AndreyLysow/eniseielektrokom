import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TechConnection from "../../components/articles/TechConnection";

export default function TechConnectionPage() {
  return (
    <>
      <CustomHead
        title="Технологическое присоединение — Енисейтеплоком"
        description="Правила подключения (технологического присоединения) к системам теплоснабжения по Постановлению №2115, включая порядок, сроки и права заявителей."
        keywords="технологическое присоединение, подключение теплоснабжение, правила 2115, Енисейтеплоком"
        ogTitle="Технологическое присоединение"
        ogDescription="Подключение к системам теплоснабжения: порядок, сроки, документы по Постановлению №2115"
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/articles/tech-connection"
      />
      <Header />
      <TechConnection />
      <Footer />
    </>
  );
}