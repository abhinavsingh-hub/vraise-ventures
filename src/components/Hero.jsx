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
      title: "Early Discovery",
      sub: "Finding exceptional founders before traditional fundraising begins.",
      bg: "bg-blue-100",
      border: "border-blue-600",
      accent: "text-blue-600",
      shadow: "shadow-[6px_6px_0px_#2563eb]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <circle cx="45" cy="45" r="20" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <line x1="60" y1="60" x2="80" y2="80" stroke="#000" strokeWidth="4" strokeLinecap="round" />
          <circle cx="45" cy="45" r="8" fill="#2563eb" stroke="#000" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Institutional Standards",
      sub: "Every opportunity is screened before investor introductions.",
      bg: "bg-pink-100",
      border: "border-pink-500",
      accent: "text-pink-500",
      shadow: "shadow-[6px_6px_0px_#ec4899]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <path d="M 50,15 C 65,15 75,25 75,45 C 75,65 50,85 50,85 C 50,85 25,65 25,45 C 25,25 35,15 50,15 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <path d="M 40,48 L 47,55 L 62,38" fill="none" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Curated Deal Flow",
      sub: "Quality over quantity. Conviction over volume.",
      bg: "bg-yellow-100",
      border: "border-yellow-500",
      accent: "text-yellow-600",
      shadow: "shadow-[6px_6px_0px_#eab308]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <polygon points="20,25 80,25 60,55 60,80 40,80 40,55" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <polygon points="50,10 53,18 62,18 55,23 57,32 50,27 43,32 45,23 38,18 47,18" fill="#facc15" stroke="#000" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Global Network",
      sub: "Universities • Founders • Operators • Investors",
      bg: "bg-emerald-100",
      border: "border-emerald-500",
      accent: "text-emerald-600",
      shadow: "shadow-[6px_6px_0px_#10b981]",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4 filter drop-shadow-[2px_2px_0px_#000]">
          <circle cx="50" cy="50" r="30" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="50" cy="20" r="6" fill="#10b981" stroke="#000" strokeWidth="2" />
          <circle cx="50" cy="80" r="6" fill="#10b981" stroke="#000" strokeWidth="2" />
          <circle cx="20" cy="50" r="6" fill="#10b981" stroke="#000" strokeWidth="2" />
          <circle cx="80" cy="50" r="6" fill="#10b981" stroke="#000" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pb-12 pt-28 border-b-4 border-black bg-transparent" style={{ marginTop: '100px' }}>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b-[3px] border-black z-40 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />

          {/* Socials capsule navigation */}
          <div className="hidden md:flex items-center gap-2 bg-[#0f172a]/5 border-[2px] border-black rounded-full p-1.5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white border-[2px] border-black rounded-full text-slate-800 hover:bg-blue-600 hover:text-white transition-all hover:scale-105 flex items-center justify-center" title="LinkedIn">
              <svg className="w-7 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:team@vraiseventures.org" className="p-2 bg-white border-[2px] border-black rounded-full text-slate-800 hover:bg-pink-500 hover:text-white transition-all hover:scale-105" title="Email Us">
              <Mail className="w-7 h-4" />
            </a>

            <button onClick={() => onNavClick('faq')} className="p-2 bg-white border-[2px] border-black rounded-full text-slate-800 hover:bg-yellow-400 transition-all hover:scale-105" title="Schedule Call">
              <Calendar className="w-7 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onNavClick('footer')} className="neo-btn neo-btn-primary text-xs tracking-wider py-2.5 px-5">
              Pitch Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Body Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col items-center text-center relative" style={{ marginTop: '40px' }}>
        
        {/* Centered Logo in Hero */}
        <div className="absolute top-[-56px] left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <Logo className="h-18 sm:h-40 w-auto" />
        </div>

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
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-[#0f172a] leading-[0.95] tracking-tighter"
          >
            We Scout <br />
            <span className="bg-yellow-400 border-b-4 border-black px-2 inline-block transform rotate-1">We Build</span> <br />
            <span className="text-blue-600 font-extrabold relative">
              We Raise
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

        {/* Stacked Tilted Tags Tagline (Reference Image Format) */}
        <div className="flex flex-col items-center gap-3 mb-10 select-none scale-[0.8] sm:scale-95 md:scale-100">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="px-10 py-3 bg-[#3b82f6] border-[3.5px] border-black text-white font-black text-3xl sm:text-5xl uppercase tracking-wider shadow-[5px_5px_0px_#000] rotate-[1.5deg]"
          >
            WE SCOUT
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="px-10 py-3 bg-[#facc15] border-[3.5px] border-black text-[#0f172a] font-black text-3xl sm:text-5xl uppercase tracking-wider shadow-[5px_5px_0px_#000] rotate-[-1.2deg] -mt-2"
          >
            WE BUILD
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="px-10 py-3 bg-[#ec4899] border-[3.5px] border-black text-white font-black text-3xl sm:text-5xl uppercase tracking-wider shadow-[5px_5px_0px_#000] rotate-[2deg] -mt-2"
          >
            WE RAISE
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
              <h3 className="text-lg sm:text-xl font-black text-[#0f172a] mb-2">{c.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium font-sans leading-tight">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

