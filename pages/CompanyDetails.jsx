import React from "react";
import CustomHead from "../components/customHead";
import CompanyDetails from "../components/CompanyDetails";
import Header from "../components/header";
import Footer from "../components/footer";

const CompanyDetailsPage = () => (
  <>
    <CustomHead
      /* ――― META ――― */
      title="Реквизиты — Енисейтеплоком"
      description="Официальные реквизиты ООО «Енисейская теплоснабжающая компания»: ИНН, КПП, ОГРН, юридический адрес, банковские данные."
      keywords="Енисейтеплоком, реквизиты, ИНН, КПП, ОГРН, банк, юридический адрес"
      /* ――― Open Graph ――― */
      ogTitle="Реквизиты — Енисейтеплоком"
      ogDescription="Реквизиты ООО «Енисейская теплоснабжающая компания»: полная справочная информация для договоров и документов."
      ogImage="/logoetk.png"
      ogUrl="https://eniseiteplokom.ru/company-details"
    />

    <Header />
    <CompanyDetails />
    <Footer />
  </>
);

export default CompanyDetailsPage;