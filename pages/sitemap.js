import fs from "fs";
import path from "path";
import CustomHead from "../components/customHead";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteMap from "../components/SiteMap";

export async function getStaticProps() {
  const newsDir = path.join(process.cwd(), "news-content");
  const files = fs.readdirSync(newsDir);

  const news = files.map((filename) => {
    const id = filename.replace(".md", "");
    const content = fs.readFileSync(path.join(newsDir, filename), "utf-8");
    const titleMatch = content.match(/^title:\s*"(.*?)"/m);
    const title = titleMatch ? titleMatch[1] : id;
    return { id, title };
  });

  return {
    props: {
      news,
    },
  };
}

export default function SiteMapPage({ news }) {
  return (
    <>
      <CustomHead
        title="Карта сайта — Енисейтеплоком"
        description="Полная структура сайта Енисейтеплоком: быстрый доступ ко всем разделам, новостям и сервисам."
        keywords="карта сайта, Енисейтеплоком, структура сайта"
        ogTitle="Карта сайта — Енисейтеплоком"
        ogDescription="Официальная карта сайта Енисейтеплоком: все страницы в одном месте."
        ogImage="/logoetk.png"
        ogUrl="https://eniseiteplokom.ru/sitemap"
      />
      <Header />
      <SiteMap news={news} /> {/* ✅ Передали список новостей */}
      <Footer />
    </>
  );
}