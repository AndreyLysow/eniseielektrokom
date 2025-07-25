"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Таймер для задержки скрытия подменю
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
    setNestedOpen(false);
  };

  // ✅ Логика для задержки закрытия подменю
  const handleMouseEnterSubmenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSubmenuOpen(true);
  };

  const handleMouseLeaveSubmenu = () => {
    closeTimer.current = setTimeout(() => setSubmenuOpen(false), 500);
  };

  const handleMouseEnterNested = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setNestedOpen(true);
  };

  const handleMouseLeaveNested = () => {
    closeTimer.current = setTimeout(() => setNestedOpen(false), 500);
  };

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/" onClick={closeMenu}>
          <Image src="/logoetk.png" alt="Енисейтеплоком" width={100} height={100} priority />
        </Link>
        {!isMobile && (
          <span className={styles.orgName}>
            ООО &laquo;Енисейская<br />теплоснабжающая компания&raquo;
          </span>
        )}
      </div>

      {!isMobile && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" onClick={closeMenu}>Главная</Link></li>

            {/* Абонентам */}
            <li
              className={styles.dropdown}
              onMouseEnter={handleMouseEnterSubmenu}
              onMouseLeave={handleMouseLeaveSubmenu}
            >
              <button className={styles.dropdownBtn}>
                Абонентам <FaChevronDown />
              </button>
              {submenuOpen && (
                <ul
                  className={styles.dropdownMenu}
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={handleMouseLeaveSubmenu}
                >
                  <li
                    className={styles.hasSubmenu}
                    onMouseEnter={handleMouseEnterNested}
                    onMouseLeave={handleMouseLeaveNested}
                  >
                    <span>
                      Объявления <FaChevronRight />
                    </span>
                    {nestedOpen && (
                      <ul
                        className={styles.nestedMenu}
                        onMouseEnter={handleMouseEnterNested}
                        onMouseLeave={handleMouseLeaveNested}
                      >
                        <li><Link href="/announcement_mine" onClick={closeMenu}>Важное объявление</Link></li>
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

      <div className={styles.contacts}>
        <a href="tel:+73919524957" className={styles.phone}>
          +7 (39195) 2-49-57
        </a>
      </div>

      <button className={styles.burger} aria-label="Открыть меню" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

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
                        <li><Link href="/announcement_mine" onClick={closeMenu}>Важное объявление</Link></li>
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