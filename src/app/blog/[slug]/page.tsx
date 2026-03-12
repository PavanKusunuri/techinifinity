import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="blue">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm text-[var(--color-muted-foreground)] mb-10 pb-8 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </div>
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
