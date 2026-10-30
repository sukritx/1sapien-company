export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "image"; src?: string; alt: string; caption?: string };

export type BlogAuthor = {
  name: string;
  avatar?: string;
};

export type BlogPost = {
  slug: string;
  keyword: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  dateText: string;
  dateISO: string;
  updatedISO?: string;
  readingTime: string;
  author: BlogAuthor;
  cover?: string;
  coverAlt: string;
  coverPrompt: string;
  blocks: BlogBlock[];
};

export const BLOG_AUTHOR: BlogAuthor = {
  name: "Sukrit Xuto",
  avatar: "/sites/afterquery-com-7e0a74f7/shared/authors/sukrit.jpg",
};
