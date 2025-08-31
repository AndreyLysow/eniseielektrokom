"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import AnimatedBackground from "../AnimatedBackground"; // 👈 добавляем фон

const OhsPage = () => {
  useEffect(() => {
    document
      .querySelectorAll(".menu-item.activelink")
      .forEach((el) => el.classList.add("active2"));
    document
      .querySelectorAll(".footer-item.footerselect-next")
      .forEach((el) => el.classList.add("footer-active"));
  }, []);

  return (
    <div className="ohs-page">
      {/* 👇 Фон теперь отдельным компонентом */}
      <AnimatedBackground />


      <main className="ohs-content">
        {/* Шапка */}
        <div className="ohs-header">
          <div className="ohs-breadcrumbsWrapper">
            <Breadcrumbs />
          </div>
          <h1 className="ohs-title">Охрана труда</h1>
        </div>

        <section className="ohs-card">
          {/* Блок 1 */}
          <div className="ohs-row">
            <div className="ohs-col">
              <h2 className="ohs-subtitle">Безопасность — ежедневный приоритет</h2>
              <p className="ohs-text">
                В нашей компании отдел охраны труда играет ключевую роль в поддержании
                высоких стандартов безопасности и здоровья на рабочем месте.
              </p>
              <p className="ohs-text">
                Мы проводим анализ условий труда, выявляем опасные факторы,
                регулярно инспектируем объекты и обучаем персонал безопасным приёмам работы.
              </p>
            </div>

            <div className="ohs-media">
				<div className="ohs-imageWrap">
					<Image
					src="/ohs-team.jpg"
					alt="Команда на производственной площадке"
					width={800}     // 👈 задаём альбомное соотношение
					height={450}    // 👈 16:9 например
					className="ohs-image"
					priority
					/>
				</div>
				</div>
          </div>

          {/* Блок 2 */}
          <div className="ohs-row">
            <div className="ohs-col">
              <h2 className="ohs-subtitle">Что делает отдел охраны труда</h2>
              <ul className="ohs-list">
                <li className="ohs-item">
                  <Image src="/icons/universal_mark.svg" alt="" width={26} height={26} />
                  Проверка рабочих мест, анализ рисков, разработка мер по их снижению.
                </li>
                <li className="ohs-item">
                  <Image src="/icons/universal_mark.svg" alt="" width={26} height={26} />
                  Подготовка и обновление инструкций, обучение и проверка знаний сотрудников.
                </li>
                <li className="ohs-item">
                  <Image src="/icons/universal_mark.svg" alt="" width={26} height={26} />
                  Контроль СИЗ и соблюдения норм охраны труда.
                </li>
              </ul>
            </div>
          </div>

          {/* Цитата */}
          <div className="ohs-quote">
            <p>
              «Забота о здоровье и безопасности наших работников — главный приоритет.
              Новая спецодежда и регулярные медосмотры — не формальность, а наша
              прямая ответственность».
            </p>
            <div className="ohs-quoteAuthor">Елена Лебедева, начальник отдела охраны труда</div>
          </div>

          {/* Блок 3 */}
          <div className="ohs-row">
            <div className="ohs-col">
              <h2 className="ohs-subtitle">Подготовка к сезону 2025–2026</h2>
              <p className="ohs-text">
                Все подготовительные работы будут завершены до начала отопительного сезона,
                чтобы сотрудники приступили к обязанностям в безопасных условиях.
              </p>
            </div>
          </div>

        </section>
      </main>

   
    </div>
  );
};

export default OhsPage;