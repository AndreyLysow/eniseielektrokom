"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Header from "../header";   // ← подключаем шапку
import styles from "../../styles/main.module.css";

// Модалки (если ещё понадобятся)
const LoginModal = dynamic(() => import("../LoginModal"));
const RegisterModal = dynamic(() => import("../RegisterModal"));

export default function HomePage() {
  const videoRef = useRef(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  /* Нормализуем скорость видео */
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.25;
      video.play().catch((err) => console.warn("Ошибка воспроизведения:", err));
    }
  }, []);

  return (
    <main className={styles.main}>
      {/* ГЛОБАЛЬНАЯ ШАПКА */}
      <Header />

      {/* Герой-секция */}
      <section className={styles.heroSection}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          src="/eniseysk.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Енисейтеплоком</h1>
          <Link href="/about" className={styles.heroButton}>
            Подробнее
          </Link>
        </div>
      </section>

      {/* Карточки */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image
              src="/announcement-icon.png"
              alt="Объявления"
              width={60}
              height={60}
            />
            <h3>Объявления</h3>
            <p>Актуальная информация для потребителей коммунальных услуг</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/payment-icon.png"
              alt="Оплата услуг"
              width={60}
              height={60}
            />
            <h3>Оплата услуг</h3>
            <p>Узнайте о способах подачи показаний и оплаты коммунальных услуг</p>
          </div>

          <div className={styles.card}>
            <Image
              src="/house-icon.png"
              alt="Технологическое присоединение"
              width={60}
              height={60}
            />
            <h3>Технологическое присоединение</h3>
            <p>Информация о технологическом присоединении</p>
          </div>
        </div>
      </section>

      {/* Модалки (по-желанию вернуть) */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </main>
  );
}
