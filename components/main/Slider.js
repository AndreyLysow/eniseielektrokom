"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../../styles/Slider.module.css";

export default function Slider() {
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      img: "/rupor.png",
      title: "Объявления",
      text: "Актуальная информация для потребителей коммунальных услуг",
      href: "/announcements",
    },
    {
      img: "/pay2.png",
      title: "Оплата услуг",
      text: "Способы подачи показаний и оплаты коммунальных услуг",
      href: "/payment",
    },
    {
      img: "/grafik2.png",
      title: "График отключения",
      text: "Информация об отключениях ГВС в межотопительный период",
      href: "/outage-schedule",
    },
    {
      img: "/tehpris2.png",
      title: "Тех. присоединение",
      text: "Информация о технологическом присоединении",
      href: "/connection",
    },
    {
      img: "/avaria2.png",
      title: "Сообщить об аварии",
      text: "Сообщить об аварии на системах ГВС и теплоснабжения",
      href: "/DispatchCenter",
    },
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
    <section className={styles.cardsSection}>
      <div className={styles.cardsContainerWrapper}>
        <button className={`${styles.navArrow} ${styles.leftArrow}`} onClick={() => handleArrow("left")}>
          <FaChevronLeft />
        </button>

        <div ref={listRef} className={styles.cardsContainer}>
          {cards.map((c) => (
            <div key={c.title} className={styles.card}>
              <Image src={c.img} alt={c.title} width={100} height={100} />
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <div className={styles.cardHoverContent}>
                <p>{c.text}</p>
                <Link href={c.href}>
                  <button className={styles.baseButton}>Подробнее</button>
                </Link>
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
  );
}