"use client";

import AnimatedBackground from "./AnimatedBackground";
import Breadcrumbs from "./Breadcrumbs";
import Link from "next/link";
import styles from "../styles/sitemap.module.css";

export default function SiteMap({ news }) {
  return (
    <div className={styles.sitemapPage}>
      <AnimatedBackground />
      <main className={styles.contentWrapper}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.sitemapTitle}>Карта сайта</h1>

        <div className={styles.sitemapGrid}>
          {/* Основные страницы */}
          <div className={styles.sitemapBlock}>
            <div className={styles.blockTitle}>Основные страницы</div>
            <ul className={styles.sitemapList}>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/about">О компании</Link></li>
              <li><Link href="/CompanyDetails">Реквизиты</Link></li>
              <li><Link href="/info">Раскрытие информации</Link></li>
              <li><Link href="/sitemap">Карта сайта</Link></li>
              <li><Link href="/contact">Контакты</Link></li>
            </ul>
          </div>

          {/* Сервисы */}
          <div className={styles.sitemapBlock}>
            <div className={styles.blockTitle}>Сервисы</div>
            <ul className={styles.sitemapList}>
              <li><Link href="/announcements">Объявления</Link></li>
              <li><Link href="/announcement_mine">Важное объявление</Link></li>
              <li><Link href="/outage-schedule">График отключений</Link></li>
              <li><Link href="/DispatchCenter">Сообщить об аварии</Link></li>
              <li><Link href="/payment">Передача показаний и оплата</Link></li>
            </ul>
          </div>

          {/* Новости */}
          <div className={styles.sitemapBlock}>
            <div className={styles.blockTitle}>Новости</div>
            <ul className={styles.sitemapList}>
              <li><Link href="/news">Все новости</Link></li>
              {news.map((item) => (
                <li key={item.id}>
                  <Link href={`/news/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Политика */}
          <div className={styles.sitemapBlock}>
            <div className={styles.blockTitle}>Политика конфиденциальности</div>
            <ul className={styles.sitemapList}>
              <li>
                <Link href="/privacy-policy">
                  Политика в отношении обработки персональных данных
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}