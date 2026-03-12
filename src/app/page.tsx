import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techinifity - IT Consultancy & Technology Solutions",
  description:
    "Transform your business with Techinifity expert IT consulting, cloud solutions, cybersecurity, DevOps, and AI services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
