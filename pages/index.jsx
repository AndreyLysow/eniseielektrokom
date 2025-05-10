import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaLock, FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/main.module.css";
import { useVideoLooper } from "../components/useVideoLooper";

// Динамический импорт модалей
const LoginModal = dynamic(() => import("../components/LoginModal"));
const RegisterModal = dynamic(() => import("../components/RegisterModal"));

// Конфигурация видео
const videos = [
  { src: "/lesosib3.mp4", title: "Жилищно-коммунальное хозяйство «Лесосибирск»" },
  { src: "/lesosib4.mp4", title: "Качество, Надёжность, Забота о Жителях" }
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { videoRef, currentVideo, currentTitle, fade } = useVideoLooper(videos);

  const toggle = key => {
    if (key === "menu") setMenuOpen(o => !o);
    if (key === "login") setShowLogin(o => !o);
    if (key === "register") setShowRegister(o => !o);
  };

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo} role="banner">
          <Image src="/logomup2.png" alt="Логотип ЖКХ Лесосибирск" width={80} height={100} priority />
          <span className={styles.logoText} role="heading" aria-level={1}>
            МУП ЖКХ Лесосибирск
          </span>
        </div>
        <button
          className={styles.burger}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => toggle('menu')}
        >{menuOpen ? <FaTimes /> : <FaBars />}</button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/"><a onClick={() => toggle('menu')}>Главная</a></Link></li>
            <li><Link href="/consumers"><a onClick={() => toggle('menu')}>Потребителям</a></Link></li>
            <li><Link href="/news"><a onClick={() => toggle('menu')}>Новости</a></Link></li>
            <li><Link href="/info"><a onClick={() => toggle('menu')}>Раскрытие информации</a></Link></li>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <a href="tel:+73914554034" className={styles.phone}>+7 (39145) 5-40-34</a>
          <div className={styles.lockMenu}>
            <FaLock className={styles.lockIcon} aria-hidden="true" />
            <div className={styles.dropdown}>
              <button onClick={() => toggle('login')}>Войти</button>
              <button onClick={() => toggle('register')}>Регистрация</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video
          key={currentVideo}
          ref={videoRef}
          className={styles.backgroundVideo}
          style={{ opacity: fade ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
          src={currentVideo}
          autoPlay
          muted
          playsInline
        />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{currentTitle}</h1>
          <Link href="/about"><a className={styles.heroButton}>Подробнее</a></Link>
        </div>
      </section>

      {/* Cards Section */}
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

      {/* Modals */}
      {showLogin && <LoginModal onClose={() => toggle('login')} />}
      {showRegister && <RegisterModal onClose={() => toggle('register')} />}
    </main>
  );
}