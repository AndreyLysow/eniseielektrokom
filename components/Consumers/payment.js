"use client";

import Breadcrumbs from "../Breadcrumbs";
import styles from "../../styles/payment.module.css";
import AnimatedBackground from "../AnimatedBackground";

const phones = [
  // human — как показываем пользователю; tel — в формате E.164
  { human: "8-800-350-38-52 (бесплатно)", tel: "+78003503852" },
  { human: "8 (39195) 2-72-00 — робот 24/7", tel: "+73919527200" },
  { human: "8-950-401-53-34", tel: "+79504015334" },
  { human: "8-908-223-08-32", tel: "+79082230832" },
  { human: "8-950-997-62-55", tel: "+79509976255" },
];

export default function Payment() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Передача показаний и оплата услуг</h1>

        {/* ===== Передача показаний ===== */}
        <section className={styles.block} aria-labelledby="send-meters">
          <h2 id="send-meters" className={styles.subtitle}>
            Информация о передаче показаний приборов учета
          </h2>

          <p className={styles.text}>Вы можете передать показания удобным способом:</p>

          <ul className={styles.list}>
            <li>
              📞 Телефонный звонок:
              <ul className={styles.sublist}>
                {phones.map(({ human, tel }) => (
                  <li key={tel} className={styles.listItemTight}>
                    <a
                      className={styles.cta}
                      href={`tel:${tel}`}
                      aria-label={`Позвонить по номеру ${human.replaceAll("-", " ").replaceAll("—", "")}`}
                    >
                      {human}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              📲 SMS:&nbsp;
              <a className={styles.cta} href="sms:+79509976288">8-950-997-62-88</a>
              <span className={styles.hint}> (в тексте укажите адрес/лицевой счёт и показания)</span>
            </li>

            <li>
              💻 Личный кабинет:&nbsp;
              <a
                className={styles.cta}
                href="https://lk.eniseiteplokom.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                lk.eniseiteplokom.ru
              </a>
            </li>

            <li>
              📧 Email:&nbsp;
              <a className={styles.cta} href="mailto:eniseyteplokom@mail.ru">
                eniseyteplokom@mail.ru
              </a>
              &nbsp;|&nbsp;
              <a className={styles.cta} href="mailto:abonentam@eniseiteplokom.ru">
                abonentam@eniseiteplokom.ru
              </a>
            </li>

            <li>
              🌐 ЛК ГИС ЖКХ:&nbsp;
              <a
                className={styles.cta}
                href="https://dom.gosuslugi.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                dom.gosuslugi.ru
              </a>
            </li>

            <li>
              📱 ВКонтакте:&nbsp;
              <a
                className={styles.cta}
                href="https://vk.com/teplokom24"
                target="_blank"
                rel="noopener noreferrer"
              >
                vk.com/teplokom24
              </a>
            </li>

            <li>
              📝 На бумажном носителе:
              <ul className={styles.sublist}>
                <li>Пункт приема платежей: г. Енисейск, ул. Кирова, 81</li>
                <li>
                  Ящики в почтовых отделениях:
                  <ul className={styles.sublist}>
                    <li>г. Енисейск, ул. Ленина, д. 10</li>
                    <li>г. Енисейск, ул. Петровского, д. 21</li>
                    <li>г. Енисейск, ул. Промышленная, д. 20/7</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <p className={styles.important}>
            ⏱ Срок передачи показаний: с <strong>1 по 25 число</strong> каждого месяца.
          </p>
        </section>

        {/* ===== Оплата услуг ===== */}
        <section className={styles.block} aria-labelledby="pay">
          <h2 id="pay" className={styles.subtitle}>Оплата коммунальных услуг</h2>

          <p className={styles.text}>Оплатить без комиссии можно так:</p>

          <ul className={styles.list}>
            <li>
              🏢 В пунктах приема платежей ООО «Енисейтеплоком»:{" "}
              <strong>г. Енисейск, ул. Кирова, 81</strong>.
            </li>

            <li>
              💳 ПАО «Сбербанк»:
              <ul className={styles.sublist}>
                <li>Устройства самообслуживания, кассы</li>
                <li>Сервисы: <strong>Сбербанк Онлайн</strong>, <strong>Мобильный банк</strong>, <strong>Автоплатеж</strong></li>
              </ul>
            </li>

            <li>
              🌐 Банковской картой через Личный кабинет:&nbsp;
              <a
                className={styles.cta}
                href="https://lk.eniseiteplokom.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                lk.eniseiteplokom.ru
              </a>
            </li>
          </ul>

          <p className={styles.important}>
            ⏱ Срок оплаты: <strong>до 10 числа</strong> месяца, следующего за расчетным.
          </p>
        </section>
      </main>
    </div>
  );
}