import { headers } from "next/headers";
import { detectCurrency } from "@/lib/geo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const headersList = await headers();
  const country =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("cf-ipcountry") ||
    "PH";
  const geo = detectCurrency(country);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio />
      <Packages currency={geo.currency} />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
