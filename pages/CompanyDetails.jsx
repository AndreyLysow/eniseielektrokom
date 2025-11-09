import React from "react";
import CustomHead from "../components/customHead";
import CompanyDetails from "../components/CompanyDetails";
import Header from "../components/header";
import Footer from "../components/footer";

const CompanyDetailsPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="Реквизиты — Енисейэлектроком"
      description="Официальные реквизиты ООО «Енисейская электроснабжающая компания»: ИНН, КПП, ОГРН, юридический адрес, банковские данные."
      keywords="Енисейэлектроком, реквизиты, ИНН, КПП, ОГРН, банк, юридический адрес"
      /* ――― Open Graph ――― */
      ogTitle="Реквизиты — Енисейэлектроком"
      ogDescription="Реквизиты ООО «Енисейская электроснабжающая компания»: полная справочная информация для договоров и документов."
      ogImage="/logoetk.png"
      ogUrl="https://eniseielektrokom.ru/company-details"
    />

    <Header />
    <CompanyDetails />
    <Footer />
  </>
);

export default CompanyDetailsPage;