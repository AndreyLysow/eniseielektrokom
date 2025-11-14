"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Устанавливаем скорость воспроизведения (в 3 раза медленнее для увеличения продолжительности)
      const playbackRate = 0.35 / 3; // примерно 0.117
      
      const setPlaybackRate = () => {
        video.playbackRate = playbackRate;
      };

      // Устанавливаем скорость после загрузки метаданных
      video.addEventListener('loadedmetadata', setPlaybackRate);
      video.addEventListener('loadeddata', setPlaybackRate);
      
      // Устанавливаем скорость сразу
      video.playbackRate = playbackRate;

      // Плавный переход при приближении к концу видео
      const handleTimeUpdate = () => {
        if (!video.duration || isTransitioningRef.current) return;
        
        // Если осталось меньше 0.3 секунды до конца, начинаем плавный переход
        if (video.duration - video.currentTime < 0.3) {
          isTransitioningRef.current = true;
          
          // Плавно уменьшаем прозрачность
          video.style.transition = 'opacity 0.3s ease-in-out';
          video.style.opacity = '0.3';
          
          // Когда видео закончится, оно автоматически перезапустится благодаря loop
        } else if (video.currentTime < 0.5 && isTransitioningRef.current) {
          // Плавно возвращаем прозрачность в начале нового цикла
          video.style.opacity = '1';
          isTransitioningRef.current = false;
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      // Попытка autoplay (на iOS может не сработать)
      video.play().catch(() => {
        console.log("Автовоспроизведение заблокировано, ждем взаимодействия");
      });

      // ✅ Хак для iOS: запуск при первом касании
      const playOnTouch = () => {
        video.play().catch(() => {});
        video.playbackRate = playbackRate;
      };
      document.addEventListener("touchstart", playOnTouch, { once: true });

      return () => {
        document.removeEventListener("touchstart", playOnTouch);
        video.removeEventListener('loadedmetadata', setPlaybackRate);
        video.removeEventListener('loadeddata', setPlaybackRate);
        video.removeEventListener('timeupdate', handleTimeUpdate);
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