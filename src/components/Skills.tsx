import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu } from 'lucide-react';

const SKILLS = [
  {
    category: 'AI / ML',
    tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy']
  },
  {
    category: 'Computer Vision',
    tags: ['OpenCV', 'Image Enhancement', 'Person Re-ID', 'CNNs', 'ResNet']
  },
  {
    category: 'Full Stack',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express']
  },
  {
    category: 'Backend',
    tags: ['PostgreSQL', 'MongoDB', 'REST APIs', 'System Design']
  },
  {
    category: 'Cloud & DevOps',
    tags: ['Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD']
  },
  {
    category: 'Tools',
    tags: ['Python', 'TypeScript', 'Git', 'Linux', 'Jupyter']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [activeSkill, setActiveSkill] = useState(0);

  const totalSkills = SKILLS.length;

  const getPosition = (index: number) => {
    const angle = Math.PI - (index * (Math.PI / (totalSkills - 1)));
    const radius = 50; 
    const x = 50 + radius * Math.cos(angle);
    const y = 100 - radius * Math.sin(angle);
    
    // Label positioning pushed slightly further out
    const labelRadius = 58;
    const labelX = 50 + labelRadius * Math.cos(angle);
    const labelY = 100 - labelRadius * Math.sin(angle);

    return { x, y, labelX, labelY, angle };
  };

  return (
    <section id="skills" className="py-32 bg-ai-bg text-ai-text relative overflow-hidden font-sans min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full" ref={ref}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-accent/10 border border-ai-accent/20 text-ai-accent text-xs font-bold tracking-widest uppercase mb-4">
            <Cpu size={14} /> System Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skill Wheel
          </h2>
        </motion.div>

        {/* Wheel Timeline Container */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[2/1] mt-10">
          
          {/* Dashed semi-circle track */}
          <div className="absolute bottom-0 left-0 w-full h-[200%] border border-white/10 rounded-full border-dashed pointer-events-none"></div>

          {/* Wheel Nodes */}
          {SKILLS.map((skill, idx) => {
            const pos = getPosition(idx);
            const isActive = activeSkill === idx;
            
            return (
              <React.Fragment key={idx}>


                {/* Node Point */}
                <div 
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 p-4"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  onClick={() => setActiveSkill(idx)}
                  onMouseEnter={() => setActiveSkill(idx)}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-ai-accent scale-150' : 'bg-gray-600 hover:bg-gray-400'}`}>
                    {isActive && (
                      <div className="absolute inset-0 m-[-6px] rounded-full border border-ai-accent animate-ping opacity-50"></div>
                    )}
                  </div>
                </div>

                {/* Label (Positioned outside) */}
                <div 
                  className={`absolute -translate-x-1/2 -translate-y-1/2 text-xs font-mono whitespace-nowrap transition-colors duration-300 pointer-events-none ${isActive ? 'text-ai-accent font-bold' : 'text-gray-500'}`}
                  style={{ 
                    left: `${pos.labelX}%`, 
                    top: `${pos.labelY}%`,
                    // Slightly tilt labels to align radially if desired, but keeping them flat is often cleaner
                  }}
                >
                  {skill.category}
                </div>
              </React.Fragment>
            );
          })}
          
          {/* Center Content Display */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
            <motion.div 
              key={activeSkill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                {SKILLS[activeSkill].category}
              </h3>
              <p className="text-ai-subtext max-w-md mx-auto text-sm leading-relaxed">
                Proficient in building systems using {SKILLS[activeSkill].tags.join(', ')}.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
