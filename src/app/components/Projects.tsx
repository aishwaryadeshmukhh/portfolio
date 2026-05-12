import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  subtitle?: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: 'PharmaIQ',
    subtitle: 'Agentic Pharmaceutical Intelligence',
    problem: 'Deriving actionable clinical insights from massive, unstructured FDA medical labels and trial datasets.',
    solution: 'Architected an Agentic RAG system featuring Hybrid Search (Vector + BM25) and Semantic Chunking for high-precision retrieval across complex documentation.',
    impact: 'Engineered citation-backed reasoning workflows that ensure data integrity and transparency for critical pharmaceutical decision-making.',
    tech: ['Agentic RAG', 'Hybrid Search', 'FastAPI', 'AWS S3', 'PostgreSQL', 'LangChain'],
    github: 'https://github.com/yash-ganatra/PharmaIQ',
    accent: '#7c3aed',
  },
  {
    title: 'Floatchat',
    subtitle: 'NL-to-SQL Oceanographic Agent',
    problem: 'Querying high-dimensional ARGO oceanographic NetCDF datasets without specialized technical knowledge.',
    solution: 'Developed an NL-to-SQL Orchestration pipeline utilizing Vector Embeddings (FAISS) and distributed ETL processing to translate natural language into optimized SQL queries.',
    impact: 'Optimized analytical turnaround by 50% through automated query synthesis and high-performance retrieval from normalized Postgres/Parquet stores.',
    tech: ['NL-to-SQL', 'Vector Embeddings', 'FAISS', 'Distributed ETL', 'Parquet', 'Python'],
    github: 'https://github.com/aishwaryadeshmukhh/Floatchat-SIH',
    accent: '#7c3aed',
  },
  {
    title: 'HackRx',
    subtitle: 'XAI Insurance Reasoner',
    problem: 'Fragmented clause-level retrieval and automated decision-making in insurance policy contracts.',
    solution: 'Built an Explainable AI (XAI) pipeline focused on Semantic Clause Retrieval and RAG-driven evidence extraction to automate complex claim justifications.',
    impact: 'Generated high-precision, structured justifications for claims by implementing intelligent retrieval workflows that ensure explainability and trust.',
    tech: ['Explainable AI', 'RAG', 'Semantic Search', 'FastAPI', 'LLMs', 'JSON Schema'],
    github: 'https://github.com/aishwaryadeshmukhh/hackrx-llm-query-system',
    accent: '#7c3aed',
  },
  {
    title: 'MumbaiHacks',
    subtitle: 'Multi-Agent Trust Pipeline',
    problem: 'Validating real-world trust and detecting misinformation across massive, heterogeneous data streams.',
    solution: 'Engineered a Multi-Agent Orchestration system with Cross-Source Evidence Fusion and distributed scraping to verify data integrity in real-time.',
    impact: 'Designed a production-ready, scalable AI pipeline for trust validation utilizing Redis-backed caching and asynchronous ingestion at scale.',
    tech: ['Multi-Agent AI', 'Evidence Fusion', 'Redis', 'Distributed Scraping', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/ayushptl1810/MumbaiHacksJbbr',
    accent: '#7c3aed',
  },
  {
    title: 'AMBROSIA',
    subtitle: 'Global Flood Intelligence Platform',
    problem: 'Fragmented situational awareness for flood infrastructure planners and responders during increasing climate-driven disasters.',
    solution: 'Architected a full-stack intelligence platform fusing satellite SAR imagery (Sentinel-1), PyTorch LSTM forecasting, and OSMnx-driven lifeline road network analysis.',
    impact: 'Delivered real-time flood detection, flash-flood probability scoring, and infrastructure accessibility simulations via an interactive CesiumJS 3D globe.',
    tech: ['PyTorch LSTM', 'OSMnx', 'FastAPI', 'CesiumJS', 'Vercel', 'MongoDB', 'SAR Imagery'],
    github: 'https://github.com/JayGuri/LastStrawHackX',
    accent: '#7c3aed',
  },
  {
    title: 'TerraShield',
    subtitle: 'Earthquake Prediction & Analysis Pipeline',
    problem: 'Unreliable earthquake alert classification and missing geospatial data for historical seismic events.',
    solution: 'Developed an end-to-end ML pipeline utilizing XGBoost for high-precision alert level prediction and automated geocoding for continent-level data imputation.',
    impact: 'Implemented a production-ready Streamlit dashboard for real-time seismic evaluation and exploratory data analysis of global tectonic patterns.',
    tech: ['XGBoost', 'Python', 'Streamlit', 'Scikit-learn', 'Geocoding', 'Pickle'],
    github: 'https://github.com/sakshat193/dataquest_JBBR',
    accent: '#7c3aed',
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card rounded-3xl border border-border p-8 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 flex flex-col h-full"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <h3
        className="text-2xl md:text-3xl mb-6 tracking-tight leading-tight"
        style={{ color: '#7c3aed', fontWeight: 600, fontFamily: "'Playfair Display', serif" }}
      >
        {project.title}
        {project.subtitle && (
          <span className="text-muted-foreground block text-lg mt-1" style={{ fontWeight: 400 }}>
            {project.subtitle}
          </span>
        )}
      </h3>

      <div className="space-y-4 text-[15px] leading-relaxed mb-8 flex-1">
        <p>
          <span className="text-foreground font-bold">Problem: </span>
          <span className="text-foreground/80 font-medium">{project.problem}</span>
        </p>
        <p>
          <span className="text-foreground font-bold">Solution: </span>
          <span className="text-foreground/80 font-medium">{project.solution}</span>
        </p>
        <p>
          <span className="text-emerald-500 font-bold">Impact: </span>
          <span className="text-emerald-600 font-bold dark:text-emerald-400">{project.impact}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-muted border border-border text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[15px] font-bold text-purple-600 dark:text-purple-400 hover:gap-2.5 transition-all duration-300"
      >
        View on GitHub
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-32 bg-background/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-6xl text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Technical systems architected for performance, scalability, and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
