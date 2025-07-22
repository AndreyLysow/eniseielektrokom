"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "../AnimatedBackground";
import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/announcements.module.css";



export default function Announcements() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <Breadcrumbs />
        <h1 className={styles.title}>
          График приостановления горячего водоснабжения в межотопительный период 2025 года
        </h1>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>№ п/п</th>
                <th>Адрес объекта</th>
                <th>Ответственное лицо</th>
                <th>Контролирующее лицо</th>
                <th>Период приостановления</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>г. Енисейск, ул. Ленина, 14 «В»</td>
                <td>мастер котельных — Ю.В. Галантин<br />тел. 8-904-898-2590</td>
                <td></td>
                <td>04.08.2025 — 17.08.2025</td>
              </tr>
              <tr>
                <td>2</td>
                <td>г. Енисейск, ул. Горького, 42 «А»</td>
                <td>мастер котельных — Д.А. Ершов<br />тел. 8-950-421-5229</td>
                <td>Начальник подразделения — О.В. Балахнин<br />тел. 8-902-946-7054</td>
                <td>16.06.2025 — 29.06.2025</td>
              </tr>
              <tr>
                <td>3</td>
                <td>г. Енисейск, ул. Доры Кваш, 20</td>
                <td>мастер котельных — Е.П. Худышкин<br />тел. 8-950-420-8214</td>
                <td></td>
                <td>07.07.2025 — 20.07.2025</td>
              </tr>
              <tr>
                <td>4</td>
                <td>г. Енисейск, ул. У. Громовой, 17 «А»</td>
                <td>мастер котельных — Е.П. Худышкин<br />тел. 8-950-420-8214</td>
                <td></td>
                <td>21.07.2025 — 03.08.2025</td>
              </tr>
              <tr>
                <td>5</td>
                <td>с. Абалаково, ул. Лесная, 10</td>
                <td>мастер котельных — Ю.В. Туговиков<br />тел. 8-950-970-9531</td>
                <td>Начальник подразделения — С.А. Добрынин<br />тел. 8-902-977-2429</td>
                <td>12.08.2025 — 25.08.2025</td>
              </tr>
              <tr>
                <td>6</td>
                <td>п. Шапкино, ул. Мира, 2</td>
                <td>мастер котельных — А.В. Козакевич<br />тел. 8-913-593-4257</td>
                <td></td>
                <td>12.08.2025 — 25.08.2025</td>
              </tr>
              <tr>
                <td>7</td>
                <td>с. Верхнепашино, ул. Пролетарская, 20</td>
                <td>мастер котельных — В.В. Майер<br />тел. 8-950-987-3245</td>
                <td>Начальник подразделения — А.В. Новолодский<br />тел. 8-933-322-3395</td>
                <td>15.07.2025 — 28.07.2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}