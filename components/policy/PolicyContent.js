"use client";

import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/policy.module.css";

export default function PolicyContent() {
  const [md, setMd] = useState("");
  const videoRef = useRef(null);

  // Загрузка markdown
  useEffect(() => {
    fetch("/privacy-policy.md")
      .then(r => r.text())
      .then(setMd)
      .catch(err => console.error("MD load error:", err));
  }, []);

  // Устанавливаем скорость видео
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 0.25;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          className={styles.videoBg}
          src="/eniseysk.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay} />
      </div>

      <main className={styles.content}>
        <article className={styles.markdown}>
          <ReactMarkdown>{md}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
