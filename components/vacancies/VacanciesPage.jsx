import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "../Breadcrumbs";
import AnimatedBackground from "../AnimatedBackground"; 

const CareersEtkom = () => {
  useEffect(() => {
    document
      .querySelectorAll(".menu-item.marker-careers.activelink")
      .forEach((el) => el.classList.add("active"));
    document
      .querySelectorAll(".menu-item.activelink")
      .forEach((el) => el.classList.add("active2"));
    document
      .querySelectorAll(".footer-item.footerselect-next")
      .forEach((el) => el.classList.add("footer-active"));
  }, []);

  return (
    <div className="careers-page">
		 <AnimatedBackground />
      <div className="fixed-schema" />

      <main className="content-wrapper">
        {/* Шапка страницы */}
        <div className="careers-header">
          <div className="breadcrumbsWrapper">
            <Breadcrumbs />
          </div>
          <h1 className="page-main-title">Вакансии</h1>
        </div>

        <section className="careers-section">
          <div className="careers-title">Работай вместе с нами!</div>

          {/* Кто мы и зачем */}
          <div className="text-image-section">
            <div className="text-content">
              <h2>Енисейтеплоком — тепло, за которым стоит команда</h2>
              <p>
                Мы — единая теплоснабжающая организация города Енисейска и
                Енисейского района. Обеспечиваем надёжную подачу тепла в дома,
                школы, больницы и на предприятия, модернизируем котельные и
                сети, внедряем энергоэффективные решения и держим высокий
                стандарт обслуживания.
              </p>
              <p>
                Мы растим специалистов: даём ответственную практику на живых
                объектах, проводим обучение и наставничество, помогаем строить
                карьерную траекторию — от производственного специалиста до
                руководителя участка.
              </p>
            </div>

            <div className="image-content">
              <Image
                src="/vacancies1.jpg"
                alt="Команда Енисейтеплоком на объекте"
                className="career-image"
                width={350}
                height={520}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Что получит кандидат */}
          <div className="text-image-section">
            <div className="image-content">
              <Image
                src="/vacancies.jpg"
                alt="Работы на тепловых сетях"
                className="career-image"
                width={350}
                height={520}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="text-content text-centered">
              <h2>Что вы получите, присоединившись к нам</h2>
              <ul className="featureList">
                <li className="featureItem">
                  <Image
                    src="/icons/universal_mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="featureIcon"
                  />
                  <div>
                    <div className="featureTitle">Смысл и заметный результат</div>
                    <p className="featureText">
                      Ваша работа напрямую влияет на комфорт жителей и
                      устойчивость города. Это ответственность и повод для
                      гордости.
                    </p>
                  </div>
                </li>

                <li className="featureItem">
                  <Image
                    src="/icons/universal_mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="featureIcon"
                  />
                  <div>
                    <div className="featureTitle">Практика на реальных объектах</div>
                    <p className="featureText">
                      Котельные, теплотрассы, узлы учёта — действующие системы с
                      современным оборудованием, а не учебные макеты.
                    </p>
                  </div>
                </li>

                <li className="featureItem">
                  <Image
                    src="/icons/universal_mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="featureIcon"
                  />
                  <div>
                    <div className="featureTitle">Обучение и наставничество</div>
                    <p className="featureText">
                      Инструктажи, стажировки, допуски, поддержка мастеров и
                      инженеров — закрываем пробелы и ускоряем рост.
                    </p>
                  </div>
                </li>

                <li className="featureItem">
                  <Image
                    src="/icons/universal_mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="featureIcon"
                  />
                  <div>
                    <div className="featureTitle">Порядок и прозрачность</div>
                    <p className="featureText">
                      Чёткие регламенты, охрана труда, СИЗ, культура
                      безопасности, понятные зоны ответственности и критерии
                      качества.
                    </p>
                  </div>
                </li>

                <li className="featureItem">
                  <Image
                    src="/icons/universal_mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="featureIcon"
                  />
                  <div>
                    <div className="featureTitle">Стабильность</div>
                    <p className="featureText">
                      Социально значимая сфера, предсказуемая сезонная загрузка
                      и долгосрочные планы модернизации.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Чем занимаемся */}
          <div className="text-image-section">
            <div className="text-content text-centered">
              <h2>Чем мы занимаемся каждый день</h2>
              <ul className="featureList">
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Содержим в работоспособном состоянии котельные и тепловые сети:
                    профилактика, ремонты, аварийно-восстановительные работы.
                  </div>
                </li>
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Реконструируем и модернизируем объекты — котлы, насосные,
                    автоматику, узлы учёта.
                  </div>
                </li>
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Постоянно повышаем квалификацию сотрудников — основа надёжности
                    и безопасности.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Кого ищем */}
          <div className="text-image-section">
            <div className="text-content text-centered">
              <h2>Кого мы ищем</h2>
              <ul className="featureList">
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Производственных специалистов: операторов/машинистов
                    котельных, слесарей КИПиА, электромонтёров, сварщиков,
                    монтеров тепловых сетей.
                  </div>
                </li>
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Инженеров и мастеров: эксплуатация, ремонт, ППР, охрана труда.
                  </div>
                </li>
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Ответственных людей, для которых порядок, безопасность и
                    дисциплина — реальные ценности.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Как откликнуться */}
          <div className="text-image-section">
            <div className="text-content text-centered">
              <h2>Как откликнуться</h2>
              <ul className="featureList">
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Пришлите резюме или кратко опишите опыт: должности, объекты,
                    допуски, готовность к сменам/вахтам.
                  </div>
                </li>
                <li className="featureItem">
                  <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                  <div className="featureText">
                    Укажите желаемую роль и контакт для связи.
                  </div>
                </li>
              </ul>

            </div>
          </div>

          {/* Mailto-кнопка */}
          <div className="resume-button-container">
            <a href="mailto:eniseyteplokom@mail.ru" className="resume-button">
              Отправить резюме
            </a>
          </div>
        </section>
      </main>

    </div>
  );
};

export default CareersEtkom;