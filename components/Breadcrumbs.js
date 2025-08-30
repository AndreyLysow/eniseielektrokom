"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/breadcrumbs.module.css";

export default function Breadcrumbs({ lastLabel }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const labelMap = {
    "privacy-policy": "Политика конфиденциальности",
    "announcements": "Официальные сообщения",
    "about": "О компании",
    "outage-schedule": "График отключений",
    "CompanyDetails": "Реквизиты",
    "DispatchCenter": "Сообщить об аварии",
    "announcement_mine": "Важное объявление",
    "info": "Раскрытие информации",
    "payment": "Передача показаний и оплата услуг",
    "news": "Новости",
    "sitemap": "Карта сайта",
    "contact": "Контакты",
    "tariffs": "Тарифы",
    "contracts": "Типовые договоры",
    "articles": "Статьи, разъяснения, нормативы",
    "plan-ozp": "Подготовка к отопительному сезону 2025-2026 гг.",
	"normatives": "Нормативы потребления",
	"service-quality": "Требования к качеству коммунальных услуг",
	"no-meter-data": "Непредоставление показаний ИПУ и ОДПУ",
	"promivka": "Промывка систем теплоснабжения",
	"tech-connection": "Технологическое присоединение",
	"vacancies": "Вакансии",
  };

  // ✅ Сегменты, у которых нет страницы
  const noPageSegments = ["articles"];

  const last = segments.length - 1;

  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={styles.breadcrumbLink}>Главная</Link>
      {segments.map((seg, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        let label = labelMap[seg] || seg.replace(/-/g, " ");
        const isLast = i === last;
        const hasPage = !noPageSegments.includes(seg);

        if (isLast && lastLabel) {
          label = lastLabel; // ✅ Заголовок для новости
        }

        return (
          <span key={href}>
            <span className={styles.separator}> &gt; </span>
            {isLast ? (
              <span className={styles.breadcrumbCurrent}>{label}</span>
            ) : hasPage ? (
              <Link href={href} className={styles.breadcrumbLink}>{label}</Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{label}</span> // без ссылки
            )}
          </span>
        );
      })}
    </nav>
  );
}