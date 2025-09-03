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

export default function NewsDetail({ newsItem }) {
  if (!newsItem) return <p>Новость не найдена</p>;

  // базовые просмотры — из md (или 0)
  const baseViews = useMemo(
    () => (typeof newsItem.views === "number" && newsItem.views > 0 ? newsItem.views : 0),
    [newsItem.id, newsItem.views]
  );

  // дата/контент
  const formattedDate = useMemo(
    () => new Date(newsItem.date).toLocaleDateString("ru-RU"),
    [newsItem.date]
  );
  const html = useMemo(() => marked.parse(newsItem.content ?? ""), [newsItem.content]);

  // UI-счётчик
  const [viewsUI, setViewsUI] = useState(baseViews);

  // Инкремент счётчика на бэкенде (по IP, не чаще 1 раза в 24ч)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/views/increment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: newsItem.id }),
        });
        const data = await res.json();
        if (!cancelled && data?.ok) {
          // total — это «агрегат» из БД; хотим суммарно base + total
          setViewsUI(baseViews + (data.total || 0));
        } else if (!cancelled) {
          setViewsUI(baseViews);
        }
      } catch {
        if (!cancelled) setViewsUI(baseViews);
      }
    })();
    return () => { cancelled = true; };
  }, [newsItem.id, baseViews]);

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