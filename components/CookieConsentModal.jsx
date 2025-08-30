// components/CookieConsentModal.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/router"; // pages-router ок
import styles from "../styles/CookieConsentModal.module.css";

export default function CookieConsentModal(props = {}) {
  const { open = false, onClose = () => {} } = props;
  const router = useRouter();

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const accepted = localStorage.getItem("cookiesAccepted") === "true";
        if (accepted) onClose();
      }
    } catch (e) {
      // localStorage может быть недоступен в приватных режимах
      console.warn("CookieConsent check failed:", e);
    }
  }, [onClose]);

  const accept = async () => {
    try {
      const payload = {
        date: new Date().toISOString(),
        ip: "0.0.0.0", // реальный IP лучше на бэке
        ua: typeof navigator !== "undefined" ? navigator.userAgent : "",
        os: typeof navigator !== "undefined" ? navigator.platform : ""
      };

      // не блокируем UI, лог — best-effort
      fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch {}

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("cookiesAccepted", "true");
      }
    } catch {}

    onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.card}>
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          &times;
        </button>

        <p className={styles.text}>
          Мы используем <b>cookie-файлы</b>, чтобы сделать сайт удобнее. Продолжая работу, вы
          соглашаетесь на обработку данных в рамках{" "}
          <a
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              router.push("/privacy-policy");
            }}
            href="/privacy-policy"
          >
            политики конфиденциальности
          </a>.
        </p>

        <button className={styles.ok} onClick={accept}>Согласен</button>
      </div>
    </div>
  );
}