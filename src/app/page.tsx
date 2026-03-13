import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techinifity — IT Consultancy & Technology Solutions",
  description:
    "Transform your business with Techinifity's expert IT consulting, cloud solutions, cybersecurity, DevOps, and AI services. Results-driven technology partnerships.",
  keywords: [
    "IT consultancy",
    "technology solutions",
    "cloud solutions",
    "cybersecurity",
    "DevOps services",
    "AI consulting",
    "digital transformation",
    "managed IT support",
    "enterprise IT services",
  ],
  alternates: {
    canonical: "https://techinifity.com",
  },
  openGraph: {
    type: "website",
    url: "https://techinifity.com",
    title: "Techinifity — IT Consultancy & Technology Solutions",
    description:
      "Transform your business with expert IT consulting, cloud solutions, cybersecurity, DevOps, and AI services.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Techinifity — IT Consultancy & Technology Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techinifity — IT Consultancy & Technology Solutions",
    description: "Transform your business with expert IT consulting, cloud, cybersecurity, DevOps, and AI services.",
    images: ["/og/default.png"],
  },
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
