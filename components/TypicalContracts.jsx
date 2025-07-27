"use client";

import Breadcrumbs from "./Breadcrumbs";
import AnimatedBackground from "./AnimatedBackground";
import styles from "../styles/typical-contracts.module.css";

export default function TypicalContracts() {
  const contracts = [
    {
      name: "Типовой договор на отопление",
      pdf: "/documents/dogovor-otoplenie.pdf", // ✅ PDF для просмотра
      docx: "/documents/dogovor-otoplenie.docx", // ✅ DOCX для скачивания
    },
    {
      name: "Типовой договор на горячее водоснабжение",
      pdf: "/documents/dogovor-gvs.pdf",
      docx: "/documents/dogovor-gvs.docx",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Типовые договоры</h1>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Наименование документа</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((doc, index) => (
                <tr key={index} className={styles.row}>
                  <td>
                    <div className={styles.docRow}>
                      <div className={styles.docName}>{doc.name}</div>
                      <div className={styles.actions}>
                        {/* ✅ Кнопка открывает PDF */}
                        <a
                          href={doc.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.btn} ${styles.viewBtn}`}
                        >
                          👁 Открыть PDF
                        </a>

                        {/* ✅ Кнопка скачивает DOCX */}
                        <a
                          href={doc.docx}
                          download
                          className={`${styles.btn} ${styles.downloadBtn}`}
                        >
                          ⬇ Скачать DOCX
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