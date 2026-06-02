import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Activity, Database, Cpu, Search, Layers, Box } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Quality-Aware Person Re-Identification',
    description: 'A Computer Vision project focused on improving person re-identification performance using adaptive image enhancement, feature extraction, and quality-aware matching techniques.',
    metrics: { tech: 'Python, PyTorch', library: 'OpenCV', category: 'Computer Vision' },
    tags: ['AI', 'Computer Vision', 'PyTorch']
  },
  {
    title: 'RAG System',
    description: 'An advanced Retrieval-Augmented Generation (RAG) system that combines semantic search, hybrid retrieval, reranking, and LLM-powered answer generation to deliver accurate, context-aware responses from custom knowledge bases.',
    metrics: { stack: 'Python, LangChain', db: 'Vector Database', status: 'Completed' },
    tags: ['Generative AI', 'RAG', 'LangChain', 'LLMs']
  },
  {
    title: 'Cloud Analyzer',
    description: 'A cloud-based analytics platform designed to process, monitor, and visualize data through an interactive dashboard with real-time insights and reporting capabilities.',
    metrics: { stack: 'React, Node.js', status: 'Completed', domain: 'Cloud' },
    tags: ['Cloud Computing', 'Data Visualization', 'Cloud Services']
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive visualization engine for sorting and searching algorithms with step-by-step execution analysis.',
    metrics: { rendering: '60fps', tech: 'React, D3.js', type: 'Educational' },
    tags: ['Algorithms', 'Data Structures', 'Visualization']
  },
  {
    title: 'Food Ordering Platform',
    description: 'Comprehensive food delivery application with real-time order tracking and secure payment integration.',
    metrics: { stack: 'MERN', users: 'Multi-role', scale: 'Scalable' },
    tags: ['Full Stack', 'Web App', 'E-Commerce']
  },
  {
    title: 'E-Commerce Store',
    description: 'Modern e-commerce platform with dynamic inventory management and personalized shopping experiences.',
    metrics: { tech: 'React, Node.js', db: 'MongoDB', ui: 'Responsive' },
    tags: ['MERN Stack', 'Retail', 'Dynamic UI']
  }
];

const TiltCard = ({ children, className }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width;
    const yPct = mouseY / height;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative perspective-1000 ${className}`}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none rounded-2xl" 
        style={{ opacity: useTransform(mouseXSpring, [0, 1], [0, 0.15]) as any }} 
      />
      {children}
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 bg-ai-bg text-ai-text relative overflow-hidden font-sans">
      
      {/* Background Matte Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ai-accent/10 border border-ai-accent/30 text-ai-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(211,47,47,0.15)]">
            <Layers size={14} /> Architecture Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-ai-text mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Engineered Systems
          </h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-16 perspective-1000"
        >
          <TiltCard>
            <div className="group relative bg-ai-surface border border-white/10 rounded-3xl overflow-hidden hover:border-ai-accent/40 hover:shadow-[0_0_40px_rgba(211,47,47,0.15)] transition-all duration-500">
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(211,47,47,0.15),transparent_70%)] pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-100"></div>
              
              <div className="p-8 lg:p-12 flex flex-col lg:flex-row gap-12 relative z-10">
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-ai-accent/10 text-ai-accent text-[10px] uppercase font-bold tracking-wider rounded-md border border-ai-accent/30 shadow-[0_0_10px_rgba(211,47,47,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-ai-accent animate-pulse-slow"></span>
                      FEATURED RESEARCH
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    AI Dental Care
                  </h3>
                  
                  <p className="text-ai-subtext leading-relaxed mb-8 text-lg font-light">
                    An AI-powered dental healthcare platform that assists in oral disease detection, patient guidance, appointment management, and intelligent healthcare support.
                  </p>

                  <div className="flex gap-4">
                    <button className="px-6 py-3.5 bg-ai-accent/15 hover:bg-ai-accent/25 text-ai-accent border border-ai-accent/30 rounded-xl font-semibold transition-all flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(211,47,47,0.15)]">
                      <Github size={18} /> Source Code
                    </button>
                    <button className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all flex items-center gap-2 text-sm backdrop-blur-md">
                      <ExternalLink size={18} /> Platform Demo
                    </button>
                  </div>
                </div>

                {/* Research Metrics Dashboard */}
                <div className="flex-1 lg:min-w-[400px]">
                  <div className="grid grid-cols-2 gap-4 h-full" style={{ transform: "translateZ(30px)" }}>
                    <div className="bg-ai-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-center hover:bg-ai-card transition-colors shadow-lg">
                      <div className="flex items-center gap-2 text-ai-subtext text-xs uppercase tracking-wider mb-3"><Activity size={16} className="text-ai-accent"/> Status</div>
                      <div className="text-2xl font-bold text-white">Core Project</div>
                    </div>
                    <div className="bg-ai-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-center hover:bg-ai-card transition-colors shadow-lg">
                      <div className="flex items-center gap-2 text-ai-subtext text-xs uppercase tracking-wider mb-3"><Search size={16} className="text-gray-400"/> Primary Tech</div>
                      <div className="text-2xl font-bold text-gray-200">AI + Full-Stack Development</div>
                    </div>
                    <div className="bg-ai-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-center hover:bg-ai-card transition-colors shadow-lg">
                      <div className="flex items-center gap-2 text-ai-subtext text-xs uppercase tracking-wider mb-3"><Cpu size={16} className="text-gray-400"/> Domain</div>
                      <div className="text-2xl font-bold text-white">Healthcare</div>
                    </div>
                    <div className="bg-ai-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-center hover:bg-ai-card transition-colors shadow-lg">
                      <div className="flex items-center gap-2 text-ai-subtext text-xs uppercase tracking-wider mb-3"><Database size={16} className="text-gray-400"/> Stack</div>
                      <div className="text-xl font-bold text-white">AI Full-Stack</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
            >
              <TiltCard className="h-full">
                <div className="group bg-ai-surface/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-ai-accent/30 hover:shadow-[0_0_30px_rgba(211,47,47,0.05)] transition-all flex flex-col h-full relative overflow-hidden">
                  
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ai-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex justify-between items-start mb-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <div className="p-3 bg-ai-card rounded-xl border border-white/10 text-ai-subtext group-hover:text-ai-accent group-hover:border-ai-accent/30 transition-all shadow-md">
                      <Box size={24} />
                    </div>
                    <div className="flex gap-3">
                      <button className="text-ai-subtext hover:text-white transition-colors"><Github size={20}/></button>
                      <button className="text-ai-subtext hover:text-white transition-colors"><ExternalLink size={20}/></button>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10" style={{ transform: "translateZ(20px)" }}>{project.title}</h3>
                  <p className="text-base text-ai-subtext font-light leading-relaxed mb-8 flex-grow relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {project.description}
                  </p>

                  {/* Metrics block */}
                  <div className="grid grid-cols-3 gap-3 mb-6 border-t border-white/10 pt-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-[10px] text-ai-subtext/70 uppercase tracking-wider font-mono mb-1.5">{key}</div>
                        <div className="text-sm font-semibold text-gray-300">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-ai-card/50 border border-white/10 rounded-md text-[11px] font-medium text-gray-400 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
