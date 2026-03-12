import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    "cloud solutions",
    "cybersecurity",
    "DevOps",
    "AI consulting",
    "managed IT support",
    "digital transformation",
  ],
  authors: [{ name: "Techinifity" }],
  creator: "Techinifity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techinifity.com",
    siteName: "Techinifity",
    title: "Techinifity — IT Consultancy & Technology Solutions",
    description:
      "Expert IT consulting, cloud solutions, cybersecurity, and AI services that transform businesses.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Techinifity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techinifity — IT Consultancy",
    description: "Expert IT consulting and technology solutions for modern businesses.",
    images: ["/og/default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
