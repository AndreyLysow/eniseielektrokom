import Head from 'next/head';

const CustomHead = ({
  title = 'Енисейтеплоком — Единая Теплоснабжающая Организация Енисейска и Енисейского района',
  description = 'ООО «Енисейтеплоком» обеспечивает жителей теплом, водой и частично электроэнергией. Модернизация котельных, реконструкция коммунальной инфраструктуры, снижение аварийности и экологическая ответственность.',
  keywords = 'Енисейтеплоком, теплоснабжение Енисейск, коммунальные услуги, котельные, модернизация теплосетей, концессия, ЕТО, Енисейский район, инфраструктура ЖКХ',
  ogTitle,
  ogDescription,
  ogImage = '/main-banner.jpg',
  ogUrl = '',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="format-detection" content="telephone=no" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <link rel="icon" href="/logotips/logoEniseiTeplokom.png" type="image/png" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:type" content="website" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
    <meta name="twitter:image" content={ogImage} />
  </Head>
);

export default CustomHead;