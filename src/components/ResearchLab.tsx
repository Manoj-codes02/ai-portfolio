import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Mic, Edit3, BookOpen } from 'lucide-react';

const ResearchLab = () => {
  const achievements = [
    {
      title: "CodeAlpha Machine Learning Internship",
      description: "Successfully completed all assigned Machine Learning internship tasks and gained hands-on experience in real-world ML applications.",
      highlights: ["Credit Scoring Model", "Emotion Recognition from Speech", "Handwritten Character Recognition"],
      status: "Completed",
      icon: <Award className="w-5 h-5 text-ai-accent" />
    },
    {
      title: "Credit Scoring Model",
      description: "Built a machine learning model to evaluate creditworthiness using financial and behavioral features.",
      highlights: ["Python", "Scikit-Learn", "Pandas"],
      status: "Completed",
      icon: <CheckCircle className="w-5 h-5 text-ai-glow" />
    },
    {
      title: "Emotion Recognition from Speech",
      description: "Developed a speech-based emotion recognition system capable of classifying human emotions from audio signals.",
      highlights: ["Python", "Librosa", "Machine Learning"],
      status: "Completed",
      icon: <Mic className="w-5 h-5 text-ai-accent" />
    },
    {
      title: "Handwritten Character Recognition",
      description: "Implemented a deep learning model for recognizing handwritten characters using image processing and classification techniques.",
      highlights: ["Python", "TensorFlow", "Computer Vision"],
      status: "Completed",
      icon: <Edit3 className="w-5 h-5 text-ai-glow" />
    },
    {
      title: "AI & Computer Vision Learning Journey",
      description: "Explored advanced concepts in Deep Learning, Computer Vision, Image Enhancement, and Person Re-Identification.",
      highlights: ["Deep Learning", "Computer Vision", "Image Enhancement", "Person Re-ID"],
      status: "Ongoing",
      icon: <BookOpen className="w-5 h-5 text-ai-accent" />
    }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-ai-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Certifications & Achievements</h2>
          <p className="text-ai-subtext max-w-2xl mx-auto text-lg">
            Professional certifications, internships, and accomplishments that showcase my growth in AI, Machine Learning, and Software Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-ai-surface border border-white/5 rounded-2xl p-6 hover:border-ai-accent/30 transition-all flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-3 bg-ai-card rounded-xl border border-white/5 group-hover:border-ai-accent/30 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]' : 'bg-ai-accent/10 text-ai-accent border-ai-accent/20 shadow-[0_0_10px_rgba(77,124,255,0.1)]'}`}>
                  {item.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-ai-accent transition-colors relative z-10">{item.title}</h3>
              
              <p className="text-sm text-ai-subtext mb-6 leading-relaxed flex-grow relative z-10">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {item.highlights.map((highlight, i) => (
                  <span key={i} className="text-[11px] font-medium px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 tracking-wide">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchLab;
