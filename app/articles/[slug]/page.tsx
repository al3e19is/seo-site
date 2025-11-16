import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { articles } from "@/data/articles";
import Link from "next/link";

type Params = {
  slug: string;
};

// 注意：params 係 Promise<Params>
type Props = {
  params: Promise<Params>;
};

// 🔹 動態 SEO metadata（一定要 async ＋ await params）
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // ✅ 先 await
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "文章不存在 | 三國人物小百科",
      description: "找不到這篇文章。",
    };
  }

  return {
    title: `${article.title} | 三國人物小百科`,
    description: article.description,
  };
}

// 🔹 文章頁本身都用同一個 async params pattern
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; // ✅ 一樣要 await
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 16px" }}>
      {/* 🔹 這條就係返回首頁嘅 Link */}
      <div style={{ marginBottom: 16, fontSize: 14 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          ← 返回首頁
        </Link>
      </div>
      <article>
        <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 8 }}>
          {article!.title}
        </h1>
        <div style={{ fontSize: 12, color: "#777", marginBottom: 16 }}>
          發佈日期：{article!.createdAt}
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.7 }}>
          <ReactMarkdown>{article!.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}