import { useEffect, useRef, useState } from "react";

/**
 * Кастомный хук для цикличного воспроизведення видео вперед-назад
 * и автоматического переключения роликов после двух циклов.
 * @param {Array<{src: string, title: string}>} videoList
 * @param {number} forwardRate
 * @param {number} reverseStep
 * @returns {{ videoRef: React.RefObject<HTMLVideoElement>, currentVideo: string, currentTitle: string, fade: boolean }}
 */
export function useVideoLooper(videoList, forwardRate = 0.2, reverseStep = 0.04) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);
  const reverseInterval = useRef(null);

  // Управление событием timeupdate
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = forwardRate;
    video.play();

    function onTimeUpdate() {
      if (forward && video.currentTime >= video.duration - 0.5) {
        setForward(false);
      } else if (!forward && video.currentTime <= 0.5) {
        setForward(true);
        setCycleCount(prev => prev + 1);
      }
    }

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [forward, forwardRate]);

  // Обратное воспроизведение
  useEffect(() => {
    const video = videoRef.current;
    if (!forward && video) {
      reverseInterval.current = setInterval(() => {
        if (video.currentTime > 0) {
          video.currentTime -= reverseStep;
        } else {
          clearInterval(reverseInterval.current);
          reverseInterval.current = null;
          setForward(true);
          setCycleCount(prev => prev + 1);
        }
      }, 40);
    }
    return () => {
      if (reverseInterval.current) {
        clearInterval(reverseInterval.current);
        reverseInterval.current = null;
      }
    };
  }, [forward, reverseStep]);

  // Смена видео после двух циклов
  useEffect(() => {
    if (cycleCount >= 2) {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(i => (i + 1) % videoList.length);
        setForward(true);
        setCycleCount(0);
        setFade(true);
      }, 1000);
    }
  }, [cycleCount, videoList.length]);

  // Перезагрузка видео при смене индекса
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play();
    }
  }, [currentIndex]);

  return {
    videoRef,
    currentVideo: videoList[currentIndex].src,
    currentTitle: videoList[currentIndex].title,
    fade
  };
}