import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-24 gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary text-sm font-semibold mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform{' '}
            <span className="text-gradient">Global Trade?</span>
          </h2>

          <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Join 500+ enterprises already using OrbisPorté to automate their trade operations, reduce costs, and ensure compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow text-lg"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-lg"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Sales
            </motion.button>
          </div>

          <p className="text-white/30 text-sm mt-8">
            No credit card required · Free consultation · 24/7 support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
