import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Supply Chain',
    company: 'GlobalTrade Corp',
    rating: 5,
    text: 'OrbisPorté has transformed our customs clearance process. What used to take days now happens in minutes with exceptional accuracy.',
    avatar: 'SM',
    gradient: 'from-primary to-primary-light',
  },
  {
    name: 'James Chen',
    role: 'Director of Trade Compliance',
    company: 'Pacific Imports Ltd',
    rating: 5,
    text: 'The AI classification engine is incredibly accurate. Our HSN code errors have dropped to near zero since implementing OrbisPorté.',
    avatar: 'JC',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Chief Operations Officer',
    company: 'LatAm Shipping Co',
    rating: 5,
    text: 'The document intelligence module processes thousands of shipping documents daily with remarkable precision. A game-changer for operations.',
    avatar: 'MR',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'David Kim',
    role: 'Head of Logistics',
    company: 'AsiaPacific Freight',
    rating: 5,
    text: 'Compliance monitoring across 170+ countries used to be our biggest challenge. OrbisPorté made it effortless.',
    avatar: 'DK',
    gradient: 'from-purple-500 to-purple-600',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Loved by <span className="text-gradient">Trade Leaders</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            See what our customers have to say about OrbisPorté
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-surface hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                  <div className="text-xs text-primary font-medium">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
