'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and what success looks like.' },
  { num: '02', title: 'Strategy & Design', desc: 'We plan the architecture, design mockups, and get your approval.' },
  { num: '03', title: 'Build & Test', desc: 'We develop, test on all devices, and refine until it\'s perfect.' },
  { num: '04', title: 'Launch & Support', desc: 'We deploy, train your team, and provide ongoing support.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-orange-500/10 border-2 border-orange-500/30 flex items-center justify-center mx-auto mb-4 relative z-10 bg-[#0d0d0d]">
                <span className="text-orange-500 font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
