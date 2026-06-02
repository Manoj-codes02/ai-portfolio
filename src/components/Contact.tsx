import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jpd.manoj@gmail.com',
      link: 'mailto:jpd.manoj@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7904019029',
      link: 'tel:+917904019029'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Trichy, Tamilnadu',
      link: 'https://maps.google.com?q=Trichy,+Tamilnadu'
    }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-24 bg-ai-bg relative overflow-hidden font-sans">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-accent/10 border border-ai-accent/20 text-ai-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(77,124,255,0.2)]">
            <MessageCircle size={14} /> Communication Uplink
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ai-text mb-4 tracking-tight">
            Initialize Connection
          </h2>
          <p className="mt-4 text-lg text-ai-subtext max-w-2xl mx-auto">
            System ready to receive communications. Transmit your project parameters or connection request below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-ai-text mb-6">
                System Protocols
              </h3>
              <p className="text-ai-subtext mb-8">
                Open channels for professional inquiries, AI integration proposals, and architectural discussions. Response latency is typically under 12 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-ai-surface border border-white/5 rounded-xl hover:border-ai-accent/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-ai-card border border-white/10 rounded-lg flex items-center justify-center group-hover:border-ai-accent/30 transition-colors">
                    <item.icon className="h-5 w-5 text-ai-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-mono text-ai-subtext mb-1">
                      {item.title}
                    </h4>
                    <p className="font-medium text-ai-text group-hover:text-ai-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-mono text-ai-subtext mb-4 mt-8">
                External Nodes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="w-12 h-12 bg-ai-surface border border-white/5 rounded-lg flex items-center justify-center text-ai-subtext hover:text-ai-accent hover:border-ai-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-ai-surface/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] p-8 relative overflow-hidden"
          >
            {/* Top corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-ai-accent/10 blur-[50px] pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-ai-accent/10 text-ai-accent text-[10px] uppercase font-bold tracking-wider rounded border border-ai-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-ai-accent animate-pulse"></span>
                Terminal Input
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono tracking-wider text-ai-subtext mb-2 uppercase">
                    Sender ID
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ai-card border border-white/10 rounded-lg focus:ring-1 focus:ring-ai-blue focus:border-ai-accent text-ai-text transition-colors placeholder:text-gray-600 outline-none"
                    placeholder="Enter designation"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono tracking-wider text-ai-subtext mb-2 uppercase">
                    Return Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-ai-card border border-white/10 rounded-lg focus:ring-1 focus:ring-ai-blue focus:border-ai-accent text-ai-text transition-colors placeholder:text-gray-600 outline-none"
                    placeholder="communication@node.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono tracking-wider text-ai-subtext mb-2 uppercase">
                  Subject Vector
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-ai-card border border-white/10 rounded-lg focus:ring-1 focus:ring-ai-blue focus:border-ai-accent text-ai-text transition-colors placeholder:text-gray-600 outline-none"
                  placeholder="Identify transmission purpose"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono tracking-wider text-ai-subtext mb-2 uppercase">
                  Payload
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-ai-card border border-white/10 rounded-lg focus:ring-1 focus:ring-ai-blue focus:border-ai-accent text-ai-text transition-colors placeholder:text-gray-600 outline-none resize-none"
                  placeholder="Enter message payload data..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 bg-ai-accent/10 border border-ai-accent/20 text-ai-accent font-semibold font-mono uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(77,124,255,0.1)] hover:bg-ai-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    TRANSMITTING...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    TRANSMISSION SUCCESS
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    TRANSMIT DATA
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;