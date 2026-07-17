import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Key,
  Users,
  FileCheck,
  Code,
  Eye,
  ShieldCheck,
} from 'lucide-react';

const securityFeatures = [
  { icon: ShieldCheck, title: 'ISO 27001 Compliance', desc: 'Certified information security management' },
  { icon: Lock, title: 'AES-256 Encryption', desc: 'Military-grade encryption at rest and in transit' },
  { icon: Key, title: 'Zero Trust Architecture', desc: 'Never trust, always verify security model' },
  { icon: Users, title: 'Role-Based Access', desc: 'Granular permissions and access controls' },
  { icon: FileCheck, title: 'Audit Logs', desc: 'Complete audit trail for all system actions' },
  { icon: Code, title: 'Secure APIs', desc: 'OAuth 2.0 / JWT authenticated API endpoints' },
  { icon: Eye, title: 'Threat Detection', desc: 'Real-time cyber threat monitoring and alerts' },
];

export default function Security() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Large animated background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Shield with glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-40 h-48 relative"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Shield glow backdrop */}
                  <div className="absolute inset-0 blur-2xl opacity-40">
                    <Shield className="w-full h-full text-primary" />
                  </div>
                  <Shield className="w-full h-full text-primary/30 relative z-10" />

                  {/* Pulse rings - more visible */}
                  {[0, 0.7, 1.4].map((delay, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute inset-0 border-2 border-red-400/40 rounded-full"
                      animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeOut' }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Orbiting Security Icons */}
              {securityFeatures.map((feat, i) => {
                const angle = (i / securityFeatures.length) * Math.PI * 2;
                const radius = 180;
                const xPos = 50 + (Math.cos(angle) * radius / 3.6);
                const yPos = 50 + (Math.sin(angle) * radius / 3.6);

                return (
                  <motion.div
                    key={feat.title}
                    className="absolute w-14 h-14 rounded-xl bg-white shadow-xl border-2 border-primary/20 flex items-center justify-center cursor-pointer"
                    style={{
                      left: `${xPos}%`,
                      top: `${yPos}%`,
                      translate: '-50% -50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.3, boxShadow: '0 0 30px rgba(239,68,68,0.3)' }}
                  >
                    <feat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                );
              })}

              {/* Central glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Scanning line effect */}
              <motion.div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-full"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Second scanning line offset */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-400/30 to-transparent"
                animate={{ top: ['100%', '0%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Enterprise Security
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Bank-Grade <span className="text-gradient">Security</span>
              </h2>
              <p className="text-gray-500 text-lg mb-10">
                Your trade data is protected by enterprise-grade security measures compliant with international standards.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(239,68,68,0.12)' }}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <feat.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm group-hover:text-primary transition-colors duration-300">{feat.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{feat.desc}</p>
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
