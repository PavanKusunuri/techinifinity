import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and thought leadership from the Techinifity team on cloud, cybersecurity, DevOps, AI, and enterprise IT.",
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Insights
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            The Techinifity Blog
          </h1>
          <p className="text-base sm:text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            Expert perspectives on cloud, AI, cybersecurity, and digital
            transformation — straight from our consulting team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-[var(--color-muted-foreground)]">
              Blog posts coming soon. Check back shortly!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full group">
                    <CardContent className="flex flex-col gap-4 p-6 h-full">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="blue">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="text-lg font-bold text-[var(--color-foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)]">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
