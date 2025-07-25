"use client";

import React from "react";
import Link from "next/link";
import { getAllNews } from "../../utils/news";
import styles from "../../styles/news.module.css";

import CustomHead from "../../components/customHead";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AnimatedBackground from "../../components/AnimatedBackground";
import Breadcrumbs from "../../components/Breadcrumbs";

export async function getStaticProps() {
  const news = getAllNews();
  return {
    props: {
      news,
    },
  };
}

export default function NewsPage({ news }) {
  return (
    <>
      <CustomHead
        title="Новости — Енисейтеплоком"
        description="Актуальные новости ООО «Енисейтеплоком»: информация для абонентов, изменения в законодательстве, разъяснения Минстроя России, полезные советы."
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
            {news.map((item) => (
              <div key={item.id} className={styles.card}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.date}>
                  📅 {new Date(item.date).toLocaleDateString("ru-RU")}
                </p>
                <p className={styles.views}>👁 {item.views} просмотров</p>
                <Link href={`/news/${item.id}`} className={styles.readMore}>
                  Читать →
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}