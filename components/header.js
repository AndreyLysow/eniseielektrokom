"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Header.module.css";

const menuData = {
  main: [
    { title: "Главная", link: "/" },
    {
      title: "Абонентам",
      submenu: [
        {
          title: "Важная информация",
          submenu: [
            { title: "Важное объявление", link: "/announcement_mine" },
            { title: "Официальные сообщения", link: "/announcements" },
            { title: "График отключений", link: "/outage-schedule" }
          ]
        },
        {
          title: "Статьи и нормативы",
          submenu: [
            { title: "План подготовки к ОЗП 2025–2026 гг.", link: "/articles/plan-ozp" },
            { title: "Нормативы потребления отопления", link: "/articles/normatives" },
            { title: "Требования к качеству коммунальных услуг", link: "/articles/service-quality" },
            { title: "Последствия непредоставления показаний", link: "/articles/no-meter-data" },
            { title: "Промывка систем отопления (требования)", link: "/articles/promivka" },
            { title: "Технологическое присоединение к теплосетям", link: "/articles/tech-connection" }
          ]
        },
        { title: "Тарифы", link: "/tariffs" },
        { title: "Передача показаний и оплата услуг", link: "/payment" },
        { title: "Типовые договоры", link: "/contracts" },
        { title: "Сообщить об аварии", link: "/DispatchCenter" }
      ]
    },
    { title: "Новости", link: "/news" },
    { title: "Раскрытие информации", link: "/info" },
    { title: "Личный кабинет", link: "https://lk.eniseiteplokom.ru", external: true }
  ]
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNested, setOpenNested] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenNested(null);
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

      {/* Desktop menu */}
      {!isMobile && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuData.main.map((item, index) => (
              <li
                key={index}
                className={item.submenu ? styles.dropdown : ""}
                onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                {item.link ? (
                  <Link href={item.link} target={item.external ? "_blank" : "_self"} onClick={closeMenu}>
                    {item.title}
                  </Link>
                ) : (
                  <button className={styles.dropdownBtn}>
                    {item.title} {item.submenu && <FaChevronDown />}
                  </button>
                )}

                {item.submenu && openDropdown === index && (
                  <ul className={styles.dropdownMenu}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={subItem.submenu ? styles.hasSubmenu : ""}
                        onMouseEnter={() => subItem.submenu && setOpenNested(subIndex)}
                        onMouseLeave={() => subItem.submenu && setOpenNested(null)}
                      >
                        {subItem.link ? (
                          <Link href={subItem.link} onClick={closeMenu}>
                            {subItem.title}
                          </Link>
                        ) : (
                          <span>
                            {subItem.title} <FaChevronRight />
                          </span>
                        )}

                        {subItem.submenu && openNested === subIndex && (
                          <ul className={styles.nestedMenu}>
                            {subItem.submenu.map((nested, nIndex) => (
                              <li key={nIndex}>
                                <Link href={nested.link} onClick={closeMenu}>
                                  {nested.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Phone */}
      <div className={styles.contacts}>
        <a href="tel:+73919524957" className={styles.phone}>
          +7 (39195) 2-49-57
        </a>
      </div>

      {/* Mobile burger */}
      <button className={styles.burger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMobile && menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {menuData.main.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <button onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                      {item.title} ▾
                    </button>
                    {openDropdown === index && (
                      <ul>
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            {subItem.submenu ? (
                              <>
                                <button onClick={() => setOpenNested(openNested === subIndex ? null : subIndex)}>
                                  {subItem.title} ▸
                                </button>
                                {openNested === subIndex && (
                                  <ul>
                                    {subItem.submenu.map((nested, nIndex) => (
                                      <li key={nIndex}>
                                        <Link href={nested.link} onClick={closeMenu}>
                                          {nested.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link href={subItem.link} onClick={closeMenu}>
                                {subItem.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.link} target={item.external ? "_blank" : "_self"} onClick={closeMenu}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}