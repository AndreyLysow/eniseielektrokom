"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Slider from "./Slider";
import AnimatedBackground from "./../AnimatedBackground"; // Импорт фона
import styles from "../../styles/main.module.css";

export default function HomePage() {
  useEffect(() => {
    // Любые другие побочные эффекты, если нужны
  }, []);

  return (
    <main className={styles.wrapper}>
      <Header />

      {/* 🔵 Видео-фон */}
      <AnimatedBackground />

      <section className={styles.attentionSection}>
        <div className={styles.attentionBanner}>
          <h1>Внимание абонентам!</h1>
          <p>Актуальная информация для потребителей коммунальных услуг, важные уведомления и объявления.</p>
          <Link href="/announcements" className={styles.attentionButton}>
            Подробнее
          </Link>
        </div>
      </section>

      <Slider />

      <Footer className={styles.footer} />
    </main>
  );
}