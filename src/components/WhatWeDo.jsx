import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Rocket, Network, FileText, Lightbulb } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      title: "Venture Scouting",
      desc: "Student scouts embedded across Go8, Ivy League, Russell Group, IITs, and IIMs campuses identify strong founders at idea and pre-seed stages—often before they appear in any standard VC deal pipeline.",
      icon: <Compass className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50",
      accent: "border-blue-600",
      shadow: "hover:shadow-[8px_8px_0px_#2563eb]"
    },
    {
      title: "Venture Readiness",
      desc: "We work directly with founders on narrative, metrics, and pitch materials until the company is genuinely ready to face an investment committee. Typically a few focused weeks of refinement.",
      icon: <Rocket className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-50",
      accent: "border-pink-500",
      shadow: "hover:shadow-[8px_8px_0px_#ec4899]"
    },
    {
      title: "Investor Access",
      desc: "Filtered, warm introductions to our partner funds, angel syndicates, and family offices across India, Australia, and the US, matched specifically to their thesis and stage.",
      icon: <Network className="w-8 h-8 text-yellow-600" />,
      bg: "bg-yellow-50",
      accent: "border-yellow-500",
      shadow: "hover:shadow-[8px_8px_0px_#eab308]"
    },
    {
      title: "Pitch & Diligence",
      desc: "Deck rewrites, financial models, data rooms, and diligence packs—compiled to the standard venture funds expect, not the standard first-time founders guess at.",
      icon: <FileText className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50",
      accent: "border-emerald-500",
      shadow: "hover:shadow-[8px_8px_0px_#10b981]"
    },
    {
      title: "Strategic Advisory",
      desc: "Ongoing guidance throughout the raise: advisory on round structuring, valuation caps, investor sequencing, and help navigating complex term sheet negotiations.",
      icon: <Lightbulb className="w-8 h-8 text-violet-600" />,
      bg: "bg-violet-50",
      accent: "border-violet-500",
      shadow: "hover:shadow-[8px_8px_0px_#8b5cf6]"
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="whatwedo">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="neo-badge bg-blue-600 text-white font-extrabold text-xs">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter mb-6">
            THE ORIGINATION ENGINE
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            We cover the crucial work between a promising concept and a completed funding round: sourcing, preparation, strategic matchmaking, and negotiation support.
          </p>
        </div>

        {/* Services Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * i, type: "spring" }}
              className={`neo-card p-8 flex flex-col justify-between h-[360px] ${s.bg} border-[3px] border-black ${s.shadow} ${s.accent} group transition-all`}
            >
              {/* Icon widget */}
              <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0px_#000] transition-all">
                {s.icon}
              </div>

              {/* Text info */}
              <div className="mt-6 flex-grow flex flex-col justify-end">
                <h3 className="text-2xl font-black text-[#0f172a] mb-3 uppercase leading-none font-display">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
