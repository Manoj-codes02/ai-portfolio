import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryId = 'models' | 'research' | 'dl' | 'cv' | 'fs' | 'auto' | null;

interface Category {
  id: CategoryId;
  label: string;
  percent: number;
  title1: string;
  title2?: string;
  details: string[];
  dotColor: string;
  positionClass: string;
  hoverX?: number;
  hoverY?: number;
}

const CATEGORIES: Category[] = [
  {
    id: 'models',
    label: 'AI Models Trained',
    percent: 80,
    title1: 'AI MODELS',
    title2: undefined,
    details: ['12+', 'Models Built'],
    dotColor: 'bg-black',
    positionClass: 'absolute -top-[5%] left-1/2 -translate-x-1/2',
    hoverY: -2,
    hoverX: 0
  },
  {
    id: 'research',
    label: 'Research Projects',
    percent: 75,
    title1: 'PROJECTS',
    title2: undefined,
    details: ['AI Dental Care', 'Quality-Aware Re-ID'],
    dotColor: 'bg-black',
    positionClass: 'absolute top-[15%] -right-[15%]',
    hoverX: 2,
    hoverY: 0
  },
  {
    id: 'dl',
    label: 'Deep Learning',
    percent: 90,
    title1: 'DEEP',
    title2: 'LEARNING',
    details: ['• PyTorch', '• TensorFlow', '• CNNs'],
    dotColor: 'bg-black',
    positionClass: 'absolute top-1/2 -translate-y-1/2 -right-[25%]',
    hoverX: 2,
    hoverY: 0
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    percent: 95,
    title1: 'COMPUTER',
    title2: 'VISION',
    details: ['• OpenCV', '• Image Enhancement', '• Person Re-ID'],
    dotColor: 'bg-black',
    positionClass: 'absolute bottom-[15%] -right-[15%]',
    hoverX: 2,
    hoverY: 0
  },
  {
    id: 'fs',
    label: 'Full Stack Development',
    percent: 85,
    title1: 'FULL STACK',
    title2: undefined,
    details: ['• React', '• Node.js', '• MongoDB'],
    dotColor: 'bg-black',
    positionClass: 'absolute bottom-[15%] -left-[20%]',
    hoverX: -2,
    hoverY: 0
  },
  {
    id: 'auto',
    label: 'AI Automation',
    percent: 60,
    title1: 'AUTOMATION',
    title2: undefined,
    details: ['AI Agents', 'Workflow Automation'],
    dotColor: 'bg-black',
    positionClass: 'absolute top-1/2 -translate-y-1/2 -left-[15%]',
    hoverX: -2,
    hoverY: 0
  }
];

export default function TimeChart() {
  const [activeId, setActiveId] = useState<CategoryId>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to reset
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeCategory = CATEGORIES.find(c => c.id === activeId);

  // Calculate colors for the 50 blocks
  // If neutral (null), half red, half black
  // If active, proportional based on percent
  const getBlockColor = (index: number) => {
    if (!activeCategory) {
      return index < 25 ? '#E53935' : '#000000';
    }
    const threshold = (activeCategory.percent / 100) * 50;
    return index < threshold ? '#E53935' : '#000000';
  };

  const blocks = [];
  for (let i = 0; i < 50; i++) {
    blocks.push(
      <g key={i} transform={`rotate(${i * 7.2}, 200, 200)`}>
        <motion.line 
          x1="200" 
          y1="25" 
          x2="200" 
          y2="75" 
          strokeWidth="21"
          animate={{ stroke: getBlockColor(i) }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.005 }}
        />
      </g>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] h-full flex items-center justify-center font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center"
      >
        {/* Main SVG Chart */}
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl z-10">
          <defs>
            <mask id="block-mask">
              <circle cx="200" cy="200" r="200" fill="white" />
              {Array.from({ length: 50 }).map((_, i) => (
                <line 
                  key={i} 
                  x1="200" 
                  y1="0" 
                  x2="200" 
                  y2="100" 
                  stroke="black" 
                  strokeWidth="3" 
                  transform={`rotate(${i * 7.2 - 3.6}, 200, 200)`} 
                />
              ))}
            </mask>
          </defs>

          <g mask="url(#block-mask)">
            {/* The rotating container */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            >
              {blocks}
            </motion.g>
          </g>
        </svg>

        {/* Center Content Overlay (Absolute) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {!activeCategory ? (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#FDF6E3] tracking-wider mb-2">RESEARCH</div>
                <div className="text-3xl lg:text-4xl font-bold text-[#FDF6E3] tracking-wider">FOCUS</div>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="text-center flex flex-col items-center justify-center w-full max-w-[200px]"
              >
                <div className="text-2xl lg:text-3xl font-bold text-[#FDF6E3] tracking-wide mb-1 leading-tight uppercase">
                  {activeCategory.title1}
                </div>
                {activeCategory.title2 && (
                  <div className="text-2xl lg:text-3xl font-bold text-[#FDF6E3] tracking-wide mb-4 leading-tight uppercase">
                    {activeCategory.title2}
                  </div>
                )}
                <div className={`w-12 h-[1px] bg-white/20 ${activeCategory.title2 ? 'mb-4' : 'mb-3 mt-2'}`}></div>
                <div className="flex flex-col gap-1 items-center">
                  {activeCategory.details.map((detail, idx) => (
                    <div key={idx} className="text-xs lg:text-sm text-[#CBBBAA] font-medium tracking-wide">
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Labels positioned absolutely around the circle */}
        {CATEGORIES.map(cat => {
          const isActive = activeId === cat.id;
          const opacityClass = activeId && !isActive ? 'opacity-40' : 'opacity-100';
          const bgClass = isActive ? 'bg-[#3C3130] border-white/20 shadow-md' : 'bg-[#2C2322] border-white/10 hover:border-white/20 shadow-sm';
          
          return (
            <motion.div 
              key={cat.id}
              whileHover={{ scale: 1.05, x: cat.hoverX, y: cat.hoverY }}
              onClick={() => setActiveId(cat.id === activeId ? null : cat.id)}
              className={`absolute ${cat.positionClass} z-30 cursor-pointer transition-all duration-300 ${opacityClass}`}
            >
              <div className={`flex items-center gap-2 text-sm font-medium tracking-wide backdrop-blur-sm border px-3 py-1.5 rounded-md transition-all duration-300 ${bgClass} ${isActive ? 'text-white' : 'text-[#CBBBAA] hover:text-white'}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#E53935] shadow-[0_0_8px_#E53935]' : cat.dotColor}`}></div>
                {cat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
