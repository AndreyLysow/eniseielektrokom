// HomePage.jsx (полностью переписанный)
"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image   from "next/image";
import Header  from "../header";
import Footer  from "../footer";
import styles  from "../../styles/main.module.css";

// Ленивая загрузка модалок, откроются только по событию
const LoginModal    = dynamic(() => import("../LoginModal"),    { ssr: false });
const RegisterModal = dynamic(() => import("../RegisterModal"), { ssr: false });

export default function HomePage() {
  const videoRef = useRef(null);
  const [showLogin,    setShowLogin]    = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  /* скорость видео */
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 0.25;
      v.play().catch(() => {});
    }
  }, []);

  /* анимация карточек */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.15 }
    );
    document.querySelectorAll("." + styles.card).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* кнопка наверх */
  const [topBtn, setTopBtn] = useState(false);
  useEffect(() => {
    const onScroll = () => setTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className={styles.mainWrapper}>
      <Header />

      {/* Фикс‑видео */}
      <div className={styles.videoWrap}>
        <video ref={videoRef} className={styles.videoBg} src="/eniseysk.mp4" autoPlay muted loop playsInline />
        <div className={styles.overlay} />
      </div>

      {/* Карточки */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image src="/announcement-icon.png" alt="Объявления" width={60} height={60} />
            <h3>Объявления</h3>
            <p>Актуальная информация для потребителей коммунальных услуг</p>
          </div>
          <div className={styles.card}>
            <Image src="/payment-icon.png" alt="Оплата" width={60} height={60} />
            <h3>Оплата услуг</h3>
            <p>Способы подачи показаний и оплаты коммунальных услуг</p>
          </div>
          <div className={styles.card}>
            <Image src="/house-icon.png" alt="Присоединение" width={60} height={60} />
            <h3>Технологическое присоединение</h3>
            <p>Информация о технологическом присоединении</p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Кнопка "Наверх" */}
      <button onClick={scrollTop} className={`scroll-to-top ${topBtn ? styles.show : ""}`} aria-label="Наверх">↑</button>

      {/* Модалки (открываешь через setShowLogin(true) и т.д.) */}
      {showLogin    && <LoginModal    onClose={() => setShowLogin(false)}    />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </main>
  );
}