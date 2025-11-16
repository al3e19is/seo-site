// app/page.tsx

import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata = {
  title: "三國人物小百科 | 首頁",
  description: "整理三國時代人物同故事嘅小型歷史站。",
};

export default function HomePage() {
  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>
        三國人物小百科
      </h1>
      <p style={{ fontSize: 14, color: "#555", marginBottom: 24 }}>
        呢個網站會慢慢寫三國人物、故事同決策分析，之後可以再加 AI 自動產文。
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {articles.map((article) => (
          <li
            key={article.slug}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <Link
              href={`/articles/${article.slug}`}
              style={{ fontSize: 18, fontWeight: 600, textDecoration: "none" }}
            >
              {article.title}
            </Link>
            <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
              發佈日期：{article.createdAt}
            </div>
            <p style={{ fontSize: 14, color: "#333", marginTop: 8 }}>
              {article.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
