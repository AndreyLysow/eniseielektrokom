// pages/news/[id].jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { marked } from "marked";
import { getAllNews, getNewsById } from "../../utils/news";

import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import AnimatedBackground from "../../components/AnimatedBackground";

import styles from "../../styles/newsDetail.module.css";

/* ---------------- SSG ---------------- */
export async function getStaticPaths() {
  const news = getAllNews();
  const paths = news.map((item) => ({ params: { id: String(item.id) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const newsItem = getNewsById(params.id);
  return { props: { newsItem: newsItem ?? null } };
}

/* ---------------- helpers ---------------- */
const LS_KEY = (id) => `news:views:${id}`;
const SEEN_KEY = (id) => `news:seen:${id}`;

export default function NewsDetail({ newsItem }) {
  if (!newsItem) return <p>Новость не найдена</p>;

  // базовые просмотры берём только из файла (или 0)
  const baseViews = useMemo(() => {
    return typeof newsItem.views === "number" && newsItem.views > 0 ? newsItem.views : 0;
  }, [newsItem.id, newsItem.views]);

  const formattedDate = useMemo(
    () => new Date(newsItem.date).toLocaleDateString("ru-RU"),
    [newsItem.date]
  );

  const html = useMemo(() => marked.parse(newsItem.content ?? ""), [newsItem.content]);

  // текущее значение для UI
  const [viewsUI, setViewsUI] = useState(baseViews);

  // инкремент ровно 1 раз за сессию и синхронизация со списком
  useEffect(() => {
    try {
      const k = LS_KEY(newsItem.id);
      const seenK = SEEN_KEY(newsItem.id);

      const stored = Number.parseInt(localStorage.getItem(k) || "0", 10) || 0;
      const seen = sessionStorage.getItem(seenK) === "1";

      const nextStored = seen ? stored : stored + 1;

      if (!seen) {
        localStorage.setItem(k, String(nextStored)); // persist
        sessionStorage.setItem(seenK, "1");          // no more increments this session
      }

      setViewsUI(baseViews + nextStored);
    } catch {
      setViewsUI(baseViews);
    }
  }, [baseViews, newsItem.id]);

  const pageTitle = `${newsItem.title} — Енисейтеплоком`;
  const ogUrl = `https://eniseiteplokom.ru/news/${newsItem.id}`;

  return (
    <>
      <CustomHead
        title={pageTitle}
        description={`Читайте подробности: ${newsItem.title}`}
        keywords="Енисейтеплоком, новости, ЖКХ, Енисейск"
        ogTitle={pageTitle}
        ogDescription="Актуальные новости для абонентов ООО «Енисейтеплоком»"
        ogImage="/logoetk.png"
        ogUrl={ogUrl}
      />

      <Header />

      <div className={styles.page}>
        <AnimatedBackground />
        <div className={styles.dim} />

        <main className={styles.content}>
          <div className={styles.breadcrumbsWrapper}>
            <Breadcrumbs lastLabel={newsItem.title} />
          </div>

          <h1 className={styles.title}>{newsItem.title}</h1>

          <p className={styles.meta}>
            <span className={styles.date}>📅 {formattedDate}</span>
            <span className={styles.pipe}>•</span>
            <span className={styles.views} suppressHydrationWarning>
              👁 {viewsUI} просмотров
            </span>
          </p>

          <article
            className={styles.card}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}