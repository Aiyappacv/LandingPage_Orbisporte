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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Shield */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-40 h-48"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Shield className="w-full h-full text-primary/20" />
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
                    className="absolute w-12 h-12 rounded-xl bg-white shadow-lg border border-gray-100 flex items-center justify-center"
                    style={{
                      left: `${xPos}%`,
                      top: `${yPos}%`,
                      translate: '-50% -50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <feat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                );
              })}

              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
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
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-surface transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm">{feat.title}</h4>
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
