'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function useGeoLocation() {
  const [currency, setCurrency] = useState<'USD' | 'PHP'>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem('geo_currency');
    if (cached) {
      setCurrency(cached as 'USD' | 'PHP');
      setLoading(false);
      return;
    }
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        const c = data.country_code === 'PH' ? 'PHP' : 'USD';
        setCurrency(c);
        sessionStorage.setItem('geo_currency', c);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { currency, setCurrency, loading };
}

const packages = [
  {
    name: 'Starter',
    popular: true,
    php: '₱15,000',
    usd: '$700',
    features: [
      '1-page landing page',
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form',
      '1 revision round',
    ],
  },
  {
    name: 'Business',
    popular: false,
    php: '₱35,000',
    usd: '$1,500',
    features: [
      '4-6 pages',
      'Custom design',
      'SEO setup',
      'Contact form & social links',
      'Google Maps integration',
      '2 revision rounds',
    ],
  },
  {
    name: 'Premium + Automation',
    popular: false,
    php: '₱75,000+',
    usd: '$3,000+',
    features: [
      '5-8 pages',
      'Premium design & animations',
      'Lead capture system',
      'CRM integration',
      'Email automation',
      'Booking setup',
      '3 revision rounds',
    ],
  },
];

export default function Packages() {
  const { currency, setCurrency } = useGeoLocation();

  return (
    <section id="pricing" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-6">
            Choose the package that fits your business.
          </p>
          <button
            onClick={() => setCurrency(currency === 'USD' ? 'PHP' : 'USD')}
            className="inline-flex items-center gap-2 bg-[#111] border border-[#1a1a1a] rounded-full px-4 py-2 text-sm text-neutral-300 hover:border-neutral-600 transition-colors"
          >
            {currency === 'PHP' ? '🇵🇭 PHP' : '🌍 USD'} — Switch
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 relative ${
                pkg.popular ? 'border-orange-500/50 shadow-lg shadow-orange-500/10' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-white mb-6">
                {currency === 'PHP' ? pkg.php : pkg.usd}
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-400">
                    <Check size={16} className="text-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-2.5 rounded-full font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'border border-neutral-700 hover:border-neutral-500 text-white'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
