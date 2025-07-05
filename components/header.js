// components/Header/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaLock } from "react-icons/fa";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Отслеживаем ширину для адаптива */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Логотип + подпись */}
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logoetk.png"
            alt="Енисейтеплоком"
            width={isMobile ? 70 : 100}
            height={isMobile ? 70 : 100}
            priority
          />
        </Link>
        <span className={styles.orgName}>
         ООО Енисейская теплоснабжающая компания
        </span>
      </div>

      {/* Бургер */}
      <button
        className={styles.burger}
        aria-label="Навигация"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Навигация */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li><Link href="/"          onClick={closeMenu}>Главная</Link></li>
          <li><Link href="/consumers" onClick={closeMenu}>Абонентам</Link></li>
          <li><Link href="/news"      onClick={closeMenu}>Новости</Link></li>
          <li><Link href="/info"      onClick={closeMenu}>Раскрытие информации</Link></li>
        </ul>
      </nav>

      {/* Контакты и личный кабинет */}
      <div className={styles.contacts}>
        <a href="tel:+73919524957" className={styles.phone}>
          +7 (39195) 2-49-57
        </a>
        <a
          href="https://lk.eniseiteplokom.ru"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.lockLink}
        >
          <FaLock className={styles.lockIcon} />
          Личный кабинет
        </a>
      </div>
    </header>
  );
}
