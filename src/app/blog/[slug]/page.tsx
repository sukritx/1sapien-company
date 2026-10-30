import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { BlogArticle } from "@/components/sites/1sapien-com-7e0a74f7/shared/BlogArticle";
import { CaseStudyArticle } from "@/components/sites/1sapien-com-7e0a74f7/shared/CaseStudyArticle";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...CASE_STUDIES.map((study) => ({ slug: study.slug })),
    ...BLOG_POSTS.map((post) => ({ slug: post.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (post) {
    return {
      title: post.seoTitle,
      description: post.description,
      alternates: { canonical: `/blog/${post.slug}` },
      keywords: [post.keyword],
      openGraph: {
        type: "article",
        title: post.seoTitle,
        description: post.description,
        url: `${SITE_URL}/blog/${post.slug}`,
        siteName: SITE_NAME,
        publishedTime: post.dateISO,
        modifiedTime: post.updatedISO ?? post.dateISO,
        authors: [post.author.name],
        ...(post.cover ? { images: [post.cover] } : {}),
      },
      twitter: {
        card: "summary_large_image",
        title: post.seoTitle,
        description: post.description,
        ...(post.cover ? { images: [post.cover] } : {}),
      },
    };
  }

  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} - 1Sapien`,
    description: study.description,
    alternates: { canonical: `/blog/${study.slug}` },
  };
}

export default async function BlogOrCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (post) {
    const related = getRelatedPosts(post);
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.dateISO,
      dateModified: post.updatedISO ?? post.dateISO,
      author: { "@type": "Person", name: post.author.name },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/sites/afterquery-com-7e0a74f7/shared/seo/og-default.png`,
        },
      },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      keywords: post.keyword,
      articleSection: post.category,
      ...(post.cover ? { image: `${SITE_URL}${post.cover}` } : {}),
    };
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${SITE_URL}/blog/${post.slug}`,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader activeHref="/blog" />
        <div className="flex flex-1 flex-col">
          <main className="flex-1">
            <BlogArticle post={post} related={related} />
          </main>
          <SiteFooter />
        </div>
      </>
    );
  }

  const study = getCaseStudy(slug);
  if (!study) notFound();
  const related = CASE_STUDIES.filter((item) => item.slug !== study.slug);

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <CaseStudyArticle study={study} related={related} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
