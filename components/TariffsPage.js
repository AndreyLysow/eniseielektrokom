"use client";

import Breadcrumbs from "./Breadcrumbs";
import styles from "../styles/tariffs.module.css";
import AnimatedBackground from "./AnimatedBackground";

export default function TariffsPage() {
  const documents = [
    {
      name: "Приказ МТП КК №154-п от 12.12.2024 — Тариф на техприсоединение к сетям теплоснабжения в г.Енисейске на 2025 год",
      file: "/documents/tariff-154p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №12-п от 20.02.2025 — Тариф на техприсоединение к сетям теплоснабжения в Енисейском районе на 2025 год",
      file: "/documents/tariff-12p-2025.pdf",
    },
    {
      name: "Приказ МТП КК №305-п от 19.12.2024 — Тариф на тепловую энергию 2025–2027 гг.",
      file: "/documents/tariff-305p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №410-п от 19.12.2024 — Тариф на теплоноситель 2025–2027 гг.",
      file: "/documents/tariff-410p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №411-п от 19.12.2024 — Тариф на ГВС в открытых системах 2025–2027 гг.",
      file: "/documents/tariff-411p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №412-п от 19.12.2024 — Тариф на ГВС в закрытых системах 2025–2027 гг.",
      file: "/documents/tariff-412p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №53-п от 31.10.2024 — Тариф на тепловую энергию",
      file: "/documents/tariff-53p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №54-п от 31.10.2024 — Тариф на теплоноситель",
      file: "/documents/tariff-54p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №55-п от 31.10.2024 — Тариф на горячую воду в ОСТ",
      file: "/documents/tariff-55p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №56-п от 31.10.2024 — Тариф на горячую воду в ЗСТ",
      file: "/documents/tariff-56p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №38-п от 19.09.2024 — Плата за подключение к централизованным сетям теплоснабжения",
      file: "/documents/tariff-38p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №33-п от 27.08.2024 — Тариф на тепловую энергию",
      file: "/documents/tariff-33p-2024.pdf",
    },
    {
      name: "Приказ МТП КК №34-п от 27.08.2024 — Тариф на горячую воду",
      file: "/documents/tariff-34p-2024.pdf",
    },
    {
      name: "Приказ ООО «Енисейтеплоком» №9/1-ОД от 01.07.2024 — О применении тарифов",
      file: "/documents/order-9-1od-2024.pdf",
    },
    {
      name: "Приказ МТП КК №137-п от 27.11.2023 — Тариф на тепловую энергию",
      file: "/documents/tariff-137p-2023.pdf",
    },
    {
      name: "Приказ МТП КК №138-п от 27.11.2023 — Тариф на теплоноситель",
      file: "/documents/tariff-138p-2023.pdf",
    },
    {
      name: "Приказ МТП КК №139-п от 27.11.2023 — Тариф на горячую воду",
      file: "/documents/tariff-139p-2023.pdf",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Информация по тарифам ООО «Енисейтеплоком»</h1>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Наименование документа</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className={styles.row}>
                  <td>
                    <div className={styles.docRow}>
                      <div className={styles.docName}>{doc.name}</div>
                      <div className={styles.actions}>
                        <a
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.btn} ${styles.viewBtn}`}
                        >
                          👁 Посмотреть
                        </a>
                        <a
                          href={doc.file}
                          download
                          className={`${styles.btn} ${styles.downloadBtn}`}
                        >
                          ⬇ Скачать
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}