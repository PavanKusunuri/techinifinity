import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { servicesData } from "@/data/services";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  const url = `https://techinifity.com/services/${slug}`;
  return {
    title: service.title,
    description: service.tagline,
    keywords: [
      service.title,
      ...service.technologies.slice(0, 6),
      "IT consulting",
      "Techinifity",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${service.title} | Techinifity`,
      description: service.tagline,
      images: [
        {
          url: "/og/default.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Techinifity`,
      description: service.tagline,
      images: ["/og/default.png"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            {service.tagline}
          </p>
          <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-8">
            {service.description}
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                What You Get
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-[var(--color-muted-foreground)]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge key={tech} variant="blue">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((p) => (
                    <div key={p.step} className="flex gap-4">
                      <span className="text-2xl font-bold text-blue-200 dark:text-blue-900 w-8 shrink-0">
                        {p.step}
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--color-foreground)]">{p.title}</p>
                        <p className="text-sm text-[var(--color-muted-foreground)]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-8">
            Let&apos;s discuss how {service.title} can drive value for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Book a Free Consultation</Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
