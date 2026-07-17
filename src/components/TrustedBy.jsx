import { motion } from 'framer-motion';
import {
  Globe,
  Truck,
  ShieldCheck,
  Link,
  Factory,
  ShoppingBag,
} from 'lucide-react';

const partners = [
  { name: 'Global Trade Corp', icon: Globe },
  { name: 'LogiTrans World', icon: Truck },
  { name: 'Customs Alliance', icon: ShieldCheck },
  { name: 'SupplyLink Pro', icon: Link },
  { name: 'Mega Manufacturing', icon: Factory },
  { name: 'RetailChain Global', icon: ShoppingBag },
];

export default function TrustedBy() {
  return (
    <section className="relative py-36 border-y border-gray-100 overflow-hidden">
      {/* Background Image - full section cover */}
      <img
        src="/1stnew.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-fill object-[center_top_20px]"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content - right-aligned */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-lg ml-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-white uppercase tracking-widest mb-10"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            Trusted by Industry Leaders Worldwide
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <partner.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold text-white text-center" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
