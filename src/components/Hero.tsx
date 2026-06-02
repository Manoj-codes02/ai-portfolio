import React, { useState, useEffect, MouseEvent, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Terminal, ArrowRight, FileText, Beaker } from 'lucide-react';
import TimeChart from './TimeChart';

const MagneticButton = ({ children, className, onClick, href }: any) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width/2);
    const middleY = clientY - (top + height/2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };
  
  const mouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component: any = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      style={{ x: smoothX, y: smoothY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      className={className}
    >
      {children}
    </Component>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll-triggered animations
  const textY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const coreY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const coreOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const coreScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(smoothMouseX, [0, 1], [40, -40]);
  const bgY = useTransform(smoothMouseY, [0, 1], [40, -40]);
  const bgXInverse = useTransform(smoothMouseX, [0, 1], [-40, 40]);
  const bgYInverse = useTransform(smoothMouseY, [0, 1], [-40, 40]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-ai-bg overflow-hidden font-sans pt-20 lg:pt-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Matte Texture & Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Floating Blur Orbs with very low opacity */}
      <motion.div
        style={{ x: bgX, y: bgY, translateY: bgParallax }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ai-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"
      ></motion.div>
      <motion.div
        style={{ x: bgXInverse, y: bgYInverse, translateY: bgParallax }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-ai-glow/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 min-h-[calc(100vh-5rem)]">
        
        {/* LEFT SIDE: Content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="flex-1 w-full flex flex-col justify-center text-left lg:pr-8 z-20 origin-left"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ai-text mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-ai-text via-white to-gray-400">
              Building Intelligent <br className="hidden xl:block" /> Systems
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-medium text-ai-subtext mb-8 flex items-center gap-3 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-ai-accent shadow-glow shrink-0 animate-pulse-slow"></span>
              AI Full-Stack Developer | AI/ML Engineer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-ai-subtext mb-12 max-w-xl leading-relaxed font-light">
              Building AI-powered applications, computer vision solutions, and scalable full-stack systems that solve real-world problems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-ai-text text-ai-bg hover:bg-gray-200 active:bg-ai-accent active:text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-ai-surface/50 backdrop-blur-md border border-white/10 hover:bg-white/10 active:text-ai-accent active:border-ai-accent/30 rounded-xl text-ai-text font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                View Work
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Interactive AI Systems Core */}
        <motion.div
          style={{ y: coreY, opacity: coreOpacity, scale: coreScale }}
          className="flex-1 w-full flex justify-center lg:justify-end relative h-[450px] lg:h-[600px] mt-10 lg:mt-0 perspective-1000 origin-center"
        >
          <TimeChart />
        </motion.div>
      </div>
    </section>
  );
}
