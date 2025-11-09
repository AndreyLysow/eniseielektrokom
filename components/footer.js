"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import ScrollUpIcon from "../public/icons/scroll-up.png";
import styles from "../styles/Footer.module.css"; // убедись, что путь верный

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowScroll(scrollPosition > 50);
    };

    if (typeof document !== "undefined") {
      document.addEventListener("scroll", checkScrollTop);
    }

    return () => {
      document.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogoSection}>
            <Image
              src="/images/logoelectrokom.svg"
              alt="Енисейэлектроком"
              width={140}
              height={140}
              className={styles.footerLogo}
              unoptimized
            />
            <span className={styles.footerOrgName}>
              ООО Енисейская электроснабжающая<br />компания
            </span>
          </div>

          <div className={styles.footerSection}>
            <span className={styles.footerTitle}>Компания</span>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">О компании</Link></li>
              <li><Link href="/contact">Контакты</Link></li>
              <li><Link href="/CompanyDetails">Реквизиты</Link></li>
              <li><Link href="/vacancies">Вакансии</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <span className={styles.footerTitle}>Информация</span>
            <ul className={styles.footerLinks}>
              <li><Link href="/info">Раскрытие информации</Link></li>
              <li><Link href="/privacy-policy">Политика конфиденциальности</Link></li>
              <li><Link href="/sitemap">Карта сайта</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <span className={styles.footerTitle}>Мы в соцсетях</span>
            <p>Подпишитесь, чтобы не пропустить новости:</p>
            <div className={styles.footerSocialIcons}>
			  <Link href="https://vk.com/teplokom24" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/vk.svg" alt="ВКонтакте" width={24} height={24} style={{ objectFit: 'contain' }} />
              </Link>
              <Link href="https://t.me/eniseyenergokom" target="_blank">
                <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © 2025&nbsp;
          <Link href="https://port-443.ru" target="_blank" rel="noopener noreferrer">
            <span>PORT443</span>
          </Link>
          &nbsp;— разработка сайта.
        </p>
      </div>

      <button
        className={`${styles.scrollToTop} ${showScroll ? styles.show : ""}`}
        onClick={scrollToTop}
        aria-label="Наверх"
      >
        <Image src={ScrollUpIcon} alt="Наверх" width={40} height={40} />
      </button>
    </footer>
  );
};

export default Footer;
