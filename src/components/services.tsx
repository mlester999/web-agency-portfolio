'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Zap, Bot } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional sites that convert visitors into customers.',
    features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Contact forms'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Stores',
    description: 'Online stores with secure checkout and product management.',
    features: ['Secure payments', 'Product management', 'Order tracking', 'Mobile-first'],
  },
  {
    icon: Zap,
    title: 'AI Automation Systems',
    description: 'n8n, Make.com workflows that save hours of manual work.',
    features: ['Workflow automation', 'CRM integration', 'Email sequences', 'Data sync'],
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description: 'Voice, chat, and email agents for customer support.',
    features: ['Voice agents', 'Chat support', 'Lead qualification', '24/7 availability'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            End-to-end solutions for businesses that want to scale online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <service.icon className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-500">
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
