'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'It depends on the package. Starter sites are delivered in 3–5 days, Business sites in 7–14 days, and Premium projects in 14–21 days. We always agree on a timeline before we start.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes! We require 50% upfront to begin work and the remaining 50% upon delivery and your approval. For larger projects, we can discuss custom milestone-based payments.',
  },
  {
    q: 'Can I update the website myself?',
    a: 'Absolutely. We build with user-friendly CMS platforms and provide a comprehensive handover guide with video walkthroughs so you can manage content updates on your own.',
  },
  {
    q: 'Do you only work with Philippine clients?',
    a: 'No, we proudly serve both the Philippine and US markets. Our pricing adapts based on your location so you always get fair, competitive rates.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'We offer maintenance packages that cover updates, security patches, and content changes. All projects include a free 7-day post-launch support window for bug fixes.',
  },
  {
    q: 'Do you build e-commerce stores?',
    a: 'Yes! From simple product catalogs with Stripe checkout to full-featured stores with inventory management, we build e-commerce solutions that scale with your business.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="glass rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-sm pr-4">{faq.q}</span>
              <motion.svg
                animate={{ rotate: open === idx ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-5 text-orange-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
