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
          <p className={styles.alertIcon}>❗️❗️❗️</p>
          <h2 className={styles.announcementTitle}>
            Организована работа по приостановке подачи горячего водоснабжения от котельной:
          </h2>
          <p className={styles.address}>г. Енисейск, ул. Ленина, 14В</p>

          <p className={styles.text}>
            Осуществляется <strong>ремонт трубопроводов сетей горячего водоснабжения</strong> на котельной в период:
          </p>
          <p className={styles.dates}>
            <span>с 11.07.2025 (14:00) по 24.07.2025 (14:00)</span>
          </p>

          <p className={styles.additional}>
            Просим вас заблаговременно подготовиться к временному отсутствию горячего водоснабжения.
          </p>
        </div>

        <div className={styles.linkBlock}>
          <p>
            ✅ Утвержден <strong>график приостановления подачи горячего водоснабжения</strong> в межотопительный период 2025 г.
          </p>
          <Link href="/outage-schedule" className={styles.link}>
            Ознакомьтесь с графиком →
          </Link>
        </div>
      </main>
    </div>
  );
}