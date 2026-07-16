import { motion } from 'framer-motion';
import {
  Globe,
  ExternalLink,
  MessageCircle,
  Play,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Partners', 'Blog'],
  Platform: ['Document Intelligence', 'AI Classification', 'Compliance Engine', 'Trade Analytics', 'API Docs'],
  Resources: ['Documentation', 'Case Studies', 'Whitepapers', 'Webinars', 'Support'],
  Contact: ['Sales Inquiries', 'Technical Support', 'Partnerships', 'Media'],
};

export default function Footer() {
  return (
    <footer className="gradient-dark pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Orbis<span className="text-primary">Porté</span>
              </span>
            </motion.div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered global trade automation and customs intelligence platform serving enterprises worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@orbisporte.com" className="flex items-center gap-2 text-white/40 hover:text-primary text-sm transition-colors">
                <Mail className="w-4 h-4" />
                info@orbisporte.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/40 hover:text-primary text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin className="w-4 h-4" />
                New York, NY | London, UK | Singapore
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[ExternalLink, MessageCircle, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5 text-white/50 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} OrbisPorté. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
