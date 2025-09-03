"use client";

import Breadcrumbs from "./Breadcrumbs";
import styles from "../styles/info.module.css";
import AnimatedBackground from "./AnimatedBackground";

export default function InfoDisclosure() {
  const documents = [
    {
      name: "Бухгалтерский баланс ООО «Енисейтеплоком» за 2024 год",
      file: "/documents/buh-balans-2024.pdf",
    },
    {
      name: "Пояснения к ББ и ОФР ООО «Енисейтеплоком» за 2024 год",
      file: "/documents/poyasneniya-2024.pdf",
    },
    {
      name: "Бухгалтерский баланс ООО «Енисейтеплоком» за 2023 год",
      file: "/documents/buh-balans-2023.pdf",
    },
    {
      name: "Пояснения к ББ и ОФР ООО «Енисейтеплоком» за 2023 год",
      file: "/documents/poyasneniya-2023.pdf",
    },
    {
      name: "Специальная оценка условий труда: Сводная ведомость результатов проведения СОУТ от 14.04.2025 г.",
      file: "/documents/SOUT-Eniseiteplokom_14_04_2025.pdf",
    },
	 {
      name: "Специальная оценка условий труда: Сводная ведомость результатов проведения СОУТ от 31.07.2025 г.",
      file: "/documents/SOUT-Eniseiteplokom_31_07_2025.pdf",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Раскрытие информации</h1>

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