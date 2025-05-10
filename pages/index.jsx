"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaLock, FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/main.module.css";

// Модальные окна
const LoginModal = dynamic(() => import("../components/LoginModal"));
const RegisterModal = dynamic(() => import("../components/RegisterModal"));

export default function HomePage() {
  const videoRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      try {
        video.playbackRate = 0.25;
        video.play().catch((err) => {
          console.warn("Ошибка воспроизведения:", err);
        });
      } catch (err) {
        console.warn("PlaybackRate error:", err);
      }
    }
  }, []);

  const toggle = (key) => {
    if (key === "menu") setMenuOpen((o) => !o);
    if (key === "login") setShowLogin((o) => !o);
    if (key === "register") setShowRegister((o) => !o);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logoetk.jpg" alt="Логотип Енисейтеплоком" width={100} height={100} priority />
        </div>
        <button className={styles.burger} onClick={() => toggle("menu")} aria-label="Меню">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li><Link href="/"><a onClick={() => toggle("menu")}>Главная</a></Link></li>
            <li><Link href="/consumers"><a onClick={() => toggle("menu")}>Потребителям</a></Link></li>
            <li><Link href="/news"><a onClick={() => toggle("menu")}>Новости</a></Link></li>
            <li><Link href="/info"><a onClick={() => toggle("menu")}>Раскрытие информации</a></Link></li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <a href="tel:+73919524957" className={styles.phone}>+7 (39195) 2-49-57</a>
          <div className={styles.lockMenu}>
            <FaLock className={styles.lockIcon} />
            <div className={styles.dropdown}>
              <button onClick={() => toggle("login")}>Войти</button>
              <button onClick={() => toggle("register")}>Регистрация</button>
            </div>
          </div>
        </div>
      </header>

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
          <Link href="/about"><a className={styles.heroButton}>Подробнее</a></Link>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image src="/announcement-icon.png" alt="Объявления" width={60} height={60} />
            <h3>Объявления</h3>
            <p>Актуальная информация для потребителей коммунальных услуг</p>
          </div>
          <div className={styles.card}>
            <Image src="/payment-icon.png" alt="Оплата услуг" width={60} height={60} />
            <h3>Оплата услуг</h3>
            <p>Узнайте о способах подачи показаний и оплаты коммунальных услуг</p>
          </div>
          <div className={styles.card}>
            <Image src="/house-icon.png" alt="Технологическое присоединение" width={60} height={60} />
            <h3>Технологическое присоединение</h3>
            <p>Информация о технологическом присоединении</p>
          </div>
        </div>
      </section>

      {showLogin && <LoginModal onClose={() => toggle("login")} />}
      {showRegister && <RegisterModal onClose={() => toggle("register")} />}
    </main>
  );
}
