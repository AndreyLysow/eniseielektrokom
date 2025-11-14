"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Устанавливаем скорость воспроизведения
      const setPlaybackRate = () => {
        video.playbackRate = 0.35;
      };

      // Устанавливаем скорость после загрузки метаданных
      video.addEventListener('loadedmetadata', setPlaybackRate);
      video.addEventListener('loadeddata', setPlaybackRate);
      
      // Устанавливаем скорость сразу
      video.playbackRate = 0.35;

      // Попытка autoplay (на iOS может не сработать)
      video.play().catch(() => {
        console.log("Автовоспроизведение заблокировано, ждем взаимодействия");
      });

      // ✅ Хак для iOS: запуск при первом касании
      const playOnTouch = () => {
        video.play().catch(() => {});
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
          src="/eniseysk2.mp4?v=2" // ✅ Путь из public с версией для обновления кэша
          className={styles.videoBg}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          onError={() => setVideoError(true)} // Если видео не загрузилось
        />
      ) : (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/logoetk.png"
            alt="Фон"
            className={styles.videoBg}
            fill
            quality={75}
            priority={false}
            sizes="100vw"
          />
        </div>
      )}
      <div className={styles.overlay} />
    </div>
  );
}