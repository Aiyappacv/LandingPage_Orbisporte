import { motion } from 'framer-motion';
import {
  FileText,
  ScanLine,
  Tag,
  ShieldCheck,
  Calculator,
  FileCheck,
  AlertTriangle,
  Brain,
  Scale,
  CheckCircle,
  Workflow,
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'AI Document Processing',
    description: 'Intelligent extraction and classification of trade documents with AI-powered OCR.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: ScanLine,
    title: 'OCR + Intelligent Extraction',
    description: 'Advanced optical character recognition with contextual understanding.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Tag,
    title: 'HSN Classification',
    description: 'AI-driven HSN code classification with 99.8% accuracy across all product categories.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: ShieldCheck,
    title: 'ECCN Classification',
    description: 'Automated Export Control Classification for regulatory compliance.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Calculator,
    title: 'Duty Calculation Engine',
    description: 'Real-time duty and tariff calculation across 170+ countries.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: FileCheck,
    title: 'Bill of Entry Automation',
    description: 'End-to-end Bill of Entry generation and submission automation.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: Scale,
    title: 'Trade Compliance',
    description: 'Comprehensive compliance checks against global trade regulations.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Detection',
    description: 'AI-powered risk assessment and anomaly detection in trade transactions.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Brain,
    title: 'AI Decision Engine',
    description: 'Machine learning models that improve classification accuracy over time.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Scale,
    title: 'Regulatory Intelligence',
    description: 'Real-time updates on global trade regulations and policy changes.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: CheckCircle,
    title: 'Document Validation',
    description: 'Automated document verification and completeness checks.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Customizable workflows for trade document processing pipelines.',
    color: 'from-orange-500 to-orange-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Intelligent Trade <span className="text-gradient">Automation Suite</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive AI-powered tools to automate every aspect of global trade operations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
