// pages/report.jsx
import ReactMarkdown from "react-markdown";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/report.md");
  const reportContent = await res.text();

  return {
    props: {
      reportContent,
    },
  };
}

export default function Report({ reportContent }) {
  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: "url('../main2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "40px 20px",
      }}
    >
 
    </div>
  );
}
