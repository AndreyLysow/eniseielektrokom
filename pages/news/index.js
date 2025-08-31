// pages/news/index.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getAllNews } from "../../utils/news";

import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AnimatedBackground from "../../components/AnimatedBackground";
import Breadcrumbs from "../../components/Breadcrumbs";

import styles from "../../styles/news.module.css";

/* ---------- константы ---------- */
const PAGE_SIZE = 4;
const LS_KEY = (id) => `news:views:${id}`; // <— ДОЛЖЕН совпадать с детальной страницей

/* псевдослучайная «база» 3..40, если в md-файле views не задан */
function seededBase(id) {
  let h = 0;
  const s = String(id);
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h % 38) + 3;
}

/* ---------- SSG ---------- */
export async function getStaticProps() {
  const news = getAllNews();
  return { props: { news } };
}

/* ---------- Страница ---------- */
export default function NewsPage({ news }) {
  // свежее — выше
  const sorted = useMemo(
    () => [...(news || [])].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [news]
  );

  // пагинация
  const [visible, setVisible] = useState(PAGE_SIZE);
  const hasMore = visible < sorted.length;

  // актуальные просмотры { id: number }
  const [counts, setCounts] = useState({});

  // подтягиваем просмотры из localStorage
  useEffect(() => {
    const map = {};
    try {
      for (const n of sorted) {
        const base =
          typeof n.views === "number" && n.views > 0 ? n.views : seededBase(n.id);
        const inc = parseInt(localStorage.getItem(LS_KEY(n.id)) || "0", 10) || 0;
        map[n.id] = base + inc;
      }
    } catch {
      // если нет доступа к LS — используем только базу
      for (const n of sorted) {
        map[n.id] =
          typeof n.views === "number" && n.views > 0 ? n.views : seededBase(n.id);
      }
    }
    setCounts(map);
  }, [sorted]);

  return (
    <>
      <CustomHead
        title="Новости — Енисейтеплоком"
        description="Актуальные новости ООО «Енисейтеплоком»: информация для абонентов, изменения в законодательстве, разъяснения, полезные советы."
        keywords="Енисейтеплоком, новости, ЖКХ, Енисейск, теплоснабжение, коммунальные услуги"
        ogTitle="Новости — ООО «Енисейтеплоком»"
        ogDescription="Читайте свежие новости и разъяснения для потребителей от ООО «Енисейтеплоком»."
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/news"
      />

      <Header />

      <div className={styles.wrapper}>
        <AnimatedBackground />
        <main className={styles.content}>
          <div className={styles.breadcrumbsWrapper}>
            <Breadcrumbs />
          </div>

          <h1 className={styles.title}>Новости</h1>

          <div className={styles.newsList}>
            {sorted.slice(0, visible).map((item) => {
              const fallback = typeof item.views === "number" && item.views > 0
                ? item.views
                : seededBase(item.id);

              return (
                <article key={item.id} className={styles.card}>
                  <h2 className={styles.cardTitle}>{item.title}</h2>

                  <div className={styles.metaRow}>
                    <span className={styles.date}>
                      📅 {new Date(item.date).toLocaleDateString("ru-RU")}
                    </span>
                    <span className={styles.pipe}>•</span>
                    {/* базу рендерим сразу, а после монтирования подменится на counts */}
                    <span className={styles.views} suppressHydrationWarning>
                      👁 {counts[item.id] ?? fallback} просмотров
                    </span>
                  </div>

                  <div className={styles.cardSpacer} />

                  <div className={styles.cardActions}>
                    <Link href={`/news/${item.id}`} className={styles.readMore}>
                      Читать →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMore && (
            <div className={styles.loadMoreWrap}>
              <button
                type="button"
                className={styles.loadMoreBtn}
                onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, sorted.length))}
              >
                Показать ещё
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}