"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "../Breadcrumbs";
import AnimatedBackground from "../AnimatedBackground";
import VacanciesBlock from "./Vacancies";

export default function CareersEtkom() {
  useEffect(() => {
    document.querySelectorAll(".menu-item.marker-careers.activelink").forEach((el) => el.classList.add("active"));
    document.querySelectorAll(".menu-item.activelink").forEach((el) => el.classList.add("active2"));
    document.querySelectorAll(".footer-item.footerselect-next").forEach((el) => el.classList.add("footer-active"));
  }, []);

  return (
    <div className="careers-page">
      <AnimatedBackground />
      <div className="fixed-schema" />

      <main className="content-wrapper">
        <div className="careers-header">
          <div className="breadcrumbsWrapper"><Breadcrumbs /></div>
          <h1 className="page-main-title">Вакансии</h1>
        </div>

        <section className="careers-section">
          <div className="careers-title">Работай вместе с нами!</div>

          {/* Блок о компании */}
          <div className="text-image-section">
            <div className="text-content">
              <h2>Енисейэлектроком — электроэнергия, за которой стоит команда</h2>
              <p>
                Мы — единая электроснабжающая организация города Енисейска и района.
                Эксплуатируем подстанции и электросети, внедряем автоматику и решения по энергоэффективности,
                поддерживаем высокий стандарт безопасности и качества.
              </p>
              <p>
                Компания растёт: модернизируем оборудование, усиливаем команды производства и инженерные службы.
                Даем понятную траекторию роста: стажировка → наставник → допуски → самостоятельные смены → старший смены/мастер.
              </p>
            </div>
            <div className="image-content">
              <Image src="/vacancies1.jpg" alt="Команда Енисейэлектроком" className="career-image" width={350} height={520} style={{ objectFit: "cover" }} priority />
            </div>
          </div>

          {/* Плюсы */}
          <div className="text-image-section">
            <div className="image-content">
              <Image src="/vacancies.jpg" alt="Работы на электросетях" className="career-image" width={350} height={520} style={{ objectFit: "cover" }} />
            </div>
            <div className="text-content text-centered">
              <h2>Почему у нас хорошо</h2>
              <ul className="featureList">
                {[
                  ["Смысл и результат","Ваша работа — реальный вклад в комфорт жителей и соцобъектов."],
                  ["Реальные объекты","Подстанции, линии электропередач, КИПиА, узлы учёта — современное оборудование."],
                  ["Обучение и допуски","Инструктажи, стажировки, помощь с квалификациями."],
                  ["Порядок и безопасность","СИЗ, регламенты, понятные зоны ответственности."],
                  ["Стабильность","Социально значимая отрасль и планы модернизаций."]
                ].map(([t, d], i) => (
                  <li key={i} className="featureItem">
                    <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                    <div>
                      <div className="featureTitle">{t}</div>
                      <p className="featureText">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Чем занимаемся */}
          <div className="text-image-section">
            <div className="text-content text-centered">
              <h2>Чем мы занимаемся</h2>
              <ul className="featureList">
                {[
                  "Эксплуатация подстанций и электросетей: ППР, текущие и аварийно-восстановительные работы.",
                  "Модернизации: замена оборудования, автоматики; внедрение узлов учёта и диспетчеризации.",
                  "Контроль энергоэффективности и качества услуг.",
                  "Ведение журналов, документации и подготовка к сезонным работам."
                ].map((t, i) => (
                  <li key={i} className="featureItem">
                    <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                    <div className="featureText">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Таблица вакансий */}
          <VacanciesBlock />

          {/* Как откликнуться + ЕДИНСТВЕННАЯ кнопка */}
          <div className="text-image-section">
            <div className="text-content text-centered">
              <h2>Как откликнуться</h2>
              <ul className="featureList">
                {[
                  "Пришлите резюме или кратко опишите опыт: должности, объекты, допуски, готовность к сменам/вахтам.",
                  "Укажите желаемую роль и контакт (телефон, e-mail).",
                  "Прикрепите копии удостоверений/допусков или напишите, что готовы пройти обучение."
                ].map((t, i) => (
                  <li key={i} className="featureItem">
                    <Image src="/icons/universal_mark.svg" alt="" width={28} height={28} className="featureIcon" />
                    <div className="featureText">{t}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="resume-button-container">
            <a className="resume-button" href="mailto:eniseielektrokom@mail.ru">Отправить резюме</a>
          </div>
        </section>
      </main>
    </div>
  );
}