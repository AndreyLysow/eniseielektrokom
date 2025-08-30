"use client";

import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/announcementSpecial.module.css";
import AnimatedBackground from "../AnimatedBackground";
import Link from "next/link";

export default function SpecialAnnouncement() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        {/* Обернули Breadcrumbs для отступа */}
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Важное объявление</h1>

        <div className={styles.announcementBlock}>
          <p className={styles.alertIcon}>📢</p>
          <h2 className={styles.announcementTitle}>Уважаемые потребители!</h2>

          <p className={styles.text}>
            ООО «Енисейтеплоком» информирует вас о применении тарифов в соответствии с приказами Министерства тарифной политики Красноярского края:
          </p>

          <div className={styles.tariffSection}>
            <h3>📌 Приказ № 305-п от 19.12.2024 (действует с 01.07.2025)</h3>
            <p>
              <strong>Тариф на тепловую энергию (без НДС) для потребителей:</strong>
              <br />— г. Енисейск: <strong>7 527,53 руб. за 1 Гкал</strong>
              <br />— Енисейский район: <strong>10 735,13 руб. за 1 Гкал</strong>
            </p>
          </div>

          <div className={styles.tariffSection}>
            <h3>📌 Приказ № 412-п от 19.12.2024 (действует с 01.07.2025)</h3>
            <p>
              <strong>Тарифы на горячую воду (без НДС):</strong>
              <br />— г. Енисейск:
              <br />компонент на тепловую энергию: <strong>7 527,53 руб./Гкал</strong>
              <br />компонент на теплоноситель: <strong>160,54 руб./м³</strong>
              <br />— Енисейский район:
              <br />компонент на тепловую энергию: <strong>10 735,13 руб./Гкал</strong>
              <br />компонент на теплоноситель: <strong>220,16 руб./м³</strong>
            </p>
          </div>

          <p className={styles.additional}>
            Учитывайте данную информацию при планировании деятельности.
          </p>
        </div>

        <div className={styles.linkBlock}>
          <p>✅ Ознакомьтесь со всеми сообщениями компании:</p>
          <Link href="/announcements" className={styles.link}>
            	Перейти в раздел «Официальные сообщения»  →
          </Link>
        </div>
      </main>
    </div>
  );
}