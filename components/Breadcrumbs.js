"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/breadcrumbs.module.css";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const labelMap = {
    "privacy-policy": "Политика конфиденциальности",
    "announcements": "Объявления",
    "about": "О компании", // ← добавили сюда
  };

  const last = segments.length - 1;

  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={styles.breadcrumbLink}>Главная</Link>
      {segments.map((seg, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const label = labelMap[seg] || seg.replace(/-/g, " ");
        return (
          <span key={href}>
            <span className={styles.separator}> &gt; </span>
            {i === last ? (
              <span className={styles.breadcrumbCurrent}>{label}</span>
            ) : (
              <Link href={href} className={styles.breadcrumbLink}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
