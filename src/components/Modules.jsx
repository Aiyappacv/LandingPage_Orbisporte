import { motion } from 'framer-motion';
import {
  FileSearch,
  Cpu,
  Shield,
  BarChart3,
  AlertOctagon,
  Settings,
  Map,
  Lock,
} from 'lucide-react';

const modules = [
  {
    icon: FileSearch,
    title: 'Document Intelligence',
    description: 'AI-powered document parsing, classification, and data extraction across all trade document types.',
  },
  {
    icon: Cpu,
    title: 'AI Classification',
    description: 'Machine learning models for HSN, ECCN, and tariff classification with continuous improvement.',
  },
  {
    icon: Shield,
    title: 'Compliance Engine',
    description: 'Real-time compliance checking against global trade regulations and sanctions lists.',
  },
  {
    icon: BarChart3,
    title: 'Trade Analytics',
    description: 'Comprehensive dashboards and insights for trade operations optimization.',
  },
  {
    icon: AlertOctagon,
    title: 'Risk Detection',
    description: 'AI-driven risk scoring and anomaly detection for trade transactions.',
  },
  {
    icon: Settings,
    title: 'Customs Automation',
    description: 'Automated customs declaration generation and submission across jurisdictions.',
  },
  {
    icon: Map,
    title: 'Supply Chain Visibility',
    description: 'End-to-end visibility of shipments, inventory, and trade flows.',
  },
  {
    icon: Lock,
    title: 'Security Center',
    description: 'Enterprise-grade security with encryption, access controls, and audit logging.',
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <img
        src="/Complete Trade Intelligence Suite.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain opacity-30"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Platform Modules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Complete Trade <span className="text-gradient">Intelligence Suite</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Modular architecture that scales with your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl border border-gray-100/50 bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-charcoal/5 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors">
                <mod.icon className="w-7 h-7 text-charcoal/60 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                {mod.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {mod.description}
              </p>
              <span className="text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
