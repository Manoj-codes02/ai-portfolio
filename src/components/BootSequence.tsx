import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Complete animation after 3.5 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const text = "AI Full Stack Developer";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Smooth stagger for each letter
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 10 // Very subtle shift, no jumping
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ai-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-grid-white bg-[size:40px_40px]" />
      
      <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center">
        <motion.div 
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 overflow-visible text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, wordIdx) => (
            <div key={wordIdx} className="flex overflow-visible">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={letterVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans uppercase tracking-widest inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BootSequence;
