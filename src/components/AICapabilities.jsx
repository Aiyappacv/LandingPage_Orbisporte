import { motion } from 'framer-motion';
import {
  Brain,
  Eye,
  ScanLine,
  TrendingUp,
  Network,
  Sparkles,
} from 'lucide-react';

const capabilities = [
  { icon: Brain, title: 'Natural Language Processing', desc: 'Understand and process trade documents in multiple languages' },
  { icon: Eye, title: 'Computer Vision', desc: 'Analyze visual elements in shipping documents and labels' },
  { icon: ScanLine, title: 'OCR', desc: 'Industry-leading optical character recognition accuracy' },
  { icon: Sparkles, title: 'Machine Learning', desc: 'Continuously improving classification and extraction models' },
  { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Forecast trade patterns, duty changes, and compliance risks' },
  { icon: Network, title: 'Knowledge Graph', desc: 'Interconnected trade regulations and product classification data' },
];

export default function AICapabilities() {
  return (
    <section id="ai" className="py-24 gradient-dark relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - AI Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central Brain */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full gradient-primary flex items-center justify-center shadow-2xl shadow-primary/40 animate-pulse-glow">
                <Brain className="w-16 h-16 text-white" />
              </div>

              {/* Orbiting Rings */}
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 animate-spin"
                  style={{
                    width: `${ring * 35 + 80}px`,
                    height: `${ring * 35 + 80}px`,
                    animationDuration: `${20 + ring * 5}s`,
                  }}
                />
              ))}

              {/* Orbital Nodes */}
              {capabilities.map((cap, i) => {
                const angle = (i / capabilities.length) * Math.PI * 2;
                const radius = 160;
                const xPos = 50 + (Math.cos(angle) * radius / 3.2);
                const yPos = 50 + (Math.sin(angle) * radius / 3.2);

                return (
                  <motion.div
                    key={cap.title}
                    className="absolute w-14 h-14 rounded-xl gradient-glass flex items-center justify-center"
                    style={{
                      left: `${xPos}%`,
                      top: `${yPos}%`,
                      translate: '-50% -50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <cap.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Feature List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary text-sm font-semibold mb-4">
                Technology
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-white/50 text-lg mb-10">
                Our AI engine combines multiple technologies to deliver unparalleled accuracy in trade automation.
              </p>
            </motion.div>

            <div className="space-y-5">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                    <cap.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-0.5">{cap.title}</h4>
                    <p className="text-white/40 text-sm">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
