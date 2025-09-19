"use client";

import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/announcement.module.css";
import AnimatedBackground from "../AnimatedBackground";
import Link from "next/link";

export default function GisAnnouncement() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Официальные сообщения</h1>

        <div className={styles.announcementBlock}>
          <p className={styles.icon}>ℹ️</p>
			<h2 className={styles.subtitle}>
			Важная информация и полезные ссылки для пользователей ГИС ЖКХ
			</h2>

			<ul className={styles.links}>
			<li>
				<Link href="https://giszhkh.ru/" target="_blank" rel="noopener noreferrer">
				Официальный сайт ГИС ЖКХ →
				</Link>
			</li>
			
			<li>
				<Link href="/articles/gosuslugi-dom">
				«Госуслуги Дом» — что умеет и как настроить гостевой доступ →
				</Link>
			</li>
			<li>
				<Link
				href="https://www.minstroyrf.gov.ru/press/bolee-10-millionov-rossiyan-stali-polzovatelyami-gis-zhkkh/"
				target="_blank"
				rel="noopener noreferrer"
				>
				Более 10 млн россиян стали пользователями ГИС ЖКХ →
				</Link>
			</li>
			<li>
				<Link
				href="https://minstroyrf.gov.ru/press/v-prilozhenii-gosuslugi-dom-poyavilsya-gostevoy-dostup/"
				target="_blank"
				rel="noopener noreferrer"
				>
				В «Госуслуги Дом» появился гостевой доступ →
				</Link>
			</li>
			</ul>
        </div>

        <div className={styles.hotlineBlock}>
          <h2 className={styles.subtitle}>Горячая линия ЖКХ</h2>
          <p className={styles.text}>
            На территории Красноярского края работает консультационно-правовой центр по вопросам ЖКХ.
          </p>
          <p className={styles.text}>
            Консультацию можно получить:
          </p>
          <ul className={styles.hotlineList}>
            <li>
              📞 по телефону <strong>8-800-333-70-07</strong> (будни 9:00–20:00, звонок бесплатный)
            </li>
            <li>
              💻 через онлайн-консультанта:{" "}
              <Link href="http://gkh24.ru/pages/view/147" target="_blank">
                gkh24.ru/pages/view/147 →
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}