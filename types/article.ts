export type Persona = 'intp' | 'intj' | 'infp'; // 之後可以加

export type ArticleStatus = 'draft' | 'published';

export interface Article {
  id: string;              // Firestore 用 id / 現階段可以用 slug
  slug: string;
  title: string;
  description: string;
  persona: Persona;
  category?: string;       // 大分類，例如 'history' / 'japan' / 'game'
  tags: string[];          // ['三國', '曹操', '歷史']
  content: string;         // Markdown
  status: ArticleStatus;   // 'draft' / 'published'
  seoTitle?: string;
  metaDescription?: string;
  createdAt: string;       // ISO string
  publishedAt?: string;    // ISO string
}