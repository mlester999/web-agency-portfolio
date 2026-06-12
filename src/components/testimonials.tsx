'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Hoop Shorts',
    quote: 'Completely transformed our content workflow... 90% less manual editing.',
    result: '90% less manual work',
  },
  {
    name: 'Motivation Timepiece',
    quote: 'Generates quotes, designs images, and posts to Facebook without me lifting a finger... 100% automated.',
    result: '100% automated posting',
  },
  {
    name: 'Mitchy Dental Lounge',
    quote: 'Handles all our appointment calls... Genius. 0 missed bookings.',
    result: '0 missed bookings',
  },
  {
    name: 'Money Reset',
    quote: 'Stitched our funnel and voice agent together so cleanly that scheduling now runs without us.',
    result: 'Fully autonomous scheduling',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-sm text-neutral-300 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{t.name}</span>
                <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
