import { motion } from 'framer-motion';
import {
  Upload,
  ScanLine,
  CheckCircle,
  Tag,
  Calculator,
  ShieldCheck,
  FileText,
  Send,
} from 'lucide-react';

const steps = [
  { icon: Upload, label: 'Document Upload', desc: 'Upload trade documents via API or portal' },
  { icon: ScanLine, label: 'OCR Extraction', desc: 'AI extracts text and key fields' },
  { icon: CheckCircle, label: 'AI Validation', desc: 'Validate extracted data accuracy' },
  { icon: Tag, label: 'HSN Classification', desc: 'Auto-classify products with AI' },
  { icon: Calculator, label: 'Duty Calculation', desc: 'Calculate duties and tariffs' },
  { icon: ShieldCheck, label: 'Compliance Check', desc: 'Verify regulatory compliance' },
  { icon: FileText, label: 'Bill of Entry', desc: 'Generate Bill of Entry docs' },
  { icon: Send, label: 'Submission', desc: 'Submit to customs authorities' },
];

export default function Workflow() {
  return (
    <section className="relative py-48 overflow-hidden">
      {/* Background Image */}
      <img
        src="/AI Workflow Timeline.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover brightness-125 saturate-110"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">AI Workflow </span>
            <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            End-to-end automation from document upload to customs submission
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-8 gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 relative z-10 mb-4"
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>
                <span className="text-sm font-bold text-white mb-1">{step.label}</span>
                <span className="text-xs text-white leading-snug">{step.desc}</span>

                {/* Step Number */}
                <div className="absolute -top-3 -right-1 w-6 h-6 rounded-full bg-white text-charcoal text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-6 relative"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0 z-10">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="pt-2">
                  <div className="text-sm font-bold text-white">{step.label}</div>
                  <div className="text-xs text-white mt-0.5">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
