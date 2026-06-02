import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ai-bg border-t border-white/5 py-12 relative overflow-hidden">

      {/* Tiny neural line animation in background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-blue/50 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-ai-subtext text-xs uppercase tracking-[0.2em] font-mono mb-4">
          <span className="w-1.5 h-1.5 bg-ai-accent rounded-full animate-pulse shadow-[0_0_8px_#D32F2F]" />
          Built for intelligent systems.
        </div>

        <div className="text-[10px] text-gray-600 uppercase tracking-widest">
          © {new Date().getFullYear()} J MANOJ. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
