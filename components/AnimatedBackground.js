"use client";

import { useRef, useEffect, useState } from "react";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 0.35;

      // Попытка autoplay (на iOS может не сработать)
      video.play().catch(() => {
        console.log("Автовоспроизведение заблокировано, ждем взаимодействия");
      });

      // ✅ Хак для iOS: запуск при первом касании
      const playOnTouch = () => {
        video.play().catch(() => {});
      };
      document.addEventListener("touchstart", playOnTouch, { once: true });

      return () => document.removeEventListener("touchstart", playOnTouch);
    }
  }, []);

  return (
    <div className={styles.videoWrap}>
      {!videoError ? (
        <video
          ref={videoRef}
          src="/eniseysk2.mp4" // ✅ Путь из public
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onError={() => setVideoError(true)} // Если видео не загрузилось
        />
      ) : (
        <img
          src="/logoetk.png" // ✅ Fallback картинка
          alt="Фон"
          className={styles.videoBg}
        />
      )}
      <div className={styles.overlay} />
    </div>
  );
}