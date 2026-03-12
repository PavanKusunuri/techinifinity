"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cloud,
  Shield,
  GitBranch,
  BarChart3,
  Brain,
  Headphones,
  Smartphone,
  Globe,
  Layout,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless cloud migration, architecture design, and multi-cloud management for AWS, Azure, and GCP.",
    slug: "cloud-solutions",
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, threat detection, compliance frameworks, and incident response.",
    slug: "cybersecurity",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Automated pipelines, containerization with Docker/Kubernetes, and infrastructure-as-code.",
    slug: "devops",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Business intelligence dashboards, data engineering pipelines, and actionable insights from your data.",
    slug: "data-analytics",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom ML models, NLP solutions, predictive analytics, and AI integration into existing systems.",
    slug: "ai-ml",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    description:
      "24/7 monitoring, helpdesk support, infrastructure management, and proactive maintenance.",
    slug: "it-support",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform iOS and Android apps built with Flutter and React Native — performant, beautiful, and production-ready.",
    slug: "mobile-applications",
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Scalable full-stack web applications using React, Next.js, Node.js, and modern cloud infrastructure tailored to your business logic.",
    slug: "web-applications",
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950",
  },
  {
    icon: Layout,
    title: "Websites",
    description:
      "Fast, SEO-optimised, responsive websites — from marketing landing pages to multi-page corporate sites that convert visitors into clients.",
    slug: "websites",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Comprehensive IT Services"
          description="From strategy to execution, we cover every layer of your technology needs with expert consultants and proven methodologies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card hover className="h-full group">
                    <CardContent className="flex flex-col gap-4">
                      <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[var(--color-foreground)] mb-2 flex items-center justify-between">
                          {service.title}
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
          >
            Explore all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
