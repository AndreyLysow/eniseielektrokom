// pages/privacy-policy.jsx
import React from "react";
import CustomHead from "../components/customHead";
import PolicyContent from "../components/policy/PolicyContent";
import Header from "../components/header";
import Footer from "../components/footer";

const PrivacyPolicyPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="Политика конфиденциальности — Енисейэлектроком"
      description="Правила обработки и защиты персональных данных ООО «Енисейэлектроком». Узнайте, какую информацию мы собираем, как её храним и для чего используем."
      keywords="Енисейэлектроком, политика конфиденциальности, персональные данные, теплоснабжение Енисейск"
      /* ――― Open Graph ――― */
      ogTitle="Политика конфиденциальности — Енисейэлектроком"
      ogDescription="Подробная информация о том, как ООО «Енисейэлектроком» обращается с вашими персональными данными."
      ogImage="/logoetk.png"  
      ogUrl="https://eniseielektrokom.ru/privacy-policy"
    />

    <Header />           {/* стандартная синяя шапка */}
    <PolicyContent />    {/* текст самой политики */}
    <Footer />
  </>
);

export default PrivacyPolicyPage;
