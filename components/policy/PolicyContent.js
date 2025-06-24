"use client";

import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/policy.module.css";         // отдельный CSS
import Image from "next/image";

/** Читает текст из /public/privacy-policy.md и выводит его в разметке */
export default function PolicyContent() {
  const [md, setMd] = useState("");
  const videoRef = useRef(null);

  // ── загрузка markdown ──────────────────────────────────────────────
  useEffect(() => {
    fetch("/privacy-policy.md")
      .then(r => r.text())
      .then(setMd)
      .catch(err => console.error("MD load error:", err));
  }, []);

  // ── устанавливаем скорость видео ──────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 0.25;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* ВИДЕО-ФОН */}
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

      {/* СОДЕРЖИМОЕ */}
      <main className={styles.content}>
        <h1 className={styles.title}>Политика обработки персональных данных</h1>

        <article className={styles.markdown}>
          <ReactMarkdown>{md}</ReactMarkdown>
        </article>

     
      </main>
    </div>
  );
}
