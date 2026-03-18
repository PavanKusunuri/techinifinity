import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ParticleFieldClient from "@/components/three/ParticleFieldClient";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://techinifity.com"),
  title: {
    default: "Techinifity — IT Consultancy & Technology Solutions",
    template: "%s | Techinifity",
  },
  description:
    "Techinifity delivers expert IT consulting, cloud solutions, cybersecurity, DevOps, and AI services that transform businesses and drive growth.",
  keywords: [
    "IT consultancy",
    "IT consulting services",
    "cloud solutions",
    "cloud migration",
    "cybersecurity services",
    "DevOps",
    "CI/CD automation",
    "AI consulting",
    "machine learning solutions",
    "managed IT support",
    "digital transformation",
    "enterprise technology",
    "data analytics",
    "web application development",
    "mobile app development",
    "software consultancy",
  ],
  authors: [{ name: "Techinifity" }],
  creator: "Techinifity",
  publisher: "Techinifity",
  category: "Technology",
  alternates: {
    canonical: "https://techinifity.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techinifity.com",
    siteName: "Techinifity",
    title: "Techinifity — IT Consultancy & Technology Solutions",
    description:
      "Expert IT consulting, cloud solutions, cybersecurity, and AI services that transform businesses.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Techinifity — IT Consultancy & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@techinifity",
    creator: "@techinifity",
    title: "Techinifity — IT Consultancy",
    description:
      "Expert IT consulting and technology solutions for modern businesses.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ParticleFieldClient />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Techinifity",
              url: "https://techinifity.com",
              logo: "https://techinifity.com/og/default.png",
              description:
                "Techinifity delivers expert IT consulting, cloud solutions, cybersecurity, DevOps, and AI services.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@techinifity.com",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.linkedin.com/company/techinifity",
                "https://twitter.com/techinifity",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
