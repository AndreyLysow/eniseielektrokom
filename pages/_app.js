// pages/_app.js
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/careersPage.css"; 
import "@/styles/ohsPage.css";

// грузим модалку только на клиенте
const CookieConsentModal = dynamic(
  () => import("../components/CookieConsentModal"),
  { ssr: false }
);

export default function App(props = {}) {
  const { Component, pageProps = {} } = props;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // защита от SSR
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem("cookiesAccepted");
    setShowModal(accepted !== "true");
  }, []);

  // на всякий
  if (!Component) return null;

  return (
    <>
      <Component {...pageProps} />
      <CookieConsentModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}