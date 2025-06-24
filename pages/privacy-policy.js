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
      title="Политика конфиденциальности — Енисейтеплоком"
      description="Правила обработки и защиты персональных данных ООО «Енисейтеплоком». Узнайте, какую информацию мы собираем, как её храним и для чего используем."
      keywords="Енисейтеплоком, политика конфиденциальности, персональные данные, теплоснабжение Енисейск"
      /* ――― Open Graph ――― */
      ogTitle="Политика конфиденциальности — Енисейтеплоком"
      ogDescription="Подробная информация о том, как ООО «Енисейтеплоком» обращается с вашими персональными данными."
      ogImage="/logoetk.png"  
      ogUrl="https://eniseiteplokom.ru/privacy-policy"
    />

    <Header />           {/* стандартная синяя шапка */}
    <PolicyContent />    {/* текст самой политики */}
    <Footer />
  </>
);

export default PrivacyPolicyPage;
