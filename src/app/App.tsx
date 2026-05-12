import { motion } from 'motion/react';
import { ThemeProvider } from 'next-themes';
import { LiquidEther } from './components/LiquidEther';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen relative bg-background text-foreground transition-colors duration-500">
        <div className="fixed inset-0 pointer-events-none z-0">
          <LiquidEther
            colors={['#EC4899', '#7C3AED', '#6366F1', '#5227FF', '#FF9FFC', '#B497CF']}
            mouseForce={20}
            cursorSize={65}
            isViscous
            viscous={20}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <div className="relative z-10">
          <Navbar />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Experience />
          </motion.div>

          <hr className="border-t border-border mt-20" />
          <div className="p-10 text-right text-muted-foreground font-mono">
            © 2025 Aishwarya Deshmukh
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
