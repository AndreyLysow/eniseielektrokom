"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import AnimatedBackground from "../AnimatedBackground";
import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/policy.module.css";

export default function PolicyContent() {
  const [md, setMd] = useState("");

  // Загрузка markdown
  useEffect(() => {
    fetch("/privacy-policy.md")
      .then(r => r.text())
      .then(setMd)
      .catch(err => console.error("MD load error:", err));
  }, []);

  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />

      <main className={styles.content}>
        <Breadcrumbs />

        <article className={styles.markdown}>
          <ReactMarkdown>{md}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
