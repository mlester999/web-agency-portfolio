'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Websites', 'Automation', 'AI Agents'];

const projects = [
  {
    title: 'AI Series Masterclass',
    category: 'Websites',
    description: 'Dark-themed learning platform with course management, student dashboard, payment integration.',
    tech: ['React', 'Supabase', 'Vercel'],
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    title: 'ReelScript',
    category: 'Websites',
    description: 'Netflix-style script generation platform with admin dashboard.',
    tech: ['React', 'TanStack', 'Supabase'],
    gradient: 'from-red-600 to-orange-600',
  },
  {
    title: 'Phone Story Forge',
    category: 'Websites',
    description: 'Content creation platform with video tools and AI-powered story generation.',
    tech: ['React', 'Supabase'],
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'HomeVeal AI Agent',
    category: 'Automation',
    description: 'AI voice agent for home remodeling company. Handles appointment booking, lead qualification.',
    tech: ['n8n', 'Vapi', 'GoHighLevel'],
    gradient: 'from-orange-600 to-yellow-600',
  },
  {
    title: 'Money Reset Voice Agent',
    category: 'AI Agents',
    description: '24/7 autonomous appointment scheduling via AI voice. Zero missed bookings.',
    tech: ['n8n', 'Retell AI'],
    gradient: 'from-pink-600 to-purple-600',
  },
  {
    title: 'AutomateWithMarky',
    category: 'Websites',
    description: 'Personal automation portfolio showcasing 30+ systems built.',
    tech: ['Next.js', 'Tailwind'],
    gradient: 'from-blue-600 to-cyan-600',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Recent <span className="gradient-text">Work</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-[#111] text-neutral-400 hover:text-white border border-[#1a1a1a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover overflow-hidden group"
              >
                {/* Gradient placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                  <span className="text-white/30 text-3xl font-bold">{project.title}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-[#1a1a1a] text-neutral-500 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
