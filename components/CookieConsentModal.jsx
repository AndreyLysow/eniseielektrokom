// components/CookieConsentModal.jsx
'use client';               // если вы уже перешли на App Router
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ CookieConsentModal.module.css';

export default function CookieConsentModal({ open, onClose }) {
  const router = useRouter();

  // скрываем модалку, если пользователь уже давал согласие
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cookiesAccepted') === 'true') {
        onClose();
      }
    }
  }, [onClose]);

  // отправляем данные + фиксируем согласие
  const accept = () => {
    const payload = {
      date: new Date().toISOString(),
      // ip лучше получать на бэке — здесь оставляем заглушку
      ip: '0.0.0.0',
      ua: navigator.userAgent,
      os: navigator.platform
    };

    fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(console.error);

    localStorage.setItem('cookiesAccepted', 'true');
    onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <button className={styles.close} onClick={onClose}>&times;</button>

        <p className={styles.text}>
          Мы используем <b>cookie-файлы</b>, чтобы сделать сайт удобнее.
          Продолжая работу, вы соглашаетесь на обработку данных в рамках&nbsp;
          <span
            className={styles.link}
            onClick={() => router.push('/privacy-policy')}
          >
            политики конфиденциальности
          </span>.
        </p>

        <button className={styles.ok} onClick={accept}>Согласен</button>
      </div>
    </div>
  );
}
