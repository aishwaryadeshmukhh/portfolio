import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="px-6 md:px-10 py-16 border-t border-gray-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left */}
          <div>
            <p
              className="text-gray-900 text-lg mb-1"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Aishwarya Deshmukh
            </p>
            <p className="text-gray-400 text-sm">Computer Science &amp; Data Science Undergraduate</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/aishwaryadeshmukh', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/aishwarya-deshmukh-35a408293', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:aishwaryadeshmukh2005@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right */}
          <p className="text-gray-400 text-sm">© 2026 All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}
