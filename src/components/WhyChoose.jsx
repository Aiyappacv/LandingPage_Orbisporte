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
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why OrbisPorté
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Why Choose <span className="text-gradient">OrbisPorté</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
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
              className="group p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all relative overflow-hidden"
            >
              {/* Background Stat */}
              <div className="absolute top-4 right-4 text-5xl font-black text-gray-50 group-hover:text-primary/10 transition-colors">
                {benefit.stat}
              </div>

              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform relative z-10">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors relative z-10">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 relative z-10">
                {benefit.description}
              </p>

              <div className="flex items-center gap-2 relative z-10">
                <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                <span className="text-xs text-gray-400 font-medium">{benefit.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
