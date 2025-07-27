"use client";

import Breadcrumbs from "./../Breadcrumbs";
import AnimatedBackground from "./../AnimatedBackground";
import styles from "../../styles/article.module.css";

export default function NoMeterData() {
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
          Последствия непредоставления показаний и изменения числа проживающих
        </h1>

        {/* Основной блок */}
        <div className={`${styles.articleBlock} ${styles.textContent}`}>
          <p>
            В соответствии с <strong>п. 59 Правил предоставления коммунальных услуг</strong>,
            утв. постановлением Правительства РФ от 06.05.2011 № 354:
          </p>
          <p>
            Если потребитель не предоставил показания индивидуального, общего (квартирного) или
            комнатного прибора учета, плата за коммунальную услугу за расчетный период определяется:
          </p>
          <ul className={styles.articleList}>
            <li>
              Исходя из <strong>среднемесячного объема потребления</strong>, рассчитанного по показаниям прибора учета
              за период не менее 6 месяцев (или фактический срок работы, но не менее 3 месяцев).
            </li>
            <li>
              Такой порядок применяется <strong>до трех расчетных периодов подряд</strong>, начиная с месяца,
              за который показания не были предоставлены.
            </li>
            <li>
              Если по истечении трех периодов показания так и не предоставлены, расчет платы
              производится <strong>по нормативу потребления</strong>.
            </li>
          </ul>
        </div>

        {/* Обязанность уведомления */}
        <div className={`${styles.articleBlock} ${styles.textContent}`}>
          <h2 className={styles.subtitle}>Обязанность информировать об изменении числа проживающих</h2>
          <p>
            В соответствии с <strong>п. 34 (з) Правил предоставления коммунальных услуг</strong>,
            потребитель обязан:
          </p>
          <ul className={styles.articleList}>
            <li>
              Сообщать в ресурсоснабжающую организацию об увеличении или уменьшении числа граждан,
              проживающих (в том числе временно) в жилом помещении.
            </li>
            <li>
              Срок уведомления — <strong>не позднее 5 рабочих дней</strong> со дня изменения.
            </li>
            <li>
              Обязанность распространяется на помещения, не оборудованные индивидуальными
              или общими (квартирными) приборами учета.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}