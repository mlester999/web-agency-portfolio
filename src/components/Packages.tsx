'use client';

import { motion } from 'framer-motion';
import { packages } from '@/lib/pricing';
import { formatPrice } from '@/lib/geo';

interface PackagesProps {
  currency: 'PHP' | 'USD';
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Packages({ currency }: PackagesProps) {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, <span className="text-gradient">Transparent Pricing</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Prices adjust based on your location. No hidden fees.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            variants={item}
            className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
              pkg.popular
                ? 'glass glow-orange border-orange-500/50 md:-mt-4 md:mb-[-1rem] md:py-10'
                : 'glass'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{pkg.tagline}</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gradient">
                  {formatPrice(pkg.price[currency], currency)}
                </span>
              </div>
              <p className="text-zinc-500 text-sm">Delivery: {pkg.delivery}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-zinc-500 mb-4 text-center">
              Ideal for: {pkg.ideal}
            </p>

            <a
              href="#contact"
              className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                pkg.popular
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
