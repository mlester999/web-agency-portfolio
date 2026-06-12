'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    description:
      'We learn about your business, goals, and target audience',
    icon: '📞',
  },
  {
    num: '02',
    title: 'Strategy & Design',
    description:
      'We create a conversion-focused design tailored to your brand',
    icon: '🎨',
  },
  {
    num: '03',
    title: 'Build & Test',
    description:
      'We develop your site with clean code, test on all devices',
    icon: '⚙️',
  },
  {
    num: '04',
    title: 'Launch & Support',
    description:
      'We deploy, optimize, and provide ongoing support',
    icon: '🚀',
  },
];

export default function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block relative">
        {/* Connecting line */}
        <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-zinc-800 via-orange-500/40 to-zinc-800" />

        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative text-center"
            >
              {/* Number badge */}
              <div className="relative z-10 mx-auto w-24 h-24 rounded-2xl glass flex items-center justify-center mb-6 glow-orange">
                <span className="text-3xl">{step.icon}</span>
              </div>
              {/* Dot on line */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 z-20 hidden" />

              <span className="text-orange-500 text-sm font-bold tracking-wider">
                {step.num}
              </span>
              <h3 className="text-lg font-bold mt-1 mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-zinc-700 to-zinc-800" />

        <div className="space-y-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-orange-500 border-2 border-zinc-900 shadow-lg shadow-orange-500/40" />

              <span className="text-orange-500 text-xs font-bold tracking-wider">
                {step.num}
              </span>
              <h3 className="text-lg font-bold mt-1 mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
