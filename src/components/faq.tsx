'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Starter: 3-5 days. Business: 1-2 weeks. Premium: 2-4 weeks.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes. Each package includes revision rounds — Starter gets 1, Business gets 2, Premium gets 3.',
  },
  {
    q: 'What tech do you use?',
    a: 'React, Next.js, Tailwind CSS, Supabase, n8n, Make.com, GoHighLevel, Vapi.',
  },
  {
    q: 'Can you also set up automation?',
    a: 'Yes. We specialize in n8n, Make.com, and GoHighLevel automation systems.',
  },
  {
    q: 'Do you offer monthly maintenance?',
    a: 'Yes. From basic care packages to full automation support and monitoring.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 30-minute strategy call using the contact form below.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} className="text-neutral-500 shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-sm text-neutral-400">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
