"use client";

import Breadcrumbs from "./../Breadcrumbs";
import AnimatedBackground from "./../AnimatedBackground";
import styles from "../../styles/article.module.css";

export default function Promyvka() {
  return (
    <div className={styles.wrapper}>
      <AnimatedBackground />
      <main className={styles.content}>
        {/* Хлебные крошки */}
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        {/* Заголовок */}
        <h1 className={styles.title}>Основные требования к организации промывок систем теплоснабжения</h1>

        {/* Оглавление */}
        <div className={styles.articleBlock}>
          <h2 className={styles.subtitle}>Оглавление</h2>
          <ul className={styles.articleList}>
            <li><a href="#intro">Введение</a></li>
            <li><a href="#purpose">Цели и задачи промывки</a></li>
            <li><a href="#when">Когда проводится промывка</a></li>
            <li><a href="#benefits">Что дает промывка</a></li>
            <li><a href="#methods">Основные способы промывки</a></li>
            <li><a href="#hydro">Гидропневматическая промывка (особенности)</a></li>
            <li><a href="#steps">Порядок выполнения</a></li>
            <li><a href="#requirements">Общие требования и безопасность</a></li>
          </ul>
        </div>

        {/* Введение */}
        <section id="intro" className={styles.articleBlock}>
          <p>
            В процессе эксплуатации на внутренних поверхностях трубопроводов отопления и ГВС образуются
            отложения в виде солей кальция, магния, других примесей и накипи. Это приводит к ухудшению
            циркуляции, снижению теплоотдачи и нарушению температурного графика.
          </p>
          <p><strong>Для примера:</strong> наличие накипи толщиной всего 1 мм снижает теплоотдачу радиаторов на 15%!</p>
        </section>

        {/* Цели */}
        <section id="purpose" className={styles.articleBlock}>
          <h2 className={styles.subtitle}>Когда и с какой целью проводится промывка</h2>
          <ul className={styles.articleList}>
            <li>После капитального ремонта или замены трубопроводов.</li>
            <li>После монтажа нового оборудования.</li>
            <li>При снижении эффективности отопления или ГВС.</li>
            <li>После окончания отопительного сезона (п. 20.9 ТКП 458-2012).</li>
          </ul>
          <p><strong>Важно:</strong> подключение новых систем к тепловым сетям без промывки запрещено.</p>
        </section>

        {/* Польза */}
        <section id="benefits" className={styles.articleBlock}>
          <h2 className={styles.subtitle}>Что дает промывка систем теплоснабжения</h2>
          <ul className={styles.articleList}>
            <li>Восстановление пропускной способности трубопровода.</li>
            <li>Снижение теплопотерь до 5%.</li>
            <li>Экономия электроэнергии и топлива на циркуляцию.</li>
            <li>Соблюдение нормативной температуры и графика теплоснабжения.</li>
            <li>Безопасная и надежная эксплуатация оборудования.</li>
          </ul>
        </section>

        {/* Методы */}
        <section id="methods" className={styles.articleBlock}>
          <h2 className={styles.subtitle}>Основные способы промывки</h2>
          <p>В практике применяются 4 метода:</p>
          <ul className={styles.articleList}>
            <li><strong>Гидропневматический</strong> — вода + сжатый воздух (эффективен, но требует доп. очистки).</li>
            <li><strong>Пневмогидроудар</strong> — импульсное воздействие, наиболее эффективно, но дорого.</li>
            <li><strong>Химический</strong> — кислоты растворяют накипь (не для алюминия).</li>
            <li><strong>Биологический</strong> — биопрепараты, экологичная альтернатива химии.</li>
          </ul>
        </section>

        {/* Особенности гидропневматической */}
        <section id="hydro" className={styles.articleBlock}>
          <h2 className={styles.subtitle}>Гидропневматическая промывка (особенности)</h2>
          <p>
            Наиболее распространенный метод. Давление воды — <strong>0,15–0,3 МПа</strong>,
            давление воздуха — <strong>3,0–3,5 МПа</strong>.
          </p>
          <p>
            Промывка выполняется в 3 этапа: <br />
            <strong>1.</strong> Врезка штуцеров (воздух Ду32, вода Ду50, дренаж). <br />
            <strong>2.</strong> Продувка стояков воздухом. <br />
            <strong>3.</strong> Промывка магистралей водовоздушной смесью.
          </p>
          <p><strong>Важно:</strong> установить обратные клапаны на вводах воды и воздуха.</p>
        </section>

        {/* Таблицы */}
        <div className={styles.articleBlock}>
          <h3>Таблица 1. Диаметр патрубков для дренажа</h3>
          <ul className={styles.articleList}>
            <li>До 70 мм → патрубок 25 мм</li>
            <li>80–125 мм → патрубок 40 мм</li>
            <li>150–175 мм → патрубок 50 мм</li>
          </ul>
        </div>

        <div className={styles.articleBlock}>
          <h3>Таблица 2. Расход воды при промывке</h3>
          <ul className={styles.articleList}>
            <li>Ø50 мм → 8 м³/ч</li>
            <li>Ø70 мм → 14 м³/ч</li>
            <li>Ø100 мм → 30 м³/ч</li>
            <li>Ø200 мм → 125 м³/ч</li>
          </ul>
        </div>

        {/* Общие требования */}
        <section id="requirements" className={styles.articleBlock}>
          <h2 className={styles.subtitle}>Общие требования и безопасность</h2>
          <p>
            Перед промывкой — обследование системы, подготовка схемы, врезка штуцеров. После — контроль качества и
            гидравлические испытания. Работы относятся к повышенной опасности и выполняются по нарядам-допускам
            (ТКП 459-2012).
          </p>
        </section>
      </main>
    </div>
  );
}