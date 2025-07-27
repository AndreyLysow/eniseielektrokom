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
  const [articlesOpen, setArticlesOpen] = useState(false); // ✅ Новый стейт для вложенного меню
  const [isMobile, setIsMobile] = useState(false);
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
    setArticlesOpen(false);
  };

  const handleMouseEnter = (setter) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    closeTimer.current = setTimeout(() => setter(false), 500);
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
              onMouseEnter={() => handleMouseEnter(setSubmenuOpen)}
              onMouseLeave={() => handleMouseLeave(setSubmenuOpen)}
            >
              <button className={styles.dropdownBtn}>
                Абонентам <FaChevronDown />
              </button>
              {submenuOpen && (
                <ul className={styles.dropdownMenu}>
                  {/* Важная информация */}
                  <li
                    className={styles.hasSubmenu}
                    onMouseEnter={() => handleMouseEnter(setNestedOpen)}
                    onMouseLeave={() => handleMouseLeave(setNestedOpen)}
                  >
                    <span>
                      Важная информация <FaChevronRight />
                    </span>
                    {nestedOpen && (
                      <ul className={styles.nestedMenu}>
                        <li><Link href="/announcement_mine" onClick={closeMenu}>Важное объявление</Link></li>
                        <li><Link href="/announcements" onClick={closeMenu}>Официальные сообщения</Link></li>
                        <li><Link href="/outage-schedule" onClick={closeMenu}>График отключения</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Новый блок: Статьи */}
                  <li
                    className={styles.hasSubmenu}
                    onMouseEnter={() => handleMouseEnter(setArticlesOpen)}
                    onMouseLeave={() => handleMouseLeave(setArticlesOpen)}
                  >
                    <span>
                      Статьи, разъяснения, нормативы <FaChevronRight />
                    </span>
                    {articlesOpen && (
                      <ul className={styles.nestedMenu}>
                        <li><Link href="/articles/plan-ozp" onClick={closeMenu}>План подготовки к отопительному сезону 2025-2026 гг.</Link></li>
                        <li><Link href="/articles/normatives" onClick={closeMenu}>Нормативы потребления по отоплению</Link></li>
                        <li><Link href="/articles/service-quality" onClick={closeMenu}>Требования к качеству коммунальных услуг</Link></li>
                        <li><Link href="/articles/no-meter-data" onClick={closeMenu}>Информация о последствиях непредоставления показаний</Link></li>
                        <li><Link href="/articles/promivka" onClick={closeMenu}>Основные требования к промывке систем отопления</Link></li>
						<li><Link href="/articles/tech-connection" onClick={closeMenu}>Технологическое присоединение к системам теплоснабжения</Link></li>
                      </ul>
                    )}
                  </li>

                  <li><Link href="/tariffs" onClick={closeMenu}>Тарифы</Link></li>
                  <li><Link href="/payment" onClick={closeMenu}>Передача показаний и оплата услуг</Link></li>
                  <li><Link href="/contracts" onClick={closeMenu}>Типовые договоры</Link></li>
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

      {/* Бургер-меню для мобилок */}
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
                    <button onClick={() => setNestedOpen(!nestedOpen)}>Важная информация ▸</button>
                    {nestedOpen && (
                      <ul>
                        <li><Link href="/announcement_mine" onClick={closeMenu}>Важное объявление</Link></li>
                        <li><Link href="/announcements" onClick={closeMenu}>Официальные сообщения</Link></li>
                        <li><Link href="/outage-schedule" onClick={closeMenu}>График отключения</Link></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button onClick={() => setArticlesOpen(!articlesOpen)}>Статьи ▸</button>
                    {articlesOpen && (
                      <ul>
                        <li><Link href="/articles/plan-ozp" onClick={closeMenu}>План подготовки к отопительному сезону</Link></li>
                        <li><Link href="/articles/normatives" onClick={closeMenu}>Нормативы потребления</Link></li>
                        <li><Link href="/articles/service-quality" onClick={closeMenu}>Требования к качеству</Link></li>
                        <li><Link href="/articles/no-meter-data" onClick={closeMenu}>Последствия непредоставления</Link></li>
                        <li><Link href="/articles/promivka" onClick={closeMenu}>Промывка систем отопления</Link></li>
						<li><Link href="/articles/tech-connection" onClick={closeMenu}>Технологическое присоединение к системам теплоснабжения</Link></li>
                      </ul>
                    )}
                  </li>
                  <li><Link href="/tariffs" onClick={closeMenu}>Тарифы</Link></li>
                  <li><Link href="/payment" onClick={closeMenu}>Передача показаний и оплата услуг</Link></li>
                  <li><Link href="/contracts" onClick={closeMenu}>Типовые договоры</Link></li>
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