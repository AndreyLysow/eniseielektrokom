"use client";

import Image from "next/image";
import Breadcrumbs from "./../Breadcrumbs";
import AnimatedBackground from "./../AnimatedBackground";
import styles from "../../styles/article.module.css";

export default function GosuslugiDom() {
  return (
    <div className={`${styles.wrapper} ${styles.brandDom}`}>
      <AnimatedBackground />
      <main className={styles.content}>
        {/* Хлебные крошки */}
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        {/* Хедер / Hero */}
		<section className={`${styles.articleBlock} ${styles.heroUnified}`}>
		<div className={styles.heroColText}>
			<h1 className={styles.titleHero}>Госуслуги Дом</h1>
			<p className={styles.lead}>
			Приложение на базе <strong>ГИС ЖКХ</strong> для решения бытовых вопросов
			собственников и их гостей — во всех регионах РФ. Более <strong>11&nbsp;млн</strong> установок.
			</p>
			<a
			href="https://redirect.appmetrica.yandex.com/serve/676479150457937534"
			target="_blank"
			rel="noopener noreferrer"
			className={styles.downloadPrimary}
			>
			📲 Скачать приложение
			</a>
		</div>

		<figure className={styles.heroColMedia} role="img" aria-label="Баннер Госуслуги Дом">
			{/* если используешь next/image */}
			{/* <Image src="/media/gosuslugi_dom.jpg" alt="" fill sizes="(max-width: 900px) 90vw, 420px" /> */}
			<img src="/gosuslugi_dom.jpg" alt="" />
		</figure>
		</section>

      </main>
    </div>
  );
}