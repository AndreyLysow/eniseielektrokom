"use client";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";
import styles from "../../styles/main.module.css";

const LoginModal = dynamic(() => import("../LoginModal"), { ssr: false });
const RegisterModal = dynamic(() => import("../RegisterModal"), { ssr: false });

export default function HomePage() {
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { img: "/rupor.png", title: "Объявления", text: "Актуальная информация для потребителей коммунальных услуг" },
    { img: "/pay.png", title: "Оплата услуг", text: "Способы подачи показаний и оплаты коммунальных услуг" },
    { img: "/grafik.png", title: "График отключения", text: "Информация об отключениях ГВС в межотопительный период" },
    { img: "/tehpris.png", title: "Тех. присоединение", text: "Информация о технологическом присоединении" },
    { img: "/avaria.png", title: "Сообщить о аварии", text: "Сообщить о технологических нарушениях на системах ГВС и теплоснабжения" }
  ];

  const scrollToIndex = (index) => {
    if (!listRef.current) return;
    const container = listRef.current;
    const card = container.children[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
    setActiveIndex(index);
  };

  const handleArrow = (dir) => {
    let newIndex = dir === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;
    scrollToIndex(newIndex);
  };

  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.videoWrap}>
        <video src="/eniseysk.mp4" className={styles.videoBg} autoPlay muted loop playsInline />
        <div className={styles.overlay} />
      </div>

      <section className={styles.attentionSection}>
        <div className={styles.attentionBanner}>
          <h1>Внимание абонентам!</h1>
          <p>Актуальная информация для потребителей коммунальных услуг, важные уведомления и объявления.</p>
          <Link href="/announcements" className={styles.baseButton}>Подробнее</Link>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainerWrapper}>
          <button className={`${styles.navArrow} ${styles.leftArrow}`} onClick={() => handleArrow("left")}>
            <FaChevronLeft />
          </button>

          <div ref={listRef} className={styles.cardsContainer}>
            {cards.map((c, i) => (
              <div key={c.title} className={styles.card}>
                <Image src={c.img} alt={c.title} width={100} height={100} />
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <div className={styles.cardHoverContent}>
                  <p>{c.text}</p>
                  <button className={styles.baseButton}>Подробнее</button>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navArrow} ${styles.rightArrow}`} onClick={() => handleArrow("right")}>
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {cards.map((_, i) => (
            <span key={i} className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`} />
          ))}
        </div>
      </section>

      <Footer className={styles.footer} />
    </main>
  );
}
