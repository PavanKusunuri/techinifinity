import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Calendar, Clock, Building2 } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts("case-studies");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("case-studies", slug);
  if (!post) return {};
  const url = `https://techinifity.com/case-studies/${slug}`;
  const image = post.coverImage || "/og/default.png";
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...(post.tags ?? []),
      post.industry ?? "",
      "case study",
      "IT consulting results",
      "Techinifity",
    ].filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author || "Techinifity"],
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug("case-studies", slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage || "https://techinifity.com/og/default.png",
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: post.author || "Techinifity",
            },
            publisher: {
              "@type": "Organization",
              name: "Techinifity",
              logo: {
                "@type": "ImageObject",
                url: "https://techinifity.com/og/default.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://techinifity.com/case-studies/${post.slug}`,
            },
          }),
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.industry && <Badge variant="blue">{post.industry}</Badge>}
          {post.category && <Badge variant="default">{post.category}</Badge>}
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm text-[var(--color-muted-foreground)] mb-10 pb-8 border-b border-[var(--color-border)]">
          {post.client && (
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {post.client}
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formatDate(post.date)}
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </div>
          )}
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
