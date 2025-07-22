"use client";

import { useRef, useEffect } from "react";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; 
    }
  }, []);

  return (
    <div className={styles.videoWrap}>
      <video
        ref={videoRef}
        src="/eniseysk_slow.mp4" // ✅ Путь от public
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
    </div>
  );
}