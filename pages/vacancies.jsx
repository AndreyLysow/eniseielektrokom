// pages/vacancies.jsx
import CustomHead from "../components/customHead";
import VacanciesPage from "../components/vacancies/VacanciesPage";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Vacancies() {
  const title = "Вакансии — Енисейтеплоком";
  const description =
    "Присоединяйтесь к команде ООО «Енисейтеплоком»: инженер-аналитик, руководитель проекта, стажёр. Рост, интересные задачи и проекты в теплоснабжении.";
  const keywords =
    "Енисейтеплоком, вакансии, работа, инженер, теплоснабжение, Енисейск, ОЗП";
  const ogTitle = "Вакансии — ООО «Енисейтеплоком»";
  const ogDescription =
    "Открытые позиции и карьера в «Енисейтеплоком». Реальные проекты, рост и влияние.";
  const ogImage = "/logoetk.png";
  const ogUrl = "https://eniseiteplokom.ru/vacancies";

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
        <VacanciesPage companyName="Енисейтеплоком" hrEmail="tek124@mail.ru" />
      </main>
      <Footer />
    </>
  );
}