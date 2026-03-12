"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinanceCore Inc.",
    avatar: "SJ",
    rating: 5,
    quote:
      "Techinifity completely transformed our cloud infrastructure. We reduced costs by 40% and improved uptime to 99.99%. Their team was professional, responsive, and truly expert.",
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, HealthBridge",
    avatar: "MC",
    rating: 5,
    quote:
      "The cybersecurity audit they conducted identified critical vulnerabilities we never knew existed. Their remediation roadmap was practical and well-executed. I can't recommend them enough.",
  },
  {
    name: "Priya Patel",
    role: "Director of IT, RetailMax",
    avatar: "PP",
    rating: 5,
    quote:
      "Our DevOps transformation with Techinifity cut release cycles from 2 weeks to 2 days. The CI/CD pipelines they built are rock solid. Exceptional work.",
  },
  {
    name: "James Wilson",
    role: "CEO, DataSphere Analytics",
    avatar: "JW",
    rating: 5,
    quote:
      "The ML models Techinifity built for our customer churn prediction have saved us millions. Their AI team has a rare combination of technical depth and business acumen.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Stories"
          title="Trusted by Industry Leaders"
          description="Don't just take our word for it — here's what our clients say about working with Techinifity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-blue-200 dark:text-blue-900" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--color-border)]">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[var(--color-foreground)]">{t.name}</p>
                      <p className="text-xs text-[var(--color-muted-foreground)]">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
