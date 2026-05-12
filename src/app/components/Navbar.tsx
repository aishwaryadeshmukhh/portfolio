import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_LINKS = ['Home', 'Projects', 'Skills', 'Experience', 'Contact'];

export function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section: string) => {
    setActive(section);
    setMobileOpen(false);
    if (section === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(section.toLowerCase().replace(' ', '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Blue top line */}
      <div className="h-0.5 w-full bg-blue-500 absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-[15px] font-bold transition-colors duration-200 tracking-tight ${
                active === link
                  ? 'text-foreground'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border bg-card/50 hover:bg-card transition-all shadow-sm group"
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? (
              <Moon className="w-4 h-4 text-foreground group-hover:rotate-12 transition-transform" />
            ) : (
              <Sun className="w-4 h-4 text-foreground group-hover:rotate-45 transition-transform" />
            ))}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-8 flex flex-col gap-8"
        >
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-left text-lg font-bold transition-colors ${
                active === link ? 'text-foreground' : 'text-muted-foreground'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
