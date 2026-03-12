"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-blue-600 dark:bg-blue-700 px-8 py-16 text-center text-white"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full opacity-30 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-800 rounded-full opacity-30 blur-2xl" />

          <div className="relative z-10">
            <CalendarDays className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Book a free 30-minute consultation with one of our senior
              consultants. No sales pitch — just honest advice tailored to your
              business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 gap-2 w-full sm:w-auto"
                >
                  Book Free Consultation <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
