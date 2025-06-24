import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем Bootstrap
import '@/styles/globals.css'; // Ваши стили

import CookieConsentModal from '../components/CookieConsentModal'; // Убедись в правильном пути

export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('cookiesAccepted');
      setShowModal(accepted !== 'true');
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieConsentModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
