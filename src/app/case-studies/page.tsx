import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/sections/CTA";
import { ArrowRight, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Techinifity has helped enterprises solve complex technology challenges and achieve measurable business outcomes.",
};

export default function CaseStudiesPage() {
  const posts = getAllPosts("case-studies");

  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Client Case Studies
          </h1>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            Real projects, real outcomes. See how we&apos;ve helped organisations transform their
            technology and grow their business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-[var(--color-muted-foreground)]">
              Case studies coming soon. Check back shortly!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/case-studies/${post.slug}`}>
                  <Card hover className="h-full group">
                    <CardContent className="flex flex-col gap-4 p-8 h-full">
                      <div className="flex items-center gap-2">
                        {post.industry && (
                          <Badge variant="blue">{post.industry}</Badge>
                        )}
                        {post.category && (
                          <Badge variant="default">{post.category}</Badge>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-[var(--color-foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      {post.client && (
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {post.client}
                        </p>
                      )}
                      <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                        <div className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </div>
                        <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                          Read more <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
