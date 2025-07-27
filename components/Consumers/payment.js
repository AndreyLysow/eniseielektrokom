"use client";

import Breadcrumbs from "./../Breadcrumbs";
import styles from "../../styles/payment.module.css";
import AnimatedBackground from "./../AnimatedBackground";

export default function Payment() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <h1 className={styles.title}>Передача показаний и оплата услуг</h1>

        {/* ✅ Блок: Передача показаний */}
        <div className={styles.block}>
          <h2 className={styles.subtitle}>Информация о передаче показаний приборов учета</h2>
          <p className={styles.text}>
            Вы можете передать показания любым удобным способом:
          </p>
          <ul className={styles.list}>
            <li>📞 Телефонный звонок:</li>
            <ul className={styles.sublist}>
              <li><strong>8-800-350-38-52</strong> — БЕСПЛАТНО с мобильных</li>
              <li><strong>8 (39195) 2-72-00</strong> — многоканальный, робот-помощник (24/7)</li>
              <li><strong>8-950-401-53-34</strong></li>
              <li><strong>8-908-223-08-32</strong></li>
              <li><strong>8-950-997-62-55</strong></li>
            </ul>
            <li>📲 SMS на номер: <strong>8-950-997-62-88</strong></li>
            <li>💻 Через личный кабинет: <a href="https://lk.eniseiteplokom.ru/" target="_blank" rel="noopener noreferrer">https://eniseiteplokom.ru</a></li>
            <li>📧 Email: <strong>eniseyteplokom@mail.ru</strong></li>
            <li>📧 Email (дополнительно): <strong>abonentam@eniseiteplokom.ru</strong></li>
            <li>🌐 ЛК ГИС ЖКХ: <a href="https://dom.gosuslugi.ru" target="_blank" rel="noopener noreferrer">https://dom.gosuslugi.ru</a></li>
            <li>📱 Сообщения ВКонтакте: <a href="https://vk.com/teplokom24" target="_blank" rel="noopener noreferrer">vk.com/teplokom24</a></li>
            <li>📝 На бумажном носителе:
              <ul className={styles.sublist}>
                <li>Пункт приема платежей: г. Енисейск, ул. Кирова, 81</li>
                <li>Ящики в почтовых отделениях:
                  <ul>
                    <li>г. Енисейск, ул. Ленина, д.10</li>
                    <li>г. Енисейск, ул. Петровского, д.21</li>
                    <li>г. Енисейск, ул. Промышленная, д.20/7</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p className={styles.important}>
            ⏱ Срок передачи показаний: с <strong>1 по 25 число</strong> каждого месяца.
          </p>
        </div>

        {/* ✅ Блок: Оплата услуг */}
        <div className={styles.block}>
          <h2 className={styles.subtitle}>Оплата коммунальных услуг</h2>
          <p className={styles.text}>
            Оплатить услуги без комиссии можно следующими способами:
          </p>
          <ul className={styles.list}>
            <li>🏢 В пунктах приема платежей ООО «Енисейтеплоком» по адресу: <strong>г. Енисейск, ул. Кирова, 81</strong>.</li>
            <li>💳 ПАО Сбербанк:
              <ul className={styles.sublist}>
                <li>Устройства самообслуживания, кассы</li>
                <li>Сервисы: <strong>Сбербанк Онлайн</strong>, <strong>Мобильный банк</strong>, <strong>Автоплатеж</strong></li>
              </ul>
            </li>
            <li>🌐 Интернет-эквайринг банковской картой любого банка через Личный кабинет на сайте: <a href="https://lk.eniseiteplokom.ru/" target="_blank" rel="noopener noreferrer">eniseiteplokom.ru</a></li>
          </ul>
          <p className={styles.important}>
            ⏱ Срок оплаты: <strong>до 10 числа</strong> месяца, следующего за расчетным.
          </p>
        </div>
      </main>
    </div>
  );
}