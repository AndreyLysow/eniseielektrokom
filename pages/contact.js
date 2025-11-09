"use client";

import { useEffect } from "react";
import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import AnimatedBackground from "../components/AnimatedBackground";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "../styles/contact.module.css";

export default function ContactPage() {
  useEffect(() => {
    if (window.ymaps) {
      initMap();
    } else {
      window.initializeMap = initMap;
    }
  }, []);

  const initMap = () => {
    window.ymaps.ready(() => {
      // Основной офис
      const mapOffice = new window.ymaps.Map("map-office", {
        center: [58.403349, 92.250467],
        zoom: 16,
      });

      const placemarkOffice = new window.ymaps.Placemark(
        [58.403349, 92.250467],
        {
          hintContent: "ООО «Енисейэлектроком»",
          balloonContent: "663148, Красноярский край, Енисейский район, с. Верхнепашино, ул. Обручева, стр. 2",
        }
      );
      mapOffice.geoObjects.add(placemarkOffice);

      // Пункт приёма платежей
      const mapPayment = new window.ymaps.Map("map-payment", {
        center: [58.453215, 92.178808],
        zoom: 16,
      });

      const placemarkPayment = new window.ymaps.Placemark(
        [58.453215, 92.178808],
        {
          hintContent: "Пункт приёма платежей",
          balloonContent: "г. Енисейск, ул. Кирова, 81",
        }
      );
      mapPayment.geoObjects.add(placemarkPayment);
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <AnimatedBackground />
      <Header />

      <main className={styles.contentWrapper}>
        <Breadcrumbs />
        <h1 className={styles.title}>Контакты</h1>

        {/* Основной офис */}
        <div className={styles.contactBlock}>
          <h2 className={styles.blockTitle}>Основной офис</h2>
          <p><strong>Адрес:</strong> 663148, Красноярский край, Енисейский район, с. Верхнепашино, ул. Обручева, стр. 2</p>
          <p><strong>Email:</strong> <a href="mailto:eniseielektrokom@mail.ru">eniseielektrokom@mail.ru</a></p>
          <p><strong>Телефон:</strong> <a href="tel:+73919524957">+7 (39195) 2-49-57</a></p>
          <div id="map-office" className={styles.map}></div>
        </div>

        {/* Пункт приёма платежей */}
        <div className={styles.contactBlock}>
          <h2 className={styles.blockTitle}>Пункт приёма платежей</h2>
          <p><strong>Адрес:</strong> г. Енисейск, ул. Кирова, 81</p>
          <div id="map-payment" className={styles.map}></div>
        </div>
      </main>

      <Footer />

      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=52241f26-18af-47cd-a678-2dfa50278a3e&lang=ru_RU"
        onLoad={() => window.initializeMap && window.initializeMap()}
      />
    </div>
  );
}