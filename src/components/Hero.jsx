import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

export default function Hero({ onNavClick }) {
  // Animation variants for floating stickers
  const floatVariants = {
    animate: (custom) => ({
      y: [0, -10, 0],
      rotate: [custom.r, custom.r + 2, custom.r],
      transition: {
        duration: custom.d,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const cards = [
    {
      title: "Go8",
      sub: "Australia",
      bg: "bg-blue-100",
      border: "border-blue-600",
      accent: "text-blue-600",
      shadow: "shadow-[6px_6px_0px_#2563eb]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <rect x="20" y="30" width="60" height="50" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <path d="M 20,30 L 50,10 L 80,30 Z" fill="#2563eb" stroke="#000" strokeWidth="2.5" />
          <circle cx="50" cy="55" r="12" fill="#facc15" stroke="#000" strokeWidth="2.5" />
          <path d="M 50,47 L 50,63 M 42,55 L 58,55" stroke="#000" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Ivy League",
      sub: "United States",
      bg: "bg-pink-100",
      border: "border-pink-500",
      accent: "text-pink-500",
      shadow: "shadow-[6px_6px_0px_#ec4899]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <path d="M 25,20 L 75,20 L 70,70 L 50,85 L 30,70 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <path d="M 35,30 L 65,30 M 35,45 L 65,45 M 50,30 L 50,70" stroke="#ec4899" strokeWidth="3" />
          <polygon points="50,60 55,70 45,70" fill="#facc15" stroke="#000" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "IITs & IIMs",
      sub: "India",
      bg: "bg-yellow-100",
      border: "border-yellow-500",
      accent: "text-yellow-600",
      shadow: "shadow-[6px_6px_0px_#eab308]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <rect x="25" y="25" width="50" height="50" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <line x1="25" y1="25" x2="75" y2="75" stroke="#000" strokeWidth="2.5" />
          <line x1="75" y1="25" x2="25" y2="75" stroke="#000" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="16" fill="#facc15" stroke="#000" strokeWidth="2.5" />
          <polygon points="50,42 58,58 42,58" fill="#2563eb" stroke="#000" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Russell Group",
      sub: "United Kingdom",
      bg: "bg-emerald-100",
      border: "border-emerald-500",
      accent: "text-emerald-600",
      shadow: "shadow-[6px_6px_0px_#10b981]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <rect x="20" y="45" width="60" height="35" rx="5" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <path d="M 30,45 L 30,25 Q 50,15 70,25 L 70,45" fill="none" stroke="#10b981" strokeWidth="3" />
          <circle cx="50" cy="62" r="8" fill="#ec4899" stroke="#000" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pb-12 pt-28 border-b-4 border-black bg-transparent">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b-[3px] border-black z-40 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />

          {/* Socials capsule navigation */}
          <div className="hidden md:flex items-center gap-1 bg-[#0f172a]/5 border-[2px] border-black rounded-full p-1.5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border-[2px] border-black rounded-full text-slate-800 hover:bg-blue-600 hover:text-white transition-all hover:scale-105 flex items-center justify-center" title="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:contact@vraiseventures.com" className="p-2 bg-white border-[2px] border-black rounded-full text-slate-800 hover:bg-pink-500 hover:text-white transition-all hover:scale-105" title="Email Us">
              <Mail className="w-4 h-4" />
            </a>

            <button onClick={() => onNavClick('faq')} className="p-2 bg-white border-[2px] border-black rounded-full text-slate-800 hover:bg-yellow-400 transition-all hover:scale-105" title="Schedule Call">
              <Calendar className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onNavClick('footer')} className="neo-btn neo-btn-primary text-xs tracking-wider py-2.5 px-5">
              Pitch Us
            </button>
            <button onClick={() => onNavClick('journey')} className="hidden sm:block neo-btn neo-badge font-sans text-xs tracking-wider py-2.5 px-5 bg-yellow-400 hover:bg-yellow-500">
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Hero Body Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col items-center text-center mt-8">
        {/* Top Badges / Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="neo-badge bg-blue-100 text-blue-600 font-extrabold text-xs tracking-[0.2em] px-4 py-1.5 animate-pulse">
            we scout • we build • we raise
          </span>
        </motion.div>

        {/* Giant Heading */}
        <div className="relative mb-8 max-w-5xl">
          {/* Floating Bubble Left */}
          <motion.div
            custom={{ r: -8, d: 5 }}
            variants={floatVariants}
            animate="animate"
            className="absolute -left-12 -top-12 hidden lg:block speech-bubble speech-bubble-left rotate-[-8deg] border-blue-600 shadow-[4px_4px_0px_#2563eb]"
          >
            Closed our pre-seed in 3 weeks thanks to VRaise scouts! 🚀
          </motion.div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-[#0f172a] leading-[0.95] tracking-tighter"
          >
            We Offer <br />
            <span className="bg-yellow-400 border-b-4 border-black px-2 inline-block transform rotate-1">JAW-DROPPING</span> <br />
            <span className="text-blue-600 font-extrabold relative">
              Scouting Network
            </span>
          </motion.h1>

          {/* Floating Bubble Right */}
          <motion.div
            custom={{ r: 6, d: 4.5 }}
            variants={floatVariants}
            animate="animate"
            className="absolute -right-16 -top-4 hidden lg:block speech-bubble speech-bubble-right rotate-[6deg] border-pink-500 shadow-[4px_4px_0px_#ec4899]"
          >
            The only scouts delivering actual off-market opportunities. 💯
          </motion.div>
        </div>

        {/* Sticker tags (tilted stickers) */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 max-w-3xl">
          <motion.div custom={{ r: -3, d: 3 }} variants={floatVariants} animate="animate" className="neo-badge bg-pink-500 text-white font-extrabold rotate-[-3deg] shadow-neo">
            Campus Discovery
          </motion.div>
          <motion.div custom={{ r: 2, d: 3.5 }} variants={floatVariants} animate="animate" className="neo-badge bg-blue-600 text-white font-extrabold rotate-[2deg] shadow-neo">
            IC Readiness
          </motion.div>
          <motion.div custom={{ r: -1, d: 2.8 }} variants={floatVariants} animate="animate" className="neo-badge bg-yellow-400 text-slate-900 font-extrabold rotate-[-1deg] shadow-neo">
            Investor Access
          </motion.div>
        </div>

        {/* Subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed mb-12 font-medium"
        >
          We source high-quality, off-market deal flow for venture funds across every sector and stage. We scout university networks worldwide to prepare founders properly before meeting investors.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button onClick={() => onNavClick('footer')} className="neo-btn neo-btn-primary text-sm px-8 py-4 font-bold flex items-center gap-2 group">
            PITCH US NOW
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => onNavClick('whatwedo')} className="neo-btn neo-btn-secondary text-sm px-8 py-4 font-bold">
            PARTNER WITH US
          </button>
        </motion.div>

        {/* Corridors Grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i, type: "spring" }}
              className={`p-6 border-[3px] border-black flex flex-col items-center text-center ${c.bg} ${c.shadow} hover:translate-y-[-4px] hover:shadow-neo-large transition-all`}
            >
              {c.svg}
              <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] mb-1">{c.title}</h3>
              <span className={`font-mono text-xs font-bold uppercase tracking-wider ${c.accent}`}>{c.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
