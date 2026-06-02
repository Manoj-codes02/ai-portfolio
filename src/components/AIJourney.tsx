import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Brain, Code, Eye, Layers, Box, Terminal } from 'lucide-react';

const JOURNEY_STEPS = [
  {
    year: '2023',
    title: 'Programming Foundations',
    description: 'Mastered core programming concepts including Java, C, and Data Structures & Algorithms (DSA) basics.',
    icon: Terminal,
    current: false
  },
  {
    year: '2024',
    title: 'MERN Stack Development',
    description: 'Built scalable web applications using MongoDB, Express.js, React, and Node.js.',
    icon: Layers,
    current: false
  },
  {
    year: '2024',
    title: 'Full-Stack Projects',
    description: 'Developed comprehensive solutions including a Food Ordering Platform, E-Commerce Store, and Portfolio Website.',
    icon: Box,
    current: false
  },
  {
    year: '2025',
    title: 'Machine Learning Journey',
    description: 'Explored data science and ML fundamentals using NumPy, Pandas, Scikit-Learn, and various ML Models.',
    icon: Brain,
    current: false
  },
  {
    year: '2025',
    title: 'Machine Learning Internship',
    description: 'Applied ML techniques in real-world scenarios: Credit Scoring Model, Emotion Recognition, and Handwritten Character Recognition.',
    icon: Code,
    current: false
  },
  {
    year: '2025',
    title: 'Deep Learning',
    description: 'Advanced into neural networks working with TensorFlow, PyTorch, and CNN Architectures.',
    icon: Layers,
    current: false
  },
  {
    year: '2025',
    title: 'Computer Vision Research',
    description: 'Focused on image processing techniques using OpenCV, Image Enhancement, and Feature Extraction.',
    icon: Eye,
    current: false
  },
  {
    year: '2025 - Present',
    title: 'Low-Light Person Re-Identification',
    description: 'Conducting specialized research in Re-ID using Zero-DCE, SIGAN, and ResNet50 for enhanced accuracy in sub-optimal environments.',
    icon: Eye,
    current: false
  },
  {
    year: 'Current',
    title: 'AI Full-Stack Developer',
    description: 'Building intelligent systems through AI, Computer Vision, Deep Learning, and Full-Stack Engineering.',
    icon: Brain,
    current: true
  }
];

export default function AIJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="ai-journey" className="py-24 bg-ai-bg text-ai-text relative overflow-hidden font-sans">
      
      {/* Background Matte Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,124,255,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">AI Evolution Path</h2>
          <p className="text-ai-subtext text-lg">My journey from curious learner to AI Engineer.</p>
        </div>

        <div className="relative">
          {/* Background Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2"></div>
          
          {/* Animated Neural Beam */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ai-blue via-ai-violet to-ai-blue md:-translate-x-1/2 shadow-[0_0_10px_rgba(77,124,255,0.8)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {JOURNEY_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <JourneyNode key={idx} step={step} isEven={isEven} idx={idx} />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function JourneyNode({ step, isEven, idx }: { step: any, isEven: boolean, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative flex items-center md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
      
      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block md:w-1/2"></div>

      {/* Neural Node Icon */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ai-bg border-2 border-ai-surface flex items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-full h-full rounded-full flex items-center justify-center border border-white/10 ${step.current ? 'bg-ai-accent shadow-[0_0_20px_rgba(77,124,255,0.6)]' : 'bg-ai-card shadow-[0_0_15px_rgba(77,124,255,0.2)]'}`}
        >
          <step.icon size={16} className={step.current ? 'text-white' : 'text-ai-accent'} />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`w-full pl-12 md:pl-0 md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}
      >
        <div className={`border rounded-2xl p-6 transition-colors ${step.current ? 'bg-white/[0.05] border-ai-accent/50 shadow-[0_0_30px_rgba(77,124,255,0.15)]' : 'bg-ai-surface border-white/5 hover:bg-white/[0.02] hover:border-white/10'}`}>
          <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono tracking-widest mb-3 ${step.current ? 'bg-ai-accent/20 text-ai-accent font-bold' : 'bg-white/5 text-ai-accent'}`}>
            {step.year}
          </span>
          <h3 className="text-lg font-bold text-ai-text mb-2">{step.title}</h3>
          <p className="text-sm text-ai-subtext leading-relaxed font-light">{step.description}</p>
        </div>
      </motion.div>

    </div>
  );
}
