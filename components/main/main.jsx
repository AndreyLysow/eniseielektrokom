// ===================== HomePage.jsx =====================
"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import styles from "../../styles/main.module.css";

const LoginModal = dynamic(() => import("../LoginModal"), { ssr: false });
const RegisterModal = dynamic(() => import("../RegisterModal"), { ssr: false });

export default function HomePage() {
  const videoRef = useRef(null);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible));
    }, { threshold: 0.2 });
    document.querySelectorAll(`.${styles.card}`).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const cards = [
    { img: "/attention.png", title: "Объявления", text: "Актуальная информация для потребителей коммунальных услуг" },
    { img: "/pay.png", title: "Оплата услуг", text: "Способы подачи показаний и оплаты коммунальных услуг" },
    { img: "/grafik.png", title: "График отключения", text: "Информация об отключениях ГВС в межотопительный период" },
	{ img: "/tehpris.png", title: "Тех. присоединение", text: "Информация о технологическом присоединении" },
	{ img: "/avaria.png", title: "Сообщить о аварии", text: "Сообщить о технологических нарушениях на системах ГВС и теплоснабжения" }
  ];

  return (
    <main className={styles.wrapper}>
      <Header />

      {/* Видео‑фон */}
      <div className={styles.videoWrap}>
        <video ref={videoRef} src="/eniseysk.mp4" className={styles.videoBg} autoPlay muted loop playsInline />
        <div className={styles.overlay} />
      </div>

      {/* Карточки */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {cards.map(c => (
            <div key={c.title} className={styles.card}>
              <Image src={c.img} alt={c.title} fill />
              <div className={styles.cardOverlay}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <button className={styles.cardButton}>Подробнее</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {login && <LoginModal onClose={() => setLogin(false)} />}
      {register && <RegisterModal onClose={() => setRegister(false)} />}
    </main>
  );
}