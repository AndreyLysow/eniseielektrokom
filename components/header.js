"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
    setNestedOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Логотип + Название */}
      <div className={styles.brand}>
        <Link href="/" onClick={closeMenu}>
          <Image src="/logoetk.png" alt="Енисейтеплоком" width={70} height={70} priority />
        </Link>
        {!isMobile && (
          <span className={styles.orgName}>
            ООО «Енисейская<br />теплоснабжающая компания»
          </span>
        )}
      </div>

      {/* Десктопное меню */}
      {!isMobile && (
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li><Link href="/" onClick={closeMenu}>Главная</Link></li>

            <li
              className={styles.dropdown}
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => {
                setSubmenuOpen(false);
                setNestedOpen(false);
              }}
            >
              <button className={styles.dropdownBtn}>
                Абонентам <FaChevronDown />
              </button>
              {submenuOpen && (
                <ul className={styles.dropdownMenu}>
                  <li
                    onMouseEnter={() => setNestedOpen(true)}
                    onMouseLeave={() => setNestedOpen(false)}
                    className={styles.hasSubmenu}
                  >
                    <span>Объявления <FaChevronRight /></span>
                    {nestedOpen && (
                      <ul className={styles.nestedMenu}>
                        <li><Link href="/important-announcement" onClick={closeMenu}>Важное объявление</Link></li>
                        <li><Link href="/announcements" onClick={closeMenu}>Другие объявления</Link></li>
                        <li><Link href="/outage-schedule" onClick={closeMenu}>График отключения</Link></li>
                      </ul>
                    )}
                  </li>
                  <li><Link href="/DispatchCenter" onClick={closeMenu}>Сообщить об аварии</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/news" onClick={closeMenu}>Новости</Link></li>
            <li><Link href="/info" onClick={closeMenu}>Раскрытие информации</Link></li>
            <li>
              <a href="https://lk.eniseiteplokom.ru" target="_blank" rel="noopener noreferrer">
                Личный кабинет
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Контакты */}
      <div className={styles.contacts}>
        <a href="tel:+73919524957" className={styles.phone}>
          +7 (39195) 2-49-57
        </a>
      </div>

      {/* Бургер */}
      <button className={styles.burger} aria-label="Открыть меню" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Мобильное меню */}
      {isMobile && menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><Link href="/" onClick={closeMenu}>Главная</Link></li>
            <li>
              <button onClick={() => setSubmenuOpen(!submenuOpen)}>Абонентам ▾</button>
              {submenuOpen && (
                <ul>
                  <li>
                    <button onClick={() => setNestedOpen(!nestedOpen)}>Объявления ▸</button>
                    {nestedOpen && (
                      <ul>
                        <li><Link href="/important-announcement" onClick={closeMenu}>Важное объявление</Link></li>
                        <li><Link href="/announcements" onClick={closeMenu}>Другие объявления</Link></li>
                        <li><Link href="/outage-schedule" onClick={closeMenu}>График отключения</Link></li>
                      </ul>
                    )}
                  </li>
                  <li><Link href="/DispatchCenter" onClick={closeMenu}>Сообщить об аварии</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/news" onClick={closeMenu}>Новости</Link></li>
            <li><Link href="/info" onClick={closeMenu}>Раскрытие информации</Link></li>
            <li><a href="https://lk.eniseiteplokom.ru">Личный кабинет</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}