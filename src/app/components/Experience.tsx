'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ── Data ──────────────────────────────────────────────────────────────────────

const internships = [
  {
    title: 'AI Intern',
    org: 'Accenture',
    period: '02/2026 – 04/2026 | Vikhroli, Mumbai',
    description:
      '• Fine-tuned Large Language Models using LoRA/QLoRA for domain-specific applications, leveraging parameter-efficient training to improve performance and reduce compute overhead\n• Designed and implemented dynamic RAG pipelines with real-time indexing, improving contextual retrieval and response relevance\n• Engineered secure vector-based retrieval systems with role-based and vector-level access control for enterprise data isolation\n• Developed chunking, embedding, and indexing workflows, improving retrieval accuracy and reducing hallucinations in LLM outputs',
    highlight:
      'Engineered secure vector-based retrieval systems and developed chunking, embedding, and indexing workflows, improving retrieval accuracy.',
  },
  {
    title: 'AI Intern',
    org: 'Terrabyte Group',
    period: '02/05/2025 – 6/05/2025',
    description:
      '• Collaborated with security and engineering teams to design intelligent threat detection systems and define automation scope\n• Built end-to-end ETL pipelines using Python and AWS S3 to transform raw security logs into structured datasets for ML model training, reducing preprocessing effort by 30%\n• Developed and deployed PyTorch-based anomaly detection system with production monitoring, error handling, and real-time inference\n• Designed agentic analytics dashboard with natural language interaction capabilities — users could query security data conversationally, reducing manual analysis effort by 40%\n• Implemented proper logging, error handling, and monitoring for production-grade reliability',
    highlight:
      'Achieved 40% reduction in manual analysis effort through the deployment of an agentic natural language dashboard.',
  },
];

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    org: 'Coursera',
    period: 'Ongoing',
    description:
      'Pursuing cloud practitioner training focused on AWS core services, billing, architecture principles, and security fundamentals.',
    highlight:
      'Expanding practical cloud knowledge to strengthen deployment, infrastructure, and solution design skills.',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    org: 'AWS Academy',
    period: 'Feb 2025 – Apr 2025',
    description:
      'Completed structured training covering cloud architecture, compute, networking, IAM, and security.',
    highlight:
      'Built strong foundations in cloud-native development and deployment workflows.',
  },
  {
    title: 'Best Student Chapter 2026',
    org: 'Society for Data Science (S4DS)',
    period: '03/03/2026',
    description:
      'Awarded Best Student Chapter nationally for outstanding work under my leadership in the domain of Data Science.',
    highlight:
      'Recognized for exceptional leadership and community building in the data science field.',
  },
];

const hackathons = [
  {
    title: 'Winner at IIT BHU Datathon',
    project: 'IIT BHU - Varanasi',
    description:
      'Won the national-level datathon with 650+ participants nationwide, focusing on impact metrics and data analysis.',
    prize: 'National Winner',
  },
  {
    title: 'TIAA HACK Finalist - Top 6',
    project: 'TIAA BRG Hackathon 2026',
    description:
      'Emerged as a national finalist in the TIAA BRG Hackathon 2026, placing in the top 6 out of 500+ teams.',
    prize: 'National Finalist',
  },
  {
    title: 'International Rover Challenge (IRC)',
    project: 'DJS Antariksh - Coding Team',
    description:
      'Achieved 2nd runner-up internationally at IRC, contributing to rover design and developing OpenCV-based navigation using fine-tuned YOLOv8 models.',
    prize: '2nd Runner-up (Global)',
  },
];

const leadership = [
  {
    title: 'Vice-Chairperson — DJS S4DS',
    period: '07/2025 – Present',
    description:
      'Led operations, outreach, and execution for a 200+ member data science community. Organized a national-level hackathon, managing technical and stakeholder coordination.',
    impact: 'Led 200+ member community & National Hackathon',
  },
  {
    title: 'Coding Team Member — DJS Antariksh',
    period: '04/2024 – 04/2025',
    description:
      'Developed navigation systems for Mars rover prototypes and implemented computer vision algorithms for autonomous traversal.',
    impact: 'IRC 2nd Runner-up Internationally',
  },
];

// ── Types ─────────────────────────────────────────────────────────────────────

type TabId = 'internships' | 'certifications' | 'hackathons' | 'leadership';

const TABS: { id: TabId; label: string }[] = [
  { id: 'internships', label: 'Internships' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'hackathons', label: 'Hackathons & Competitions' },
  { id: 'leadership', label: 'College Leadership' },
];

// ── Timeline card ─────────────────────────────────────────────────────────────

