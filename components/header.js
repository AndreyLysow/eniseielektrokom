"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logoetk.png"
            alt="Енисейтеплоком"
            width={isMobile ? 100 : 120}
            height={isMobile ? 100 : 120}
            priority
          />
        </Link>
      </div>

      <span className={styles.orgName}>
         ООО &laquo;Енисейская теплоснабжающая компания&raquo;
      </span>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li><Link href="/" onClick={closeMenu}>Главная</Link></li>
          <li><Link href="/consumers" onClick={closeMenu}>Абонентам</Link></li>
          <li><Link href="/news" onClick={closeMenu}>Новости</Link></li>
          <li><Link href="/info" onClick={closeMenu}>Раскрытие информации</Link></li>
          <li>
            <a
              href="https://lk.eniseiteplokom.ru"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{ fontWeight: 600, color: "var(--c-primary)" }}
            >
              Личный кабинет
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.contacts}>
        <a href="tel:+73919524957" className={styles.phone}>
          +7 (39195) 2-49-57
        </a>
      </div>

      <button
        className={styles.burger}
        aria-label="Открыть меню"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
