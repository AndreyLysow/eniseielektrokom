"use client";

import Breadcrumbs from "./Breadcrumbs";
import AnimatedBackground from "./AnimatedBackground";
import styles from "../styles/typical-contracts.module.css";

export default function TypicalContracts() {
  const contracts = [
    {
      name: "Типовой договор на отопление",
      pdf: "/documents/dogovor-otoplenie.pdf",
      docx: "/documents/dogovor-otoplenie.docx",
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
              {contracts.map((doc, i) => (
                <tr key={i} className={styles.row}>
                  <td>
                    <div className={styles.docRow}>
                      <div className={styles.docName}>{doc.name}</div>
                      <div className={styles.actions}>
                        <a
                          href={doc.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.btn} ${styles.viewBtn}`}
                        >
                          👁 Открыть PDF
                        </a>
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