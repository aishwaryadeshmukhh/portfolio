import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, X, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    src: '/photos/IMG_7637 (1).JPG',
    alt: 'Profile photo',
    note: 'leading djs s4ds (i might look like im smiling but i was running on 2 hours of sleep)',
  },
  {
    src: '/photos/WhatsApp Image 2026-05-12 at 17.02.20.jpeg',
    alt: 'Campus photo',
    note: 'occasionally escape to the mountains to avoid hearing terms like code reviews and prod failures',
  },
  {
    src: '/photos/WhatsApp Image 2026-05-12 at 17.02.20 (1).jpeg',
    alt: 'Hackathon photo',
    note: 'mandatory college picture where i was unaware of the life of coding',
  },
  {
    src: '/photos/WhatsApp Image 2026-05-12 at 17.02.20 (2).jpeg',
    alt: 'Event photo',
    note: 'my real secret desire is to move to the mountains and adopt rabbits',
  },
];

const STAT = { value: '9.00', label: 'GPA' };

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showResume, setShowResume] = useState(false);

  const prev = () => {
    setDirection(-1);
    setCurrent(c => (c - 1 + photos.length) % photos.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent(c => (c + 1) % photos.length);
  };

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  const variants = {
    enter: (d: number) => ({ x: d * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -60, opacity: 0 }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_1.1fr] gap-10 lg:gap-24 items-center py-10">

        {/* ── Photo Carousel ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 bg-gray-100 aspect-[4/5] group/carousel">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={photos[current].src}
                  alt={photos[current].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors z-10 opacity-0 group-hover/carousel:opacity-100"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors z-10 opacity-0 group-hover/carousel:opacity-100"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Info ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight"
            >
              Aishwarya Deshmukh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-2xl md:text-3xl"
              style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #7c3aed 60%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
              }}
            >
              Computer Science & Data Science Undergraduate
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-800 text-base md:text-lg leading-relaxed max-w-md"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Architecting high-performance agentic AI systems, RAG pipelines, and NL-to-SQL engines.
              I enjoy building scalable systems and in my free time you'll find me on the badminton court!
            </motion.p>

            {/* Dynamic personal note matched to UI */}
            <div className="min-h-[3rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-500 text-base md:text-lg italic leading-relaxed max-w-md"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {photos[current].note}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-2"
          >
            <p
              className="text-5xl text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {STAT.value}
            </p>
            <p
              className="text-sm text-gray-400 mt-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {STAT.label}
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-full border border-gray-300 bg-white/80 text-gray-800 hover:border-gray-400 hover:shadow-md transition-all duration-200 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              View Projects
            </a>
            <button
              onClick={() => setShowResume(true)}
              className="px-6 py-2.5 rounded-full border border-gray-300 bg-white/80 text-gray-800 hover:border-gray-400 hover:shadow-md transition-all duration-200 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex gap-3 pt-1"
          >
            {[
              { icon: Github, href: 'https://github.com/aishwaryadeshmukhh', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/aishwarya-deshmukh2005/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:aishwaryadeshmukh2005@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Resume Modal ── */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Curriculum Vitae
                  </h3>
                  <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Aishwarya Deshmukh</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/Aishwarya_Deshmukh.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 bg-gray-50 relative">
                <iframe
                  src="/Aishwarya_Deshmukh.pdf"
                  className="w-full h-full border-none"
                  title="Aishwarya Deshmukh Resume"
                />

                {/* Fallback info for some browsers */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                  <p className="text-gray-400 text-sm">Loading Resume...</p>
                </div>
              </div>

              {/* Footer / External link */}
              <div className="px-6 py-3 border-t border-gray-100 flex justify-end">
                <a
                  href="/Aishwarya_Deshmukh.pdf"
                  target="_blank"
                  className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1.5 transition-colors"
                >
                  Open in new tab <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
