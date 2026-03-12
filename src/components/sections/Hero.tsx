"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const highlights = [
  "100+ Successful Projects Delivered",
  "15+ Years of Combined Expertise",
  "24/7 Dedicated Support",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-950 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-100 dark:bg-slate-900 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
          Trusted IT Consultancy Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-foreground)] mb-6"
        >
          Transform Your Business
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
            with Smart Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Techinifity delivers end-to-end IT consulting — from cloud migration
          and cybersecurity to AI-driven analytics. We help you stay ahead in a
          fast-evolving digital landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/case-studies" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center"
        >
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
              {h}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
