import { motion } from 'framer-motion';
import {
  Factory,
  Pill,
  Car,
  ShoppingBag,
  Shield,
  Wheat,
  FlaskConical,
  Zap,
} from 'lucide-react';

const industries = [
  { icon: Factory, name: 'Manufacturing', desc: 'Streamline raw material imports and finished goods exports with automated classification.' },
  { icon: Pill, name: 'Pharmaceutical', desc: 'Ensure regulatory compliance for controlled substances and temperature-sensitive shipments.' },
  { icon: Car, name: 'Automotive', desc: 'Manage complex multi-component supply chains with precision HS code classification.' },
  { icon: ShoppingBag, name: 'Retail', desc: 'Accelerate seasonal import cycles with high-volume document processing automation.' },
  { icon: Shield, name: 'Defense', desc: 'Maintain strict compliance for restricted items with enhanced security protocols.' },
  { icon: Wheat, name: 'Agriculture', desc: 'Handle perishable goods documentation with expedited customs clearance workflows.' },
  { icon: FlaskConical, name: 'Chemicals', desc: 'Navigate complex chemical classifications and hazardous material regulations.' },
  { icon: Zap, name: 'Energy', desc: 'Manage specialized equipment imports and energy sector compliance requirements.' },
];

const gradients = [
  'from-primary to-primary-light',
  'from-emerald-500 to-emerald-600',
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-amber-500 to-amber-600',
  'from-teal-500 to-teal-600',
  'from-rose-500 to-rose-600',
  'from-indigo-500 to-indigo-600',
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Solutions for <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tailored trade automation solutions for industry-specific challenges
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <ind.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                {ind.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
