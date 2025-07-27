"use client";

import Breadcrumbs from "./../Breadcrumbs";
import AnimatedBackground from "./../AnimatedBackground";
import styles from "../../styles/article.module.css";

export default function Normatives() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        {/* Хлебные крошки */}
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        {/* Заголовок */}
        <h1 className={styles.title}>
          Нормативы потребления коммунальной услуги по отоплению
        </h1>

        {/* Введение */}
        <div className={`${styles.articleBlock} ${styles.textContent}`}>
          <p>
            Нормативы потребления коммунальной услуги по отоплению в жилых и нежилых помещениях
            многоквартирных домов и жилых домов на территории муниципального образования Красноярского края,
            город Енисейск, на отопительный период, определенные расчетным методом.
          </p>
        </div>

        {/* Таблица нормативов */}
        <div className={`${styles.articleBlock} ${styles.textContent}`}>
          <h2 className={styles.subtitle}>Таблица нормативов (Гкал/м² в месяц)</h2>
          <table className={styles.normativesTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Категория дома</th>
                <th>Каменные / кирпичные</th>
                <th>Панельные / блочные</th>
                <th>Деревянные / смешанные</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className={styles.groupTitle}>
                  Этажность: дома до 1999 года постройки включительно
                </td>
              </tr>
              <tr>
                <td>1.1</td>
                <td>1 этаж</td>
                <td>—</td>
                <td>—</td>
                <td>0,0440</td>
              </tr>
              <tr>
                <td>1.2</td>
                <td>2 этажа</td>
                <td>0,0435</td>
                <td>0,0430</td>
                <td>0,0464</td>
              </tr>
              <tr>
                <td>1.3</td>
                <td>3 — 4 этажа</td>
                <td>0,0296</td>
                <td>—</td>
                <td>0,0284</td>
              </tr>
              <tr>
                <td>1.4</td>
                <td>5 — 9 этажей</td>
                <td>0,0240</td>
                <td>0,0272</td>
                <td>—</td>
              </tr>
              <tr>
                <td colSpan="5" className={styles.groupTitle}>
                  Этажность: дома после 1999 года постройки
                </td>
              </tr>
              <tr>
                <td>2.1</td>
                <td>1 этаж</td>
                <td>—</td>
                <td>—</td>
                <td>0,0199</td>
              </tr>
              <tr>
                <td>2.2</td>
                <td>2 этажа</td>
                <td>—</td>
                <td>—</td>
                <td>0,0214</td>
              </tr>
              <tr>
                <td>2.3</td>
                <td>4 — 5 этажей</td>
                <td>0,0187</td>
                <td>0,0177</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Скачать документ */}
        <div className={`${styles.articleBlock} ${styles.textContent}`}>
          <a
            href="/documents/normativy-co.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadLink}
          >
            📄 Скачать документ «Нормативы ЦО» (PDF)
          </a>
        </div>
      </main>
    </div>
  );
}