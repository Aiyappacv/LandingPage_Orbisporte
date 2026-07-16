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
    <section className="relative py-16 bg-white border-y border-gray-100 overflow-hidden">
      {/* Background Image - no crop, full clarity, right-aligned */}
      <div className="absolute inset-0 flex items-center justify-end">
        <img
          src="/1stpage.png"
          alt=""
          aria-hidden="true"
          className="h-full max-h-[667px] w-auto object-contain"
        />
      </div>

      {/* Content overlay - constrained to left 60% to avoid image */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl -ml-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-10"
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
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <partner.icon className="w-7 h-7 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-gray-500 text-center">
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
