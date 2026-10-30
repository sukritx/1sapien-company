import { FOUNDATION_POSTS } from "./foundations";
import { COMPARISON_POSTS } from "./comparisons";
import { INDUSTRY_POSTS } from "./industries";
import { PLAYBOOK_POSTS } from "./playbooks";
import type { BlogPost } from "./types";

const ALL_POSTS: BlogPost[] = [
  ...FOUNDATION_POSTS,
  ...COMPARISON_POSTS,
  ...INDUSTRY_POSTS,
  ...PLAYBOOK_POSTS,
];

export const BLOG_POSTS = ALL_POSTS.sort(
  (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (item) => item.slug !== post.slug && item.category === post.category,
  );
  const others = BLOG_POSTS.filter(
    (item) => item.slug !== post.slug && item.category !== post.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export type { BlogBlock, BlogPost } from "./types";
