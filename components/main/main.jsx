import { useRef, useEffect } from "react";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";
import Slider from "./Slider"; 
import styles from "../../styles/main.module.css";

export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1; // замедление в 5 раз
    }
  }, []);

  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          src="/eniseysk.mp4"
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay} />
      </div>

      <section className={styles.attentionSection}>
        <div className={styles.attentionBanner}>
          <h1>Внимание абонентам!</h1>
          <p>Актуальная информация для потребителей коммунальных услуг, важные уведомления и объявления.</p>
          <Link href="/announcements" className={styles.attentionButton}>
            Подробнее
          </Link>
        </div>
      </section>

      <Slider />

      <Footer className={styles.footer} />
    </main>
  );
}
