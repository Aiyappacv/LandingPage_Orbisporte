import { motion } from 'framer-motion';
import { Plane, Ship, Truck } from 'lucide-react';

const modes = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Expedited air cargo processing with real-time flight tracking, automated airway bill generation, and instant customs pre-clearance.',
    features: ['Express Processing', 'Real-time Tracking', 'Pre-clearance'],
    gradient: 'from-blue-500 to-indigo-600',
    illustration: (
      <svg viewBox="0 0 200 120" className="w-full h-auto opacity-20">
        <path d="M30 80 L100 40 L170 80" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M80 50 L100 40 L120 50" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M90 45 L110 45" stroke="currentColor" strokeWidth="4" />
        <circle cx="100" cy="42" r="3" fill="currentColor" />
        <line x1="60" y1="90" x2="140" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Complete container shipping management with automated Bill of Lading, container tracking, and port authority integration.',
    features: ['Container Management', 'Port Integration', 'B/L Automation'],
    gradient: 'from-cyan-500 to-teal-600',
    illustration: (
      <svg viewBox="0 0 200 120" className="w-full h-auto opacity-20">
        <rect x="50" y="60" width="100" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="60" y="45" width="20" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="85" y="50" width="20" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="40" y1="95" x2="160" y2="95" stroke="currentColor" strokeWidth="2" />
        <path d="M30 95 Q100 110 170 95" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    icon: Truck,
    title: 'Land Freight',
    description: 'Cross-border trucking solutions with E-way bill automation, GPS tracking, and multi-modal connectivity.',
    features: ['E-way Bill Auto', 'GPS Tracking', 'Cross-border'],
    gradient: 'from-amber-500 to-orange-600',
    illustration: (
      <svg viewBox="0 0 200 120" className="w-full h-auto opacity-20">
        <rect x="30" y="55" width="80" height="35" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="110" y="65" width="40" height="25" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="55" cy="95" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="135" cy="95" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="25" y1="95" x2="175" y2="95" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function TransportModes() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Multi-Modal Transport
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Seamless <span className="text-gradient">Transport Modes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Unified platform supporting all modes of international freight
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-2xl border border-gray-100 hover:border-primary/20 transition-all overflow-hidden"
            >
              {/* Background Illustration */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${mode.gradient} opacity-5 rounded-bl-full transition-all group-hover:opacity-10`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <mode.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-charcoal mb-3">{mode.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{mode.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {mode.features.map((f) => (
                  <span key={f} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                    {f}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">→</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
