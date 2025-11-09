"use client";
import AnimatedBackground from "./AnimatedBackground";
import Breadcrumbs from "./Breadcrumbs";
import styles from "../styles/CompanyDetails.module.css";

export default function AboutContent() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />

      <main className={styles.content}>
        <Breadcrumbs />
        <h1 className={styles.title}>Реквизиты предприятия</h1>

        <section className={styles.card}>
          <h2>Реквизиты ООО «Енисейская электроснабжающая компания»</h2>

          <div className={styles.label}>Полное и сокращенное наименование</div>
          <div className={styles.value}>
            Общество с ограниченной ответственностью «Енисейская электроснабжающая компания»<br />
            ООО «Енисейэлектроком»
          </div>

          <div className={styles.label}>ИНН / КПП</div>
          <div className={styles.value}>2447014078 / 244701001</div>

          <div className={styles.label}>ОГРН</div>
          <div className={styles.value}>
            1232400005826 (выдан Межрайонной ИФНС №17 по Красноярскому краю)
          </div>

          <div className={styles.label}>Банковские реквизиты</div>
          <div className={styles.value}>
            Р/с 40702810331000061669 в ПАО СБЕРБАНК, г. Красноярск<br />
            К/с 30101810800000000627<br />
            БИК 040407627
          </div>

          <div className={styles.label}>Юридический адрес</div>
          <div className={styles.value}>
            663148, Красноярский край, с. Верхнепашино, ул. Обручева, стр. 2
          </div>

          <div className={styles.label}>Почтовый адрес</div>
          <div className={styles.value}>
            663148, РФ, Красноярский край, Енисейский район, с. Верхнепашино, ул. Обручева, стр. 2
          </div>

          <div className={styles.label}>Email / Телефон</div>
          <div className={styles.value}>
            eniseielektrokom@mail.ru / +7 (39195) 2-49-57
          </div>

          <div className={styles.label}>ОКПО / ОКАТО / ОКТМО</div>
          <div className={styles.value}>52127201 / 04215807001 / 04615407101</div>

          <div className={styles.label}>ОКОГУ / ОКФС / ОКОПФ</div>
          <div className={styles.value}>4210014 / 16 (частная собственность) / 12300</div>

          <div className={styles.label}>ОКВЭД</div>
          <div className={styles.value}>
            Основной: 35.30.1<br />
            Дополнительные: 82.11; 43.12.3; 35.30.4; 35.30.3; 35.30.2
          </div>

          <div className={styles.label}>ПФР / ФСС</div>
          <div className={styles.value}>034061103687 / 241100067124111</div>

          <div className={styles.label}>Директор</div>
          <div className={styles.value}>
            Левчук Игорь Сергеевич (действует на основании Устава)
          </div>
        </section>

        <section className={styles.extract}>
          <h3>Выписка из ЕГРЮЛ</h3>
          <p>
            Актуальная выписка из Единого государственного реестра юридических лиц
            сформирована <strong>31 марта 2025 года</strong>. Документ подписан
            усиленной квалифицированной электронной подписью и получен с официального сайта ФНС России.
          </p>
          <a
            href="/documents/egroul-extract-2025-03-31.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            📄 Скачать PDF (Выписка от 31.03.2025)
          </a>
        </section>
      </main>
    </div>
  );
}
