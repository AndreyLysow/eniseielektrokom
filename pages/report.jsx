import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";

// Импорт без SSR (иначе всё равно будет window error)
const AnimatedDotsBackground = dynamic(
  () => import("@/components/AnimatedDotsBackground"),
  { ssr: false }
);

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/report.md");
  const reportContent = await res.text();

  return {
    props: { reportContent },
  };
}

export default function Report({ reportContent }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <AnimatedDotsBackground />
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "60px 20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <ReactMarkdown>{reportContent}</ReactMarkdown>
      </div>
    </div>
  );
}
