import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FileText,
  CheckCircle,
  Globe,
  Clock,
  Building2,
} from 'lucide-react';

const stats = [
  { icon: FileText, value: 100, suffix: 'M+', label: 'Documents Processed', color: 'from-primary to-primary-light' },
  { icon: CheckCircle, value: 99.8, suffix: '%', label: 'Extraction Accuracy', decimals: 1, color: 'from-emerald-500 to-emerald-600' },
  { icon: Globe, value: 170, suffix: '+', label: 'Countries Supported', color: 'from-blue-500 to-indigo-600' },
  { icon: Clock, value: 95, suffix: '%', label: 'Processing Time Reduced', color: 'from-purple-500 to-purple-600' },
  { icon: Building2, value: 500, suffix: '+', label: 'Enterprise Customers', color: 'from-amber-500 to-amber-600' },
];

function useCountUp(end, decimals = 0, duration = 2.5, enabled = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let startTime = null;
    let raf;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [enabled, end, duration]);

  return decimals > 0 ? count.toFixed(decimals) : Math.round(count);
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const display = useCountUp(stat.value, stat.decimals || 0, 2.5, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="text-center p-8 rounded-2xl gradient-glass-dark group hover:bg-white/10 transition-all"
    >
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
        <stat.icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {isInView ? `${display}${stat.suffix}` : `0${stat.suffix}`}
      </div>
      <p className="text-white/60 text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(199,91,18,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary text-sm font-semibold mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-gradient">Global Enterprises</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Powering trade automation for organizations across the world
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
