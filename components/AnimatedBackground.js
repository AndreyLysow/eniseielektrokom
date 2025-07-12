"use client";
import { useRef, useEffect } from "react";
import styles from "../styles/animatedBackground.module.css";

export default function AnimatedBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1; // замедление в 10 раз
    }
  }, []);

  return (
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
  );
}
