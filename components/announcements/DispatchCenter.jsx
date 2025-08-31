"use client";

import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/dispatchCenter.module.css";
import AnimatedBackground from "../AnimatedBackground";

export default function DispatchCenter() {
  // если захочешь добавить/изменить номера — правь здесь
  const phones = [
    { human: "8-904-898-2624", tel: "+79048982624" },
    { human: "8-39195-2-21-91", tel: "+73919522191" },
  ];

  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />

      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>
          Центр диспетчеризации производственных процессов
        </h1>

        <section
          className={styles.announcementBlock}
          aria-labelledby="dc-subtitle"
        >
          <p className={styles.icon} aria-hidden="true">📢</p>

          <h2 id="dc-subtitle" className={styles.subtitle}>
            Принимаем информацию о неполадках и авариях на инженерных сетях,
            а также жалобы на качество коммунальных услуг
          </h2>

          <address className={styles.phoneBlock}>
            {phones.map(({ human, tel }) => (
              <a
                key={tel}
                href={`tel:${tel}`}
                className={styles.phone}
                aria-label={`Позвонить по номеру ${human.replaceAll("-", " ")}`}
              >
                {human}
              </a>
            ))}
          </address>
        </section>
      </main>
    </div>
  );
}