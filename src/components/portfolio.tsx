'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Automation', 'AI Agents', 'Funnels', 'E-commerce', 'Websites'];

const projects = [
  {
    title: 'Hoop Shorts',
    category: 'Automation',
    description: 'AI-powered NBA video clipping and Shorts automation across YouTube, Facebook, and Instagram.',
    tech: ['n8n', 'AI Video', 'Multi-platform'],
    gradient: 'from-orange-600 to-red-600',
    result: '90% less manual editing',
  },
  {
    title: 'Money Reset AI Voice Agent',
    category: 'AI Agents',
    description: '24/7 autonomous appointment scheduling via Retell-powered AI voice receptionist.',
    tech: ['n8n', 'Retell AI', 'GoHighLevel'],
    gradient: 'from-pink-600 to-purple-600',
    result: 'Zero missed bookings',
  },
  {
    title: 'Avouria Shopify Store',
    category: 'E-commerce',
    description: 'Custom Shopify storefront with VIP membership auto-added at checkout and AI-powered "Find My Size" quiz.',
    tech: ['Shopify', 'Liquid', 'AI Quiz'],
    gradient: 'from-amber-600 to-yellow-600',
    result: 'Custom checkout flow',
  },
  {
    title: 'VTL Sleep Spray',
    category: 'E-commerce',
    description: 'Custom-built Shopify Liquid storefront with bundle selector and review carousel for conversion optimization.',
    tech: ['Shopify', 'Liquid', 'CRO'],
    gradient: 'from-indigo-600 to-blue-600',
    result: 'Conversion-focused design',
  },
  {
    title: 'Mitchy Dental Lounge',
    category: 'AI Agents',
    description: 'AI voice receptionist that handles all appointment calls for a dental clinic, integrated with Google Calendar.',
    tech: ['Vapi', 'n8n', 'Google Calendar'],
    gradient: 'from-teal-600 to-cyan-600',
    result: '0 missed bookings',
  },
  {
    title: 'BOF Growth Guide',
    category: 'Automation',
    description: 'Complex Make.com scenario for processing and distributing bottom-of-funnel content across ClickUp and Google Sheets.',
    tech: ['Make.com', 'ClickUp', 'Google Sheets'],
    gradient: 'from-blue-600 to-indigo-600',
    result: '100% automated distribution',
  },
  {
    title: 'Zorivelle Realty Chatbot',
    category: 'AI Agents',
    description: 'RAG-powered chatbot for querying real estate documents and answering property questions 24/7.',
    tech: ['RAG', 'n8n', 'Vector DB'],
    gradient: 'from-emerald-600 to-green-600',
    result: '24/7 property support',
  },
  {
    title: 'VERDÉ Sales Funnel',
    category: 'Funnels',
    description: 'High-converting GHL sales funnel for sparkling pistachio brand with automated nurture sequences.',
    tech: ['GoHighLevel', 'SMS/Email', 'Funnels'],
    gradient: 'from-lime-600 to-green-600',
    result: 'Automated nurture pipeline',
  },
  {
    title: 'YouTube Hook Research',
    category: 'Automation',
    description: 'Automated viral video analysis and AI-generated ad hook variations with zero manual entry.',
    tech: ['n8n', 'Gemini AI', 'YouTube API'],
    gradient: 'from-red-600 to-orange-600',
    result: 'Zero manual research',
  },
  {
    title: 'AI LinkedIn Content Publishing',
    category: 'Automation',
    description: 'Zero-touch LinkedIn publishing after approval via Slack, with full audit trail and carousel support.',
    tech: ['n8n', 'Slack', 'OpenAI'],
    gradient: 'from-cyan-600 to-blue-600',
    result: 'Zero-touch publishing',
  },
  {
    title: '4BR Guest Follow-Up',
    category: 'Automation',
    description: 'QR check-in system with conditional follow-up sequences and tag-based tracking.',
    tech: ['GoHighLevel', 'QR Automation', 'SMS'],
    gradient: 'from-green-600 to-emerald-600',
    result: 'Zero missed guests',
  },
  {
    title: 'BrightSmile Dental Funnel',
    category: 'Funnels',
    description: 'Appointment booking funnel on GHL with automated reminders and no-show follow-ups.',
    tech: ['GoHighLevel', 'Booking', 'SMS/Email'],
    gradient: 'from-sky-600 to-blue-600',
    result: 'Automated patient booking',
  },
  {
    title: 'Apex Rejuvenation Telehealth',
    category: 'Funnels',
    description: 'Automated booking, confirmation, and no-show follow-up sequences for telehealth funnel.',
    tech: ['GoHighLevel', 'Funnel', 'SMS/Email'],
    gradient: 'from-violet-600 to-purple-600',
    result: 'Automated patient flow',
  },
  {
    title: 'Motivation Timepiece',
    category: 'Automation',
    description: 'Automated workflow for generating motivational quote images and publishing to Facebook without lifting a finger.',
    tech: ['n8n', 'DALL-E', 'Facebook API'],
    gradient: 'from-purple-600 to-pink-600',
    result: '100% automated posting',
  },
  {
    title: 'Cavinti Suite Airbnb Bot',
    category: 'AI Agents',
    description: 'AI support chatbot for Airbnb property handling guest inquiries, check-in info, and local recommendations 24/7.',
    tech: ['AI Chat', 'n8n', 'Airbnb'],
    gradient: 'from-sky-600 to-indigo-600',
    result: '24/7 guest support',
  },
  {
    title: 'Zorivelle Realty Funnel',
    category: 'Funnels',
    description: 'Modern real estate funnel with GoHighLevel forms, calendars, and automated lead capture.',
    tech: ['GoHighLevel', 'Forms', 'Calendar'],
    gradient: 'from-emerald-600 to-teal-600',
    result: 'Automated lead capture',
  },
  {
    title: 'AI Expense Tracking',
    category: 'Automation',
    description: 'Automated expense tracking from Telegram into Notion in real time with categorization.',
    tech: ['n8n', 'Telegram', 'Notion'],
    gradient: 'from-slate-600 to-gray-600',
    result: 'Real-time expense sync',
  },
  {
    title: 'Avouria AI Size Quiz',
    category: 'AI Agents',
    description: 'AI-powered "Find My Size" quiz integrated into Shopify checkout for personalized sizing recommendations.',
    tech: ['Shopify', 'AI', 'Quiz Builder'],
    gradient: 'from-amber-600 to-orange-600',
    result: 'Reduced returns',
  },
  {
    title: 'Slack AI Image Analyzer',
    category: 'AI Agents',
    description: 'Brings AI image analysis and generation commands into Slack workspace via /analyze and /imagine.',
    tech: ['Slack', 'DALL-E', 'Vision AI'],
    gradient: 'from-fuchsia-600 to-purple-600',
    result: 'In-SLACK AI tools',
  },
  {
    title: 'Money Reset Lead Funnel',
    category: 'Funnels',
    description: 'Lead magnet and sales funnel for an ebook with automated capture and nurture sequences.',
    tech: ['GoHighLevel', 'Ebook', 'Email'],
    gradient: 'from-rose-600 to-pink-600',
    result: 'Automated lead magnet',
  },
  {
    title: 'AI Series Masterclass',
    category: 'Websites',
    description: 'Learning Management System for selling AI courses with dark-themed design, student dashboard, admin panel, and GCash payment integration.',
    tech: ['React', 'Supabase', 'Vercel', 'Tailwind'],
    gradient: 'from-purple-600 to-blue-600',
    result: '50+ video lessons',
  },
  {
    title: 'AutomateWithMarky.com',
    category: 'Websites',
    description: 'Personal automation portfolio and agency site showcasing 30+ case studies, service pages, and booking system.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    gradient: 'from-blue-600 to-cyan-600',
    result: '30+ case studies showcased',
  },
  {
    title: 'ReelScript',
    category: 'Websites',
    description: 'Netflix-style AI script generation platform with admin dashboard, user auth, and subscription management.',
    tech: ['React 19', 'TanStack Start', 'Supabase'],
    gradient: 'from-red-600 to-orange-600',
    result: 'AI-powered script engine',
  },
  {
    title: 'Phone Story Forge',
    category: 'Websites',
    description: 'Content creation platform with video tools, AI story generation, and course management for creators.',
    tech: ['React', 'Supabase', 'Vercel'],
    gradient: 'from-green-600 to-teal-600',
    result: 'Full creator platform',
  },
  {
    title: 'AI Property Visualization',
    category: 'Automation',
    description: 'Generates MLS-style images and listing copy from a simple form intake using AI.',
    tech: ['n8n', 'DALL-E', 'Real Estate'],
    gradient: 'from-teal-600 to-emerald-600',
    result: 'Instant listing assets',
  },
  {
    title: 'Marko Bar Deal Automation',
    category: 'Automation',
    description: 'Zapier workflow for sales pipeline, contract generation, and Slack notifications.',
    tech: ['Zapier', 'Slack', 'Contracts'],
    gradient: 'from-orange-600 to-amber-600',
    result: 'Automated sales pipeline',
  },
  {
    title: 'AI Email Agent',
    category: 'AI Agents',
    description: 'Classifies inbound emails, auto-replies via knowledge base, and flags low-confidence cases to Slack.',
    tech: ['n8n', 'OpenAI', 'Slack'],
    gradient: 'from-blue-600 to-indigo-600',
    result: 'Auto-classified emails',
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
                  {project.result && (
                    <p className="text-xs text-green-400 mb-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {project.result}
                    </p>
                  )}
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
