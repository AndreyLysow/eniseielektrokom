"use client";

import { useRef, useEffect, useState } from "react";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Устанавливаем скорость после загрузки метаданных для плавности
      const setPlaybackRate = () => {
        video.playbackRate = 0.35;
      };

      // Устанавливаем скорость сразу и после загрузки метаданных
      video.playbackRate = 0.35;
      video.addEventListener('loadedmetadata', setPlaybackRate);
      video.addEventListener('loadeddata', setPlaybackRate);

      // Попытка autoplay (на iOS может не сработать)
      video.play().catch(() => {
        console.log("Автовоспроизведение заблокировано, ждем взаимодействия");
      });

      // ✅ Хак для iOS: запуск при первом касании
      const playOnTouch = () => {
        video.play().catch(() => {});
        // Устанавливаем скорость снова при ручном запуске
        video.playbackRate = 0.35;
      };
      document.addEventListener("touchstart", playOnTouch, { once: true });

      return () => {
        document.removeEventListener("touchstart", playOnTouch);
        video.removeEventListener('loadedmetadata', setPlaybackRate);
        video.removeEventListener('loadeddata', setPlaybackRate);
      };
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