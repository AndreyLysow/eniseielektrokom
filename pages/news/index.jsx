import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AnimatedBackground from "../../components/AnimatedBackground";
import Breadcrumbs from "../../components/Breadcrumbs";

import styles from "../../styles/news.module.css";

const PAGE_SIZE = 4;

/** SSG: список новостей из файловой системы */
export async function getStaticProps() {
  const { getAllNews } = await import("../../utils/news");
  const news = getAllNews();
  return { props: { news } };
}

export default function NewsPage({ news }) {
  // свежее — выше
  const sorted = useMemo(
    () => [...(news || [])].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [news]
  );

  // пагинация
  const [visible, setVisible] = useState(PAGE_SIZE);
  const hasMore = visible < sorted.length;

  // просмотры с бэкенда (totals) + base из фронтматтера
  const [counts, setCounts] = useState({}); // { [id]: number }

  useEffect(() => {
    let cancelled = false;
    const ids = sorted.map((n) => n.id);
    if (!ids.length) return;

    (async () => {
      try {
        const res = await fetch("/api/views/bulk", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids }),
        });
        const data = await res.json();
        if (!cancelled && data?.ok) {
          const combined = {};
          for (const n of sorted) {
            const base = typeof n.views === "number" ? n.views : 0;
            combined[n.id] = base + (data.counts?.[n.id] || 0);
          }
          setCounts(combined);
        } else if (!cancelled) {
          // fallback: только base из md
          const combined = {};
          for (const n of sorted) {
            combined[n.id] = typeof n.views === "number" ? n.views : 0;
          }
          setCounts(combined);
        }
      } catch {
        if (!cancelled) {
          const combined = {};
          for (const n of sorted) {
            combined[n.id] = typeof n.views === "number" ? n.views : 0;
          }
          setCounts(combined);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sorted]);

  return (
    <>
      <CustomHead
        title="Новости — Енисейэлектроком"
        description="Актуальные новости ООО «Енисейэлектроком»"
        keywords="Енисейэлектроком, новости"
        ogTitle="Новости — ООО «Енисейэлектроком»"
        ogDescription="Читайте свежие новости"
        ogImage="/logoetk.png"
        ogUrl="https://eniseielektrokom.ru/news"
      />

      <Header />

      <div className={styles.wrapper}>
        <AnimatedBackground />
        <main className={styles.content}>
          <div className={styles.breadcrumbsWrapper}>
            <Breadcrumbs />
          </div>

          <h1 className={styles.title}>НОВОСТИ КОМПАНИИ</h1>

          <div className={styles.newsList}>
            {sorted.slice(0, visible).map((item) => {
              // картинка: если есть cover — берём его; если нет — только для id1 показываем дефолт
              const hasImage = item.cover && item.cover.trim();
              const isFirst = item.id === "id1";
              const imageSrc = hasImage ? item.cover : isFirst ? "/images/id1.jpg" : null;

              const base = typeof item.views === "number" ? item.views : 0;
              const total = counts[item.id] ?? base;

              return (
                <article key={item.id} className={styles.card}>
                  {imageSrc && (
                    <div className={styles.media}>
                      <img
                        src={imageSrc}
                        alt={item.title ? `Обложка: ${item.title}` : "Обложка новости"}
                        loading="lazy"
                        decoding="async"
                      />
                 
                    </div>
                  )}

                  <h2 className={styles.cardTitle}>{item.title}</h2>

                  <div className={styles.metaRow}>
                    <span className={styles.date}>
                      📅 {new Date(item.date).toLocaleDateString("ru-RU")}
                    </span>
                    <span className={styles.pipe}>•</span>
                    <span className={styles.views} suppressHydrationWarning>
                      👁 {total} просмотров
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