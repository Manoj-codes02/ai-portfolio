import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, Cpu, ChevronDown, User, MessageSquare } from 'lucide-react';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
};

const SUGGESTED_QUESTIONS = [
  "Tell me about your skills",
  "Show your AI projects",
  "What technologies do you use?",
  "Explain your research work",
  "Download your resume",
  "What is your strongest domain?",
  "Show your achievements",
  "Contact Manoj"
];

const KNOWLEDGE_BASE: Record<string, string> = {
  "Tell me about your skills": "I specialize in AI & Machine Learning, Deep Learning, and Full Stack Development. My technical expertise includes Python, React, Node.js, PyTorch, TensorFlow, and OpenCV.",
  "Show your AI projects": "Some of my key AI projects include Quality Aware Person Re-Identification, Low-Light Image Enhancement, and various Computer Vision applications using Deep Learning architectures.",
  "What technologies do you use?": "I primarily build with React, Tailwind CSS, Node.js, and Express for web development, and Python, PyTorch, and TensorFlow for Machine Learning and AI research.",
  "Explain your research work": "My research focuses on Quality Aware Person Re-Identification (VI ReID) and enhancing low-light images for better computer vision analysis.",
  "Download your resume": "You can download Manoj's resume directly from the Navigation menu or the About section of this portfolio!",
  "What is your strongest domain?": "My strongest domain is the intersection of Computer Vision and Full Stack Development—building robust AI models and deploying them in accessible web applications.",
  "Show your achievements": "I've published research on VI ReID, built scalable Full Stack applications, and continuously implement cutting-edge Deep Learning papers.",
  "Contact Manoj": "You can reach out to Manoj via the Contact section below, or connect on LinkedIn and GitHub!"
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello, I'm Manoj AI 👋\nI can tell you about Manoj's projects, skills, AI research, and technical expertise."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "That's a great question! I'm constantly learning more about Manoj. For detailed specifics, feel free to explore the portfolio or use the Contact section.";

      const matchedQuestion = Object.keys(KNOWLEDGE_BASE).find(q => text.toLowerCase().includes(q.toLowerCase()));
      if (matchedQuestion) {
        aiResponse = KNOWLEDGE_BASE[matchedQuestion];
      } else {
        // Simple keyword matching
        if (text.toLowerCase().includes('react') || text.toLowerCase().includes('web')) {
          aiResponse = "Manoj is a skilled Full Stack Developer, proficient in React, Tailwind, and Node.js, building modern, responsive, and performant web applications.";
        } else if (text.toLowerCase().includes('ai') || text.toLowerCase().includes('machine learning')) {
          aiResponse = "Manoj has a strong background in AI, particularly Deep Learning and Computer Vision, utilizing PyTorch and TensorFlow for advanced research projects.";
        }
      }

      const newAiMsg: Message = { id: (Date.now() + 1).toString(), sender: 'ai', text: aiResponse };
      setMessages(prev => [...prev, newAiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] z-50 transition-all duration-300 group"
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <Bot size={28} className="group-hover:animate-pulse" />

            {/* Ping effect */}
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] flex flex-col rounded-2xl overflow-hidden z-50 border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(79,70,229,0.25)]"
          >
            {/* Particle Background overlay (Subtle) */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50"></div>

            {/* Header */}
            <div className="relative p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                  <Cpu size={20} />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white flex items-center gap-2">
                    Manoj AI <Sparkles size={14} className="text-purple-400" />
                  </h3>
                  <p className="text-xs text-gray-400">Ask Manoj AI Anything</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-600/50 scrollbar-track-transparent relative z-10">
              <div className="text-center pb-4 border-b border-white/5 mb-4">
                <p className="text-xs text-gray-500">AI-powered portfolio assistant trained on my skills, projects, experience, and achievements.</p>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${msg.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-tr-sm'
                      : 'bg-white/10 text-gray-200 border border-white/10 rounded-tl-sm backdrop-blur-md shadow-inner'
                    }`}>
                    {msg.sender === 'ai' && msg.id === 'welcome' ? (
                      <div className="whitespace-pre-line">{msg.text}</div>
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center backdrop-blur-md">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-purple-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-purple-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-purple-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Chips */}
            <div className="px-4 pb-2 relative z-10 flex overflow-x-auto gap-2 scrollbar-none hide-scrollbar">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/15 hover:text-white hover:border-purple-500/50 transition-all flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 relative z-10 bg-black/40 border-t border-white/10 backdrop-blur-xl">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my skills or projects..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1.5 p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(79,70,229,0.6)] transition-all group"
                >
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
