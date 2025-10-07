"use client";
import React from "react";
import styles from "../../styles/Vacancies.module.css";
import vacanciesJson from "./vacancies.json";

type Vacancy = {
  n: number;
  object: string;
  title: string;
  count: number;
  duties: string;
  pay: string;
  schedule: string;
  requirements: string;
};

function nl2br(text: string) {
  return text.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < text.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

export default function VacanciesBlock() {
  const rows = (vacanciesJson as Vacancy[]).sort((a, b) => a.n - b.n);

  return (
    <section className={styles.wrap} id="vacancies">
      <h2 className={styles.title}>Актуальные вакансии</h2>

      <div className={styles.cardList}>
        {rows.map((v) => (
          <div key={v.n} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardNumber}>№ {v.n}</div>
              <div className={styles.cardTitle}>{v.title}</div>
              <div className={styles.cardObject}>{v.object}</div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardRow}>
                <span className={styles.label}>Количество мест:</span>
                <span>{v.count}</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>Обязанности:</span>
                <span>{nl2br(v.duties)}</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>Зарплата:</span>
                <span>{v.pay}</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>Режим работы:</span>
                <span>{nl2br(v.schedule)}</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.label}>Требования:</span>
                <span>{nl2br(v.requirements)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}