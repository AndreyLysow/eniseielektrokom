"use client";

import { marked } from "marked";
import { getAllNews, getNewsById } from "../../utils/news";

import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import AnimatedBackground from "../../components/AnimatedBackground";

import styles from "../../styles/newsDetail.module.css";

// ✅ Генерация всех путей для статических страниц
export async function getStaticPaths() {
  const news = getAllNews();
  const paths = news.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: false,
  };
}

// ✅ Получение данных конкретной новости по ID
export async function getStaticProps({ params }) {
  const newsItem = getNewsById(params.id);
  return {
    props: {
      newsItem,
    },
  };
}

// ✅ Компонент детальной страницы новости
export default function NewsDetail({ newsItem }) {
  if (!newsItem) return <p>Новость не найдена</p>;

  return (
    <>
      {/* SEO + OpenGraph */}
      <CustomHead
        title={`${newsItem.title} — Енисейтеплоком`}
        description={`Читайте подробности: ${newsItem.title}`}
        keywords="Енисейтеплоком, новости, ЖКХ, Енисейск"
        ogTitle={`${newsItem.title} — Енисейтеплоком`}
        ogDescription="Актуальные новости для абонентов ООО «Енисейтеплоком»"
        ogImage="/logoetk.png"
        ogUrl={`https://eniseiteplokom.ru/news/${newsItem.id}`}
      />

      <Header />

      <div className={styles.wrapper}>
        <AnimatedBackground />

        <main className={styles.content}>
          {/* ✅ Хлебные крошки с названием новости */}
          <div className={styles.breadcrumbsWrapper}>
            <Breadcrumbs lastLabel={newsItem.title} />
          </div>

          {/* Заголовок и мета */}
          <h1 className={styles.title}>{newsItem.title}</h1>
          <p className={styles.date}>
            📅 {new Date(newsItem.date).toLocaleDateString("ru-RU")}
          </p>
          <p className={styles.views}>👁 {newsItem.views} просмотров</p>

          {/* Контент из Markdown */}
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: marked(newsItem.content) }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}