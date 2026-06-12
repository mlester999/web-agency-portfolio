import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarkyDev | Premium Websites & AI Automation for Business",
  description:
    "We build conversion-focused websites and AI automation systems. 30+ projects delivered. PH & US clients. Get a free quote.",
  keywords: [
    "web development",
    "AI automation",
    "website design",
    "n8n automation",
    "business website",
    "Philippines web developer",
  ],
  openGraph: {
    title: "MarkyDev | Premium Websites & AI Automation for Business",
    description:
      "We build conversion-focused websites and AI automation systems. 30+ projects delivered.",
    url: "https://markydev.com",
    siteName: "MarkyDev",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MarkyDev",
              description:
                "Premium websites and AI automation systems for businesses.",
              url: "https://markydev.com",
              email: "hello@markydev.com",
              telephone: "+63-900-000-0000",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PH",
              },
              priceRange: "$700 - $3000+",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
