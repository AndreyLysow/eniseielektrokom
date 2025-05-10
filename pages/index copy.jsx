import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/main.module.css";
import { FaLock, FaBars, FaTimes } from "react-icons/fa";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [playingForward, setPlayingForward] = useState(true);
  const [currentVideo, setCurrentVideo] = useState("/lesosib3.mp4");

  const videoRef = useRef(null);
  const reverseIntervalRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let reverseMode = false;
    let cycleCompleted = false;

    video.playbackRate = 0.1;
    video.play();

    const handleTimeUpdate = () => {
      if (playingForward && video.currentTime >= video.duration - 0.5) {
        setPlayingForward(false);
        reverseMode = true;
      } else if (!playingForward && video.currentTime <= 0.5) {
        if (!cycleCompleted) {
          cycleCompleted = true;
          setTimeout(() => {
            switchVideo();
          }, 500); // Небольшая пауза перед переключением
        }
        setPlayingForward(true);
        reverseMode = false;
      }
    };

    const startReverse = () => {
      if (reverseIntervalRef.current) return;
      reverseIntervalRef.current = setInterval(() => {
        if (video.currentTime > 0) {
          video.currentTime -= 0.03;
        } else {
          clearInterval(reverseIntervalRef.current);
          reverseIntervalRef.current = null;
          setPlayingForward(true);
        }
      }, 50);
    };

    const stopReverse = () => {
      if (reverseIntervalRef.current) {
        clearInterval(reverseIntervalRef.current);
        reverseIntervalRef.current = null;
      }
    };

    const switchVideo = () => {
      stopReverse();
      setCurrentVideo(prev => prev === "/lesosib3.mp4" ? "/lesosib4.mp4" : "/lesosib3.mp4");
      setPlayingForward(true);
      cycleCompleted = false;
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      stopReverse();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playingForward) {
      if (reverseIntervalRef.current) {
        clearInterval(reverseIntervalRef.current);
        reverseIntervalRef.current = null;
      }
      video.playbackRate = 0.2;
      video.play();
    } else {
      video.pause();
      reverseIntervalRef.current = setInterval(() => {
        if (video.currentTime > 0) {
          video.currentTime -= 0.03;
        } else {
          clearInterval(reverseIntervalRef.current);
          reverseIntervalRef.current = null;
          setPlayingForward(true);
        }
      }, 50);
    }
  }, [playingForward]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();             // Перезагружаем видео с новым src
    video.playbackRate = 0.2;  // Ставим скорость проигрывания
    video.play();
  }, [currentVideo]);

  return (
    <main className={styles.main}>
      {/* Шапка */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logomup2.png" alt="Логотип" width={80} height={100} />
          <span className={styles.logoText}>МУП ЖКХ Лесосибирск</span>
        </div>

        <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li><Link href="/"><a onClick={() => setMenuOpen(false)}>Главная</a></Link></li>
            <li><Link href="/consumers"><a onClick={() => setMenuOpen(false)}>Потребителям</a></Link></li>
            <li><Link href="/news"><a onClick={() => setMenuOpen(false)}>Новости</a></Link></li>
            <li><Link href="/info"><a onClick={() => setMenuOpen(false)}>Раскрытие информации</a></Link></li>
          </ul>
        </nav>

        <div className={styles.contacts}>
          <a href="tel:+73914554034" className={styles.phone}>
            +7 (39145) 5-40-34
          </a>
          <div className={styles.lockMenu}>
            <FaLock className={styles.lockIcon} />
            <div className={styles.dropdown}>
              <button onClick={() => setShowLogin(true)}>Войти</button>
              <button onClick={() => setShowRegister(true)}>Регистрация</button>
            </div>
          </div>
        </div>
      </header>

      {/* Видео и текст */}
      <section className={styles.heroSection}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          src={currentVideo}
          autoPlay
          muted
          playsInline
          key={currentVideo} // Чтобы принудительно обновлять видео при смене src
        ></video>

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Жилищно-коммунальное хозяйство<br />«Лесосибирск»
          </h1>
          <Link href="/about">
            <a className={styles.heroButton}>Подробнее</a>
          </Link>
        </div>
      </section>

      {/* Карточки */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Image src="/announcement-icon.png" alt="Объявления" width={60} height={60} />
            <h3>Объявления</h3>
            <p>Актуальная информация для потребителей коммунальных услуг</p>
          </div>
          <div className={styles.card}>
            <Image src="/payment-icon.png" alt="Оплата услуг" width={60} height={60} />
            <h3>Оплата услуг</h3>
            <p>Узнайте о способах подачи показаний и оплаты коммунальных услуг</p>
          </div>
          <div className={styles.card}>
            <Image src="/house-icon.png" alt="Технологическое присоединение" width={60} height={60} />
            <h3>Технологическое присоединение</h3>
            <p>Информация о технологическом присоединениии</p>
          </div>
        </div>
      </section>

      {/* Модальные окна */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </main>
  );
}
