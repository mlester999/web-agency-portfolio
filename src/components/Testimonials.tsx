'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/testimonials';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-orange-500' : 'text-zinc-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
      </motion.div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass rounded-2xl p-6 min-w-[280px] snap-start shrink-0"
          >
            <Stars rating={t.rating} />
            <p className="text-zinc-300 text-sm leading-relaxed mb-4 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-zinc-500 text-xs">
                {t.role}, {t.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: 3-col grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass rounded-2xl p-6 hover:glow-orange transition-all duration-300"
          >
            <Stars rating={t.rating} />
            <p className="text-zinc-300 text-sm leading-relaxed mb-4 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-zinc-500 text-xs">
                {t.role}, {t.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
