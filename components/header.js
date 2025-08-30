"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Header.module.css";

/* helpers */
const isBranch = (item) => Array.isArray(item?.submenu);
const hasHref  = (item) => typeof item?.link === "string" && item.link.trim().length > 0;

/* меню-данные */
const menuData = {
  main: [
    { title: "Главная", link: "/" },
    {
      title: "Абонентам",
      submenu: [
        {
          title: "Информация для абонентов",
          submenu: [
            { title: "Важное объявление",            link: "/announcement_mine" },
            { title: "Официальные сообщения", link: "/announcements" },
            { title: "Тарифы",                link: "/tariffs" },
            { title: "Типовые договоры",      link: "/contracts" },
            { title: "График отключений",     link: "/outage-schedule" },
          ],
        },
        {
          title: "Статьи и нормативы",
          submenu: [
            { title: "План подготовки к ОЗП 2025–2026 гг.",        link: "/articles/plan-ozp" },
            { title: "Нормативы потребления отопления",            link: "/articles/normatives" },
            { title: "Требования к качеству коммунальных услуг",   link: "/articles/service-quality" },
            { title: "Последствия непредоставления показаний",     link: "/articles/no-meter-data" },
            { title: "Промывка систем отопления (требования)",     link: "/articles/promivka" },
            { title: "Технологическое присоединение к теплосетям", link: "/articles/tech-connection" },
          ],
        },
        { title: "Передача показаний и оплата услуг", link: "/payment" },
        { title: "Сообщить об аварии",                link: "/DispatchCenter" },
      ],
    },
    { title: "Новости",              link: "/news" },
    { title: "Раскрытие информации", link: "/info" },
    { title: "Личный кабинет",       link: "https://lk.eniseiteplokom.ru", external: true },
  ],
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // desktop: какой корневой открыт
  const [openDropdown, setOpenDropdown] = useState(null);

  // mobile: открыт раздел 1-го уровня и конкретная вложенная ветка
  const [openMobileLevel1, setOpenMobileLevel1] = useState(null);
  const [openMobileNested, setOpenMobileNested] = useState({}); // key "i-j" → bool

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileLevel1(null);
    setOpenMobileNested({});
  }, []);

  const toggleMobileLevel1 = (i) =>
    setOpenMobileLevel1((curr) => (curr === i ? null : i));

  const toggleMobileNested = (i, j) => {
    const key = `${i}-${j}`;
    setOpenMobileNested((m) => ({ ...m, [key]: !m[key] }));
  };

  return (
    <header className={styles.header}>
      {/* логотип + название */}
      <div className={styles.brand}>
        <Link href="/" prefetch={false} onClick={closeAll}>
          <Image src="/logoetk.png" alt="Енисейтеплоком" width={100} height={100} priority />
        </Link>
        {!isMobile && (
          <span className={styles.orgName}>
            ООО &laquo;Енисейская<br />теплоснабжающая компания&raquo;
          </span>
        )}
      </div>

      {/* десктопное меню */}
      {!isMobile && (
        <nav className={styles.nav} aria-label="Главное меню">
          <ul className={styles.navList}>
            {menuData.main.map((item, i) => {
              const key = `${item?.title || "root"}-${i}`;

              if (!isBranch(item)) {
                return (
                  <li key={key}>
                    {hasHref(item) ? (
                      <Link
                        href={item.link}
                        prefetch={false}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={closeAll}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={key}
                  className={styles.dropdown}
                  onMouseEnter={() => setOpenDropdown(i)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={styles.dropdownBtn}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === i}
                  >
                    {item.title} <FaChevronDown />
                  </button>

                  {openDropdown === i && (
                    <ul className={styles.dropdownMenu} role="menu">
                      {item.submenu.filter(Boolean).map((sub, j) => {
                        const subKey = `${sub?.title || "sub"}-${i}-${j}`;

                        if (!isBranch(sub)) {
                          return (
                            <li key={subKey} role="none">
                              {hasHref(sub) ? (
                                <Link
                                  href={sub.link}
                                  prefetch={false}
                                  onClick={closeAll}
                                  role="menuitem"
                                  className={styles.itemBase}
                                >
                                  {sub.title}
                                </Link>
                              ) : (
                                <span role="menuitem" className={styles.itemBase}>{sub?.title || "—"}</span>
                              )}
                            </li>
                          );
                        }

                        return (
                          <li key={subKey} className={styles.hasSubmenu} role="none">
                            <span
                              className={`${styles.itemBase} ${styles.submenuTitle}`}
                              role="menuitem"
                              aria-haspopup="true"
                            >
                              <span className={styles.submenuLabel}>{sub.title}</span>
                              <FaChevronRight className={styles.submenuChevron} aria-hidden />
                            </span>

                            <ul className={styles.nestedMenu} role="menu">
                              {sub.submenu.filter(Boolean).map((leaf, k) => {
                                const leafKey = `${leaf?.title || "leaf"}-${i}-${j}-${k}`;
                                return (
                                  <li key={leafKey} role="none">
                                    {hasHref(leaf) ? (
                                      <Link
                                        href={leaf.link}
                                        prefetch={false}
                                        onClick={closeAll}
                                        role="menuitem"
                                        className={styles.itemBase}
                                      >
                                        {leaf.title}
                                      </Link>
                                    ) : (
                                      <span role="menuitem" className={styles.itemBase}>{leaf?.title || "—"}</span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* контакты */}
      <div className={styles.contacts}>
        <a href="tel:+73919524957" className={styles.phone}>+7 (39195) 2-49-57</a>
      </div>

      {/* бургер */}
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Меню"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* мобильное меню */}
      {isMobile && menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {menuData.main.map((item, i) => {
              const key = `${item?.title || "m"}-${i}`;

              if (!isBranch(item)) {
                return (
                  <li key={key}>
                    {hasHref(item) ? (
                      <Link
                        href={item.link}
                        prefetch={false}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={closeAll}
                        className={styles.mobileLinkLikeItem}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className={styles.mobileLinkLikeItem}>{item.title}</span>
                    )}
                  </li>
                );
              }

              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => toggleMobileLevel1(i)}
                    className={`${styles.mobileParent} ${styles.mobileLinkLikeItem}`}
                    aria-expanded={openMobileLevel1 === i}
                  >
                    {item.title} ▾
                  </button>

                  {openMobileLevel1 === i && (
                    <ul>
                      {item.submenu.filter(Boolean).map((sub, j) => {
                        const subKey = `${sub?.title || "ms"}-${i}-${j}`;

                        if (!isBranch(sub)) {
                          return (
                            <li key={subKey}>
                              {hasHref(sub) ? (
                                <Link
                                  href={sub.link}
                                  prefetch={false}
                                  onClick={closeAll}
                                  className={styles.mobileLinkLikeItem}
                                >
                                  {sub.title}
                                </Link>
                              ) : (
                                <span className={styles.mobileLinkLikeItem}>{sub?.title || "—"}</span>
                              )}
                            </li>
                          );
                        }

                        const mapKey = `${i}-${j}`;
                        const isOpen = !!openMobileNested[mapKey];

                        return (
                          <li key={subKey}>
                            <button
                              type="button"
                              onClick={() => toggleMobileNested(i, j)}
                              className={`${styles.mobileChild} ${styles.mobileLinkLikeItem}`}
                              aria-expanded={isOpen}
                            >
                              {sub.title} ▸
                            </button>

                            {isOpen && (
                              <ul>
                                {sub.submenu.filter(Boolean).map((leaf, k) => {
                                  const leafKey = `${leaf?.title || "mn"}-${i}-${j}-${k}`;
                                  return (
                                    <li key={leafKey}>
                                      {hasHref(leaf) ? (
                                        <Link
                                          href={leaf.link}
                                          prefetch={false}
                                          onClick={closeAll}
                                          className={styles.mobileLinkLikeItem}
                                        >
                                          {leaf.title}
                                        </Link>
                                      ) : (
                                        <span className={styles.mobileLinkLikeItem}>{leaf?.title || "—"}</span>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}