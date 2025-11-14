"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const pauseTimeoutRef = useRef(null);
  const isPausedRef = useRef(false);

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

      // Обработка приближения к концу видео
      const handleTimeUpdate = () => {
        if (!video.duration || isPausedRef.current) return;
        
        // Если осталось меньше 0.1 секунды до конца
        if (video.duration - video.currentTime < 0.1) {
          video.pause();
          isPausedRef.current = true;
          
          // Очищаем предыдущий таймер, если есть
          if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
          }
          
          // Ждем 2 секунды на последнем кадре
          pauseTimeoutRef.current = setTimeout(() => {
            // Плавно переходим к началу
            video.currentTime = 0;
            
            // Плавный запуск следующего цикла
            const startNextCycle = async () => {
              try {
                await video.play();
                // Постепенно увеличиваем скорость для плавного старта
                video.playbackRate = 0.1;
                const fadeIn = setInterval(() => {
                  if (video.playbackRate < 0.35) {
                    video.playbackRate = Math.min(video.playbackRate + 0.05, 0.35);
                  } else {
                    clearInterval(fadeIn);
                  }
                }, 50);
              } catch (error) {
                console.log("Ошибка воспроизведения:", error);
              }
              isPausedRef.current = false;
            };
            
            startNextCycle();
          }, 2000); // 2 секунды задержки
        }
      };

      // Обработка события окончания видео (на случай если timeupdate не сработает)
      const handleEnded = () => {
        if (isPausedRef.current) return;
        
        video.pause();
        isPausedRef.current = true;
        
        if (pauseTimeoutRef.current) {
          clearTimeout(pauseTimeoutRef.current);
        }
        
        pauseTimeoutRef.current = setTimeout(() => {
          video.currentTime = 0;
          const startNextCycle = async () => {
            try {
              await video.play();
              video.playbackRate = 0.1;
              const fadeIn = setInterval(() => {
                if (video.playbackRate < 0.35) {
                  video.playbackRate = Math.min(video.playbackRate + 0.05, 0.35);
                } else {
                  clearInterval(fadeIn);
                }
              }, 50);
            } catch (error) {
              console.log("Ошибка воспроизведения:", error);
            }
            isPausedRef.current = false;
          };
          
          startNextCycle();
        }, 2000);
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      // Попытка autoplay (на iOS может не сработать)
      video.play().catch(() => {
        console.log("Автовоспроизведение заблокировано, ждем взаимодействия");
      });

      // ✅ Хак для iOS: запуск при первом касании
      const playOnTouch = () => {
        video.play().catch(() => {});
        // Устанавливаем скорость снова при ручном запуске
        video.playbackRate = 0.35;
        isPausedRef.current = false;
      };
      document.addEventListener("touchstart", playOnTouch, { once: true });

      return () => {
        document.removeEventListener("touchstart", playOnTouch);
        video.removeEventListener('loadedmetadata', setPlaybackRate);
        video.removeEventListener('loadeddata', setPlaybackRate);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
        if (pauseTimeoutRef.current) {
          clearTimeout(pauseTimeoutRef.current);
        }
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