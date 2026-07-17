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
      {/* Matrix data rain columns */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{
            left: `${5 * i}%`,
            height: '100%',
          }}
          animate={{ top: ['-100%', '100%'] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated background glows */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Electric energy bursts */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 45, 90, 135].map((deg) => (
          <motion.div
            key={deg}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ transform: `rotate(${deg}deg)` }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: deg / 180 }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/50 rounded-full"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.9, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Waveform bars at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-center gap-1 opacity-20">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary rounded-full"
            animate={{ height: [10, 30 + Math.random() * 30, 10] }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

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
              {/* Central Brain with glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center relative"
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(239,68,68,0.4), 0 0 80px rgba(239,68,68,0.2)',
                      '0 0 60px rgba(239,68,68,0.6), 0 0 120px rgba(239,68,68,0.3)',
                      '0 0 40px rgba(239,68,68,0.4), 0 0 80px rgba(239,68,68,0.2)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-16 h-16 text-white" />
                  {/* Holographic shimmer ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent, transparent)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      padding: '2px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>

              {/* DNA Helix strands */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                {[0, 180].map((rot) => (
                  <motion.div
                    key={rot}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: '280px',
                      height: '280px',
                      border: '1px solid rgba(239,68,68,0.15)',
                      borderRadius: '50%',
                      transform: `rotateX(70deg) rotateZ(${rot}deg)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Orbiting Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: `${ring * 35 + 80}px`,
                    height: `${ring * 35 + 80}px`,
                    border: '2px solid rgba(239,68,68,0.15)',
                    background: `radial-gradient(circle, transparent 60%, rgba(239,68,68,0.03) 100%)`,
                  }}
                  animate={{ rotate: ring % 2 === 0 ? -360 : 360 }}
                  transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Dots on ring */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40" />
                </motion.div>
              ))}

              {/* SVG Neural connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {capabilities.map((_, i) => {
                  const angle = (i / capabilities.length) * Math.PI * 2;
                  const r = 160;
                  const x1 = 200 + Math.cos(angle) * (r / 3.2 * 3.2);
                  const y1 = 200 + Math.sin(angle) * (r / 3.2 * 3.2);
                  return (
                    <motion.line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x1}
                      y2={y1}
                      stroke="rgba(239,68,68,0.15)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [0, -20] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  );
                })}
              </svg>

              {/* Orbital Nodes with glow */}
              {capabilities.map((cap, i) => {
                const angle = (i / capabilities.length) * Math.PI * 2;
                const radius = 160;
                const xPos = 50 + (Math.cos(angle) * radius / 3.2);
                const yPos = 50 + (Math.sin(angle) * radius / 3.2);

                return (
                  <motion.div
                    key={cap.title}
                    className="absolute w-14 h-14 rounded-xl gradient-glass flex items-center justify-center cursor-pointer"
                    style={{
                      left: `${xPos}%`,
                      top: `${yPos}%`,
                      translate: '-50% -50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.3, boxShadow: '0 0 40px rgba(239,68,68,0.6)' }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      <cap.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Scanning rings */}
              {[1, 2].map((ring) => (
                <motion.div
                  key={`scan-${ring}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25"
                  style={{ width: `${300 + ring * 30}px`, height: `${300 + ring * 30}px` }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: ring * 0.8 }}
                />
              ))}
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
                  whileHover={{ x: 12, backgroundColor: 'rgba(255,255,255,0.06)' }}
                  className="group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all relative overflow-hidden"
                >
                  {/* Hover light sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 relative z-10"
                    whileHover={{ scale: 1.2, boxShadow: '0 0 30px rgba(239,68,68,0.5)' }}
                  >
                    <cap.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="relative z-10">
                    <h4 className="text-white font-semibold mb-0.5 group-hover:text-primary transition-colors">{cap.title}</h4>
                    <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">{cap.desc}</p>
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
