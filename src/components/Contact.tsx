'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      business: (form.elements.namedItem('business') as HTMLInputElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Build Something <span className="text-gradient">Great</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Tell us about your project. We&apos;ll get back within 24 hours.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-6 md:p-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Name *
            </label>
            <input
              name="name"
              required
              placeholder="Juan Dela Cruz"
              className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Business Name
            </label>
            <input
              name="business"
              placeholder="Your Company"
              className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Budget Range
            </label>
            <select
              name="budget"
              className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors appearance-none"
            >
              <option value="">Select a range</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 – $1,000">$500 – $1,000</option>
              <option value="$1,000 – $3,000">$1,000 – $3,000</option>
              <option value="$3,000+">$3,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Project Description *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, goals, and timeline..."
            className="w-full bg-zinc-900/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-colors resize-none"
          />
        </div>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center bg-green-500/10 border border-green-500/20 rounded-xl py-2">
            ✓ Message sent! We&apos;ll get back to you within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </section>
  );
}
