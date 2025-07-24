"use client";

import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/dispatchCenter.module.css";
import AnimatedBackground from "../AnimatedBackground";

export default function DispatchCenter() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Центр диспетчеризации производственных процессов</h1>

        <div className={styles.announcementBlock}>
          <p className={styles.icon}>📢</p>
          <h2 className={styles.subtitle}>
            Принимаем информацию о неполадках и авариях на инженерных сетях,
            а также жалобы на качество коммунальных услуг
          </h2>

          <div className={styles.phoneBlock}>
            <p className={styles.phone}>8-904-898-2624</p>
            <p className={styles.phone}>8-39195-2-21-91</p>
          </div>
        </div>
      </main>
    </div>
  );
}