import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Ship,
  Plane,
  Truck,
  Container,
  Globe,
  Network,
  Boxes,
  Anchor,
} from 'lucide-react';

const floatingItems = [
  { icon: Ship, x: '75%', y: '55%', delay: 0, size: 'w-14 h-14' },
  { icon: Plane, x: '85%', y: '30%', delay: 0.5, size: 'w-12 h-12' },
  { icon: Truck, x: '65%', y: '75%', delay: 1, size: 'w-11 h-11' },
  { icon: Container, x: '90%', y: '60%', delay: 1.5, size: 'w-10 h-10' },
  { icon: Boxes, x: '80%', y: '45%', delay: 0.8, size: 'w-9 h-9' },
  { icon: Anchor, x: '70%', y: '35%', delay: 1.2, size: 'w-8 h-8' },
];

const networkDots = [
  { x: '75%', y: '45%', delay: 0.2 },
  { x: '82%', y: '32%', delay: 0.6 },
  { x: '68%', y: '68%', delay: 0.4 },
  { x: '88%', y: '52%', delay: 0.8 },
  { x: '72%', y: '40%', delay: 1.0 },
  { x: '92%', y: '38%', delay: 0.3 },
];

const networkPaths = [
  'M 75% 45% Q 82% 32% 88% 52%',
  'M 68% 68% Q 75% 45% 82% 32%',
  'M 88% 52% Q 92% 38% 85% 30%',
  'M 72% 40% Q 68% 68% 65% 75%',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen gradient-dark overflow-hidden flex items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Next-Gen Trade Intelligence Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                AI-Powered{' '}
                <span className="text-gradient">Global Trade</span>
                <br />
                Automation
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Accelerate customs clearance, automate document intelligence,
              classify products with AI, detect trade risks, and streamline
              international logistics from one intelligent platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                <Play className="w-5 h-5" />
                Explore Platform
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { value: '100M+', label: 'Documents' },
                { value: '170+', label: 'Countries' },
                { value: '99.8%', label: 'Accuracy' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full h-[500px]"
            >
              {/* World Map Outline (SVG) */}
              <svg
                viewBox="0 0 400 200"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto opacity-10"
              >
                <ellipse cx="200" cy="100" rx="180" ry="80" fill="none" stroke="rgba(199,91,18,0.3)" strokeWidth="0.5" />
                <ellipse cx="200" cy="100" rx="120" ry="60" fill="none" stroke="rgba(199,91,18,0.2)" strokeWidth="0.5" />
                <ellipse cx="200" cy="100" rx="60" ry="40" fill="none" stroke="rgba(199,91,18,0.15)" strokeWidth="0.5" />
                <line x1="20" y1="100" x2="380" y2="100" stroke="rgba(199,91,18,0.1)" strokeWidth="0.5" />
                <line x1="200" y1="20" x2="200" y2="180" stroke="rgba(199,91,18,0.1)" strokeWidth="0.5" />
              </svg>

              {/* Network Dots */}
              {networkDots.map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-primary/60"
                  style={{ left: dot.x, top: dot.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: dot.delay,
                  }}
                />
              ))}

              {/* Central Globe */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-primary/30 flex items-center justify-center animate-pulse-glow">
                <div className="w-36 h-36 rounded-full border border-gold/20 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Floating Items */}
              {floatingItems.map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.size} rounded-2xl gradient-glass flex items-center justify-center`}
                  style={{ left: item.x, top: item.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -15, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: item.delay },
                    scale: { duration: 0.5, delay: item.delay },
                    y: { duration: 4, repeat: Infinity, delay: item.delay },
                  }}
                >
                  <item.icon className="w-6 h-6 text-primary/80" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
