import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDir = path.join(process.cwd(), "news-content");

export function getAllNews() {
  const files = fs.readdirSync(newsDir);

  return files
    .map((filename) => {
      const id = filename.replace(/\.md$/, "");
      const fullPath = path.join(newsDir, filename);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContent);

      return {
        id,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // сортировка по дате
}

export function getNewsById(id) {
  const fullPath = path.join(newsDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    id,
    ...data,
    content,
  };
}