function TimelineCard({
  title,
  org,
  period,
  description,
  highlight,
  index,
}: {
  title: string;
  org: string;
  period: string;
  description: string;
  highlight: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-6 mb-8 group"
    >
      <div className="flex flex-col items-center flex-shrink-0 pt-2">
        <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-background group-hover:scale-125 transition-transform duration-300" />
        <div className="flex-1 w-0.5 bg-border mt-2" />
      </div>

      <div
        className="flex-1 bg-card/70 backdrop-blur-sm rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h4 
              className="text-xl md:text-2xl mb-0.5" 
              style={{ 
                fontWeight: 600, 
                fontFamily: "'Playfair Display', serif",
                color: '#7c3aed'
              }}
            >
              {title}
            </h4>
            <p className="text-[15px] font-medium text-blue-600 dark:text-blue-400">
              {org}
            </p>
          </div>
          <span className="text-xs italic text-muted-foreground sm:text-right flex-shrink-0 mt-1">
            {period}
          </span>
        </div>
        <p className="text-[14px] text-foreground/80 leading-relaxed mb-3 whitespace-pre-wrap">{description}</p>
        <div className="flex items-start gap-2">
          <span className="text-emerald-500 font-bold">✓</span>
          <p className="text-[14px] text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
            {highlight}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Hackathon card ────────────────────────────────────────────────────────────

function HackCard({
  title,
  project,
  description,
  prize,
  index,
}: {
  title: string;
  project: string;
  description: string;
  prize: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-6 mb-8 group"
    >
      <div className="flex flex-col items-center flex-shrink-0 pt-2">
        <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-background group-hover:scale-125 transition-transform duration-300" />
        <div className="flex-1 w-0.5 bg-border mt-2" />
      </div>

      <div
        className="flex-1 bg-card/70 backdrop-blur-sm rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h4 
              className="text-xl md:text-2xl mb-0.5" 
              style={{ 
                fontWeight: 600, 
                fontFamily: "'Playfair Display', serif",
                color: '#7c3aed'
              }}
            >
              {title}
            </h4>
            <p className="text-[15px] font-medium text-blue-600 dark:text-blue-400">
              {project}
            </p>
          </div>
        </div>
        <p className="text-[14px] text-foreground/80 leading-relaxed mb-3">{description}</p>
        <div className="flex items-start gap-2">
          <span className="text-emerald-500 font-bold">✓</span>
          <p className="text-[14px] text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
            {prize}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Leadership card ───────────────────────────────────────────────────────────

function LeadCard({
  title,
  period,
  description,
  impact,
  index,
}: {
  title: string;
  period: string;
  description: string;
  impact: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-6 mb-8 group"
    >
      <div className="flex flex-col items-center flex-shrink-0 pt-2">
        <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-background group-hover:scale-125 transition-transform duration-300" />
        <div className="flex-1 w-0.5 bg-border mt-2" />
      </div>

      <div
        className="flex-1 bg-card/70 backdrop-blur-sm rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <h4 
            className="text-xl md:text-2xl mb-0.5" 
            style={{ 
              fontWeight: 600, 
              fontFamily: "'Playfair Display', serif",
              color: '#7c3aed'
            }}
          >
            {title}
          </h4>
          <span className="text-xs italic text-muted-foreground sm:text-right flex-shrink-0 mt-1">
            {period}
          </span>
        </div>
        <p className="text-[14px] text-foreground/80 leading-relaxed mb-3">{description}</p>
        <div className="flex items-start gap-2">
          <span className="text-emerald-500 font-bold">✓</span>
          <p className="text-[14px] text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
            {impact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function Experience() {
  const [active, setActive] = useState<TabId>('internships');

  return (
    <section id="experience" className="px-6 md:px-10 lg:px-16 py-24 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl text-foreground mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience &amp; Achievements
          </h2>
          <p className="text-muted-foreground text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            My journey, certifications, and contributions
          </p>
        </motion.div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-0 border-b border-border mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-4 py-3 text-sm transition-colors duration-200 ${
                active === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ fontWeight: active === tab.id ? 600 : 400 }}
            >
              {tab.label}
              {active === tab.id && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #06b6d4, #7c3aed)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === 'internships' &&
              internships.map((item, i) => (
                <TimelineCard key={i} index={i} {...item} />
              ))}

            {active === 'certifications' &&
              certifications.map((item, i) => (
                <TimelineCard key={i} index={i} {...item} />
              ))}

            {active === 'hackathons' &&
              hackathons.map((item, i) => (
                <HackCard key={i} index={i} {...item} />
              ))}

            {active === 'leadership' &&
              leadership.map((item, i) => (
                <LeadCard key={i} index={i} {...item} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}