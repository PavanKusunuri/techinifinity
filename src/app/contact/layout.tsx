import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Techinifity — talk to our consultants about cloud, cybersecurity, DevOps, AI services, or any technology challenge your business faces.",
  keywords: [
    "contact Techinifity",
    "IT consulting enquiry",
    "cloud solutions contact",
    "hire IT consultants",
    "technology consultation",
    "get a quote",
  ],
  alternates: {
    canonical: "https://techinifity.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://techinifity.com/contact",
    title: "Contact Us | Techinifity",
    description:
      "Reach out to Techinifity's consulting team — we're ready to help with cloud, cybersecurity, DevOps, AI, and all your technology needs.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Contact Techinifity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Techinifity",
    description: "Talk to Techinifity's consultants about your technology challenges.",
    images: ["/og/default.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
