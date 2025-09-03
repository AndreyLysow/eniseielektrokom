// pages/news/index.jsx
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AnimatedBackground from "../../components/AnimatedBackground";
import Breadcrumbs from "../../components/Breadcrumbs";

import styles from "../../styles/news.module.css";

const PAGE_SIZE = 4;
const LS_KEY = (id) => `news:views:${id}`; // 👈 тот же ключ, что и на детальной

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

  // актуальные просмотры { id: number }
  const [counts, setCounts] = useState({});

  // подтягиваем просмотры = (views из md или 0) + инкремент из localStorage
  useEffect(() => {
    const map = {};
    try {
      for (const n of sorted) {
        const base = typeof n.views === "number" && n.views > 0 ? n.views : 0;
        const inc = parseInt(localStorage.getItem(LS_KEY(n.id)) || "0", 10) || 0;
        map[n.id] = base + inc;
      }
    } catch {
      // SSR/приватные режимы — просто показываем base
      for (const n of sorted) {
        map[n.id] = typeof n.views === "number" && n.views > 0 ? n.views : 0;
      }
    }
    setCounts(map);

    // лайв-обновление, если инкремент случился в другой вкладке
    const onStorage = (e) => {
      if (!e.key?.startsWith("news:views:")) return;
      setCounts((prev) => {
        const id = e.key.replace("news:views:", "");
        const found = sorted.find((x) => String(x.id) === id);
        if (!found) return prev;
        const base = typeof found.views === "number" && found.views > 0 ? found.views : 0;
        const inc = parseInt(localStorage.getItem(LS_KEY(found.id)) || "0", 10) || 0;
        return { ...prev, [found.id]: base + inc };
      });
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [sorted]);

  return (
    <>
      <CustomHead
        title="Новости — Енисейтеплоком"
        description="Актуальные новости ООО «Енисейтеплоком»"
        keywords="Енисейтеплоком, новости"
        ogTitle="Новости — ООО «Енисейтеплоком»"
        ogDescription="Читайте свежие новости"
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

          <h1 className={styles.title}>НОВОСТИ КОМПАНИИ</h1>

          <div className={styles.newsList}>
            {sorted.slice(0, visible).map((item) => {
              // cover: свой → показываем; если нет — только для id1 дефолтная
              const hasImage = item.cover && item.cover.trim();
              const isFirst = item.id === "id1";
              const imageSrc = hasImage ? item.cover : isFirst ? "/images/id1.jpg" : null;

              const base = typeof item.views === "number" && item.views > 0 ? item.views : 0;
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
                      <img
                        src="/images/ohs-team.jpg"
                        alt=""
                        className={styles.bannerSticker}
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <h2 className={styles.cardTitle}>{item.title}</h2>

                  <div className={styles.metaRow}>
                    <span className={styles.date}>
                      📅 {new Date(item.date).toLocaleDateString("ru-RU")}
                    </span>
                    <span className={styles.pipe}>•</span>
                    {/* численное значение меняется после монтирования */}
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