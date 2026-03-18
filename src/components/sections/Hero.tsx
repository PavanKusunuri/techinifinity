"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("@/components/three/HeroParticles"), {
  ssr: false,
});

const trustBadges = [
  { icon: Shield, label: "ISO 27001 Aligned" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Award, label: "150+ Projects Delivered" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Three.js particles canvas */}
      <HeroParticles />

      {/* Deep gradient background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-900/20 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-slate-300 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Trusted IT Consultancy Partner
          <span className="ml-1 px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
            Est. 2010
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
        >
          Transform Your
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Business with AI
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Techinifity delivers end-to-end IT consulting from cloud migration and cybersecurity
          to AI-driven analytics. We help enterprises stay ahead in a fast-evolving digital landscape.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="gap-2 w-full sm:w-auto text-base px-8 py-4">
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/case-studies" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-4">
              View Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/4 border border-white/8 text-slate-400 text-sm"
            >
              <Icon className="w-4 h-4 text-indigo-400" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 pt-12 border-t border-white/6 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-slate-500 text-sm mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
