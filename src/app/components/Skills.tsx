import { motion } from 'motion/react';

interface SkillCategory {
  title: string;
  accent: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    accent: '#06b6d4',
    skills: [
      'Python',
      'C#',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript'
    ],
  },
  {
    title: 'Data Engineering & Analytics',
    accent: '#7c3aed',
    skills: [
      'ETL Pipelines',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'RDBMS Design & Optimization',
      'SQL Query Optimization',
      'AWS S3',
      'Parquet',
      'Data Modeling'
    ],
  },
  {
    title: 'ML & LLM Frameworks',
    accent: '#f59e0b',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'RAG Pipelines',
      'NL-to-SQL',
      'LangChain',
      'FAISS',
      'Semantic Search',
      'PySpark'
    ],
  },
  {
    title: 'Analytics & Visualization',
    accent: '#10b981',
    skills: [
      'Power BI',
      'Tableau',
      'Dashboard Development',
      'KPI Design'
    ],
  },
  {
    title: 'Cloud & Backend Systems',
    accent: '#ef4444',
    skills: [
      'AWS S3',
      'REST APIs',
      'Data Pipelines',
      'System Design',
      'Error Handling',
      'Logging & Monitoring'
    ],
  },
  {
    title: 'Soft Skills',
    accent: '#ec4899',
    skills: [
      'Business Problem Analysis',
      'Stakeholder Communication',
      'Cross-functional Collaboration',
      'Problem-Solving'
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <h3
        className="text-xl mb-6 tracking-tight"
        style={{ color: category.accent, fontWeight: 600, fontFamily: "'Playfair Display', serif" }}
      >
        {category.title}
      </h3>
      <ul className="space-y-4">
        {category.skills.map(skill => (
          <li
            key={skill}
            className="flex items-center gap-3 text-[15px] text-foreground/80 font-medium"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: category.accent }}
            />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 lg:px-16 py-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl text-foreground mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills &amp; Expertise
          </h2>
          <p className="text-muted-foreground text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
