import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarkyDev — Premium Websites & Automation for PH & US Businesses",
  description:
    "We build high-converting websites, e-commerce stores, and automation systems for businesses in the Philippines and the United States. Not just pretty designs — results.",
  keywords: [
    "web design Philippines",
    "website developer PH",
    "US web design agency",
    "e-commerce website",
    "business website",
    "automation",
    "CRM setup",
    "lead generation",
    "MarkyDev",
  ],
  authors: [{ name: "MarkyDev" }],
  openGraph: {
    title: "MarkyDev — Premium Websites & Automation",
    description:
      "High-converting websites and automation systems for businesses in PH and US.",
    url: "https://markydev.com",
    siteName: "MarkyDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarkyDev — Premium Websites & Automation",
    description:
      "High-converting websites and automation systems for businesses in PH and US.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
