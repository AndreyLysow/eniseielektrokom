import Head from 'next/head';

const CustomHead = ({
  title = 'Енисейэлектроком — Единая Электроснабжающая Организация Енисейска и Енисейского района',
  description = 'ООО «Енисейэлектроком» обеспечивает жителей электроэнергией. Модернизация электросетей, реконструкция коммунальной инфраструктуры, снижение аварийности и экологическая ответственность.',
  keywords = 'Енисейэлектроком, электроснабжение Енисейск, коммунальные услуги, электросети, модернизация электросетей, концессия, ЕЭО, Енисейский район, инфраструктура ЖКХ',
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
    <link rel="icon" href="/images/logoelectrokom.svg" type="image/svg+xml" />

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