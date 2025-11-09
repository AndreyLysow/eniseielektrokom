// pages/vacancies.jsx
import CustomHead from "../components/customHead";
import VacanciesPage from "../components/vacancies/VacanciesPage";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Vacancies() {
  const title = "Вакансии — Енисейэлектроком";
  const description =
    "Присоединяйтесь к команде ООО «Енисейэлектроком»: инженер-аналитик, руководитель проекта, стажёр. Рост, интересные задачи и проекты в электроснабжении.";
  const keywords =
    "Енисейэлектроком, вакансии, работа, инженер, электроснабжение, Енисейск";
  const ogTitle = "Вакансии — ООО «Енисейэлектроком»";
  const ogDescription =
    "Открытые позиции и карьера в «Енисейэлектроком». Реальные проекты, рост и влияние.";
  const ogImage = "/logoetk.png";
  const ogUrl = "https://eniseielektrokom.ru/vacancies";

  return (
    <>
      <CustomHead
        title={title}
        description={description}
        keywords={keywords}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl={ogUrl}
      />

      <Header />
      <main>
        {/* можно передать email HR, если отличается */}
        <VacanciesPage companyName="Енисейэлектроком" hrEmail="tek124@mail.ru" />
      </main>
      <Footer />
    </>
  );
}