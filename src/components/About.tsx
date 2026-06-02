import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Terminal, FileText, Database, Network, Target, Crosshair, Zap, Cpu, Activity, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const STATS = [
    { label: 'Projects Built', value: '15+', icon: <Database size={16}/> },
    { label: 'AI Models', value: '10+', icon: <Network size={16}/> },
    { label: 'Research Focus', value: 'Computer Vision', icon: <Brain size={16}/> },
    { label: 'Learning Since', value: '2023', icon: <Activity size={16}/> },
  ];

  const STATUSES = ['ACTIVE', 'RESEARCHING', 'BUILDING', 'TRAINING MODELS'];

  return (
    <section id="about" className="relative py-24 bg-ai-bg text-ai-text overflow-hidden">
      {/* Neural Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,124,255,0.05)_0,transparent_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-glow/10 border border-ai-glow/20 text-ai-glow text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(123,97,255,0.2)]">
            <Cpu size={14} /> AI Identity Panel
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ai-text mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-violet to-ai-blue">Manoj AI</span>
          </h2>
          <p className="text-ai-subtext text-lg">AI Engineer • Computer Vision Enthusiast • Full Stack Developer</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
          
          {/* Holographic Profile Scanner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center perspective-[1000px]"
          >
            <div className="relative group w-72 h-80 md:w-80 md:h-[22rem] rounded-2xl p-[2px] bg-gradient-to-b from-ai-blue/30 via-ai-violet/10 to-transparent">
              <div className="relative w-full h-full bg-ai-card rounded-2xl overflow-hidden border border-white/10">
                <img src="/profile.jpg" alt="Manoj" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* AI System Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/3 flex flex-col gap-6"
          >
            {/* Info Grid */}
            <div className="bg-ai-surface/60 backdrop-blur-xl rounded-2xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">
              {/* Animated glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-ai-glow/30 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] text-ai-subtext uppercase tracking-widest font-mono mb-1 flex items-center gap-2"><Target size={12}/> Name</h4>
                    <p className="text-xl font-bold text-ai-text">J Manoj</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-ai-subtext uppercase tracking-widest font-mono mb-1 flex items-center gap-2"><Cpu size={12}/> Specialization</h4>
                    <p className="text-ai-subtext font-medium">Artificial Intelligence & Full Stack Engineering</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-ai-subtext uppercase tracking-widest font-mono mb-1 flex items-center gap-2"><Brain size={12}/> Research Focus</h4>
                    <p className="text-ai-subtext font-medium">Quality-Aware Person Re-Identification, CV</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] text-ai-subtext uppercase tracking-widest font-mono mb-1 flex items-center gap-2"><Database size={12}/> Tech Stack</h4>
                    <p className="text-ai-subtext font-medium">Python, React, Node.js, PyTorch, OpenCV</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] text-ai-subtext uppercase tracking-widest font-mono mb-1 flex items-center gap-2"><Crosshair size={12}/> Current Mission</h4>
                    <p className="text-ai-subtext font-medium">Building scalable AI systems and researching low-light image enhancement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Widgets & Status */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-ai-surface/50 backdrop-blur-lg border border-white/5 rounded-xl p-4 hover:bg-white/5 hover:border-ai-accent/30 transition-colors">
                  <div className="text-ai-glow mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-ai-text mb-1">{stat.value}</div>
                  <div className="text-[10px] text-ai-subtext uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {STATUSES.map((s, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-ai-accent/10 border border-ai-accent/30 rounded-full text-[10px] font-bold tracking-wider text-ai-accent shadow-[0_0_10px_rgba(77,124,255,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-ai-accent animate-pulse"></span> {s}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#projects" className="group px-6 py-3 bg-gradient-to-r from-ai-blue to-ai-violet rounded-lg text-white font-medium hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all flex items-center gap-2">
                <Terminal size={16} /> Explore Projects
              </a>
              <button 
                onClick={() => { const btn = document.querySelector('.fixed.bottom-6.right-6.p-4'); if(btn) (btn as HTMLElement).click(); }}
                className="px-6 py-3 bg-white/5 border border-white/10 hover:border-ai-glow/50 rounded-lg text-ai-text font-medium hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Bot size={16} className="text-ai-glow" /> Launch Manoj AI
              </button>
              <a href="/resume/J_Manoj_Resume.docx" target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 hover:border-ai-accent/50 rounded-lg text-ai-subtext hover:text-ai-text font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                <FileText size={16} className="text-ai-accent" /> Resume
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
