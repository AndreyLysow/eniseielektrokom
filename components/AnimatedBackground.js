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
      // Устанавливаем скорость воспроизведения для получения 12-15 секунд
      // Если оригинальное видео ~5 секунд, то для 12-15 сек нужна скорость ~0.33-0.42
      const playbackRate = 0.33; // примерно 15 секунд для 5-секундного видео
      
      const setPlaybackRate = () => {
        if (video.playbackRate !== playbackRate) {
          video.playbackRate = playbackRate;
        }
      };

      // Устанавливаем скорость после загрузки метаданных
      video.addEventListener('loadedmetadata', setPlaybackRate);
      video.addEventListener('loadeddata', setPlaybackRate);
      
      // Устанавливаем скорость сразу
      video.playbackRate = playbackRate;

      // Плавный переход при приближении к концу видео
      const handleTimeUpdate = () => {
        if (!video.duration) return;
        
        const timeRemaining = video.duration - video.currentTime;
        
        // Если осталось меньше 1 секунды до конца, начинаем плавный fade-out
        if (timeRemaining < 1 && !isTransitioningRef.current) {
          isTransitioningRef.current = true;
          
          // Плавно уменьшаем прозрачность за 1 секунду
          video.style.transition = 'opacity 1s ease-in-out';
          video.style.opacity = '0';
        } 
        // В начале нового цикла (первые 0.5 секунды) плавно возвращаем прозрачность
        else if (video.currentTime < 0.5 && isTransitioningRef.current) {
          video.style.transition = 'opacity 0.8s ease-in-out';
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