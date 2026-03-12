import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cloud, Shield, GitBranch, BarChart3, Brain, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Techinifity's full range of IT services: cloud solutions, cybersecurity, DevOps, data analytics, AI/ML, and managed IT support.",
};

const services = [
  {
    icon: Cloud,
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    tagline: "Migrate, modernise, and optimise your cloud infrastructure.",
    description:
      "We design and implement secure, scalable cloud architectures across AWS, Azure, and GCP. From lift-and-shift migrations to cloud-native rebuilds, we handle the full lifecycle.",
    deliverables: ["Cloud readiness assessment", "Architecture design & PoC", "Migration execution", "Cost optimisation", "24/7 cloud monitoring"],
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950",
  },
  {
    icon: Shield,
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protect your business from evolving cyber threats.",
    description:
      "Our certified security professionals conduct comprehensive audits, implement zero-trust frameworks, and provide ongoing threat intelligence to keep your assets safe.",
    deliverables: ["Security risk assessment", "Penetration testing", "Zero-trust implementation", "SOC setup & monitoring", "Compliance (ISO 27001, SOC 2)"],
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950",
  },
  {
    icon: GitBranch,
    slug: "devops",
    title: "DevOps & CI/CD",
    tagline: "Ship faster and more reliably with automated pipelines.",
    description:
      "We transform your development workflows with Docker, Kubernetes, Terraform, and modern CI/CD platforms — reducing release cycles and improving deployment confidence.",
    deliverables: ["DevOps maturity assessment", "CI/CD pipeline design", "Container orchestration", "Infrastructure-as-code", "Observability & alerting"],
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950",
  },
  {
    icon: BarChart3,
    slug: "data-analytics",
    title: "Data & Analytics",
    tagline: "Turn raw data into actionable business intelligence.",
    description:
      "From data warehouse design to real-time dashboards, we build the data infrastructure that helps your team make faster, smarter decisions.",
    deliverables: ["Data strategy consulting", "Data warehouse & lakehouse", "ETL pipeline engineering", "BI dashboards (PowerBI, Tableau)", "Data governance framework"],
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950",
  },
  {
    icon: Brain,
    slug: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Unlock competitive advantage with intelligent systems.",
    description:
      "We develop custom ML models, NLP pipelines, computer vision systems, and AI-augmented workflows that create measurable value for your business.",
    deliverables: ["AI opportunity assessment", "Custom ML model development", "MLOps & model deployment", "NLP & computer vision", "LLM integration & fine-tuning"],
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950",
  },
  {
    icon: Headphones,
    slug: "it-support",
    title: "Managed IT Support",
    tagline: "Proactive IT management so you can focus on your business.",
    description:
      "Our managed services team provides 24/7 monitoring, helpdesk support, patch management, and infrastructure maintenance under agreed SLAs.",
    deliverables: ["24/7 NOC monitoring", "Tier 1-3 helpdesk support", "Patch & update management", "Disaster recovery planning", "Monthly IT health reports"],
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            End-to-End IT Services
          </h1>
          <p className="text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            Six core service areas, each staffed by certified specialists with deep
            domain expertise and a track record of delivery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} hover className="group overflow-hidden">
                  <CardContent className="flex flex-col gap-4 p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[var(--color-foreground)]">{service.title}</h2>
                        <p className={`text-sm font-medium ${service.color}`}>{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-[var(--color-muted-foreground)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:gap-3 transition-all mt-2"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
