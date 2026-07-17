import { motion } from 'framer-motion';
import {
  Minimize2,
  ShieldCheck,
  Zap,
  DollarSign,
  Eye,
  Brain,
} from 'lucide-react';

const benefits = [
  {
    icon: Minimize2,
    title: 'Reduce Manual Work',
    description: 'Automate repetitive document processing tasks and eliminate manual data entry errors.',
    stat: '80%',
    statLabel: 'Less Manual Work',
  },
  {
    icon: ShieldCheck,
    title: 'Increase Compliance',
    description: 'Stay ahead of regulatory changes with real-time compliance monitoring and alerts.',
    stat: '99.5%',
    statLabel: 'Compliance Rate',
  },
  {
    icon: Zap,
    title: 'Faster Customs Clearance',
    description: 'Process customs documentation in minutes instead of hours with AI-powered automation.',
    stat: '10x',
    statLabel: 'Faster Processing',
  },
  {
    icon: DollarSign,
    title: 'Lower Operational Cost',
    description: 'Reduce operational costs by eliminating manual processes and reducing error-related expenses.',
    stat: '60%',
    statLabel: 'Cost Reduction',
  },
  {
    icon: Eye,
    title: 'Global Trade Visibility',
    description: 'Real-time visibility into all trade operations, shipments, and compliance status.',
    stat: '360°',
    statLabel: 'Full Visibility',
  },
  {
    icon: Brain,
    title: 'AI Decision Support',
    description: 'Leverage AI recommendations for classification, compliance, and trade optimization.',
    stat: 'AI',
    statLabel: 'Powered Decisions',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <img
        src="/newseamless.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-primary text-sm font-semibold mb-2">
            Why OrbisPorté
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Why Choose <span className="text-gradient">OrbisPorté</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg font-semibold" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            Measurable impact on your trade operations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-5 rounded-2xl bg-white/40 backdrop-blur-md shadow-sm border border-white/10 transition-all relative overflow-hidden"
            >
              {/* Background Stat */}
              <div className="absolute top-3 right-3 text-3xl font-black text-gray-50">
                {benefit.stat}
              </div>

              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform relative z-10">
                <benefit.icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-lg font-bold text-charcoal mb-2 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed mb-3 relative z-10">
                {benefit.description}
              </p>

              <div className="flex items-center gap-2 relative z-10">
                <span className="text-xl font-bold text-primary">{benefit.stat}</span>
                <span className="text-xs text-gray-600 font-medium">{benefit.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
