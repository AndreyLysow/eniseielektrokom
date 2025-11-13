import AnimatedBackground from "./AnimatedBackground";
import Breadcrumbs from "./Breadcrumbs";
import styles from "../styles/CompanyDetails.module.css";

export default function CompanyDetails() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />

      <main className={styles.content}>
        <Breadcrumbs />
        <h1 className={styles.title}>Реквизиты предприятия</h1>

        <section className={styles.card}>
          <h2>Реквизиты ООО «Енисейская электроснабжающая компания»</h2>

          <div className={styles.label}>Полное и сокращенное наименование предприятия в соответствии с учредительными документами — Уставом</div>
          <div className={styles.value}>
            Общество с ограниченной ответственностью «Енисейская электроснабжающая компания»<br />
            ООО «Енисейэлектроком»
          </div>

          <div className={styles.label}>Идентификационный номер (ИНН)</div>
          <div className={styles.value}>2447014085</div>

          <div className={styles.label}>Код причины постановки на учет (КПП)</div>
          <div className={styles.value}>244701001</div>

          <div className={styles.label}>ОГРН от 09.03.2023 выдан Межрайонной ИФНС № 17 по Красноярскому краю (2411)</div>
          <div className={styles.value}>
            1232400005870
          </div>

          <div className={styles.label}>Банковские реквизиты 1</div>
          <div className={styles.value}>
            Номер расчетного счета: 40702810031000061639<br />
            КРАСНОЯРСКОЕ ОТДЕЛЕНИЕ № 8646 ПАО СБЕРБАНК г. Красноярск<br />
            Номер корреспондентского счета: 30101810800000000627<br />
            БИК: 040407627
          </div>

          <div className={styles.label}>Банковские реквизиты 2</div>
          <div className={styles.value}>
            Номер расчетного счета: 40702810800030003505<br />
            КРАСН. Ф-Л АО АИКБ «Енисейский объединенный банк»<br />
            Номер корреспондентского счета: 30101810700000000853<br />
            БИК: 040407853
          </div>

          <div className={styles.label}>Юридический адрес</div>
          <div className={styles.value}>
            663170, РФ, Красноярский край, Енисейский район, с. Ярцево, ул. Суворова стр. 44
          </div>

          <div className={styles.label}>Почтовый адрес (фактический адрес)</div>
          <div className={styles.value}>
            663180, РФ, Красноярский край, г. Енисейск, ул. Пролетарская, д. 4
          </div>

          <div className={styles.label}>Адрес электронной почты</div>
          <div className={styles.value}>
            e-mail: eniseyelektrokom@mail.ru
          </div>

          <div className={styles.label}>Телефон/факс</div>
          <div className={styles.value}>
            +7 (39195) 2-49-57
          </div>

          <div className={styles.label}>Код предприятия по ОКПО</div>
          <div className={styles.value}>53198692</div>

          <div className={styles.label}>Код по ОКАТО</div>
          <div className={styles.value}>04 615 458 101</div>

          <div className={styles.label}>Код по ОКТМО</div>
          <div className={styles.value}>04 615 458</div>

          <div className={styles.label}>Код по ОКОГУ</div>
          <div className={styles.value}>4210014</div>

          <div className={styles.label}>Код по ОКФС</div>
          <div className={styles.value}>16 (частная собственность)</div>

          <div className={styles.label}>Код по ОКОПФ</div>
          <div className={styles.value}>12300</div>

          <div className={styles.label}>Код по ОКВЭД</div>
          <div className={styles.value}>
            Основной: 35.11<br />
            Дополнительные: 35.14; 47.30.11; 46.71.2; 45.32; 43.12.3; 35.13; 35.12; 35.11.4; 69.20.2; 69.20.3; 82.99; 42.21; 42.22; 43.11; 43.12.3; 43.21; 43.29; 43.32; 43.31; 43.99; 43.99.7
          </div>

          <div className={styles.label}>Регистрационный номер СФР</div>
          <div className={styles.value}>110 564 1052</div>

          <div className={styles.label}>Директор</div>
          <div className={styles.value}>
            Малахов Александр Вячеславович (действующий на основании Устава)
          </div>

          <div className={styles.label}>Главный бухгалтер</div>
          <div className={styles.value}>
            Мизонова Ольга Алексеевна
          </div>
        </section>

        <section className={styles.extract}>
          <h3>Выписка из ЕГРЮЛ</h3>
          <p>
            Актуальная выписка из Единого государственного реестра юридических лиц
            сформирована <strong>04.06.2025 г.</strong> Документ подписан
            усиленной квалифицированной электронной подписью и получен с официального сайта ФНС России.
          </p>
          <a
            href="/documents/egroul-04-06-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            📄 Выписка из ЕГРЮЛ 04.06.2025 г. Скачать
          </a>
        </section>
      </main>
    </div>
  );
}
