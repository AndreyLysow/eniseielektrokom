// pages/_app.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // проверяем куки
    const accepted = localStorage.getItem("cookiesAccepted");
    setShowModal(accepted !== "true");

    // --- Яндекс.Метрика SPA hits ---
    const handleRouteChange = (url) => {
      if (typeof window.ym === "function") {
        window.ym(104008308, "hit", url);
      }
    };

    // первый hit
    handleRouteChange(window.location.pathname + window.location.search);

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (!Component) return null;

  return (
    <>
      <Component {...pageProps} />
      <CookieConsentModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}