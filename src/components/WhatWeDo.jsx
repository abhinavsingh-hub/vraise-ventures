import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileText, Network, Lightbulb } from 'lucide-react';

export default function WhatWeDo() {
  const pillars = [
    {
      title: "Early Discovery",
      desc: "We identify founders before traditional fundraising begins.",
      icon: <Compass className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50",
      accent: "border-blue-600",
      shadow: "hover:shadow-[8px_8px_0px_#2563eb]"
    },
    {
      title: "Curated Quality",
      desc: "Every opportunity is carefully screened before reaching investors.",
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-50",
      accent: "border-pink-500",
      shadow: "hover:shadow-[8px_8px_0px_#ec4899]"
    },
    {
      title: "Global Network",
      desc: "Our scout community spans leading universities and startup ecosystems.",
      icon: <Network className="w-8 h-8 text-yellow-600" />,
      bg: "bg-yellow-50",
      accent: "border-yellow-500",
      shadow: "hover:shadow-[8px_8px_0px_#eab308]"
    },
    {
      title: "Strategic Introductions",
      desc: "We prioritize long-term alignment over transactional deal flow.",
      icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50",
      accent: "border-emerald-500",
      shadow: "hover:shadow-[8px_8px_0px_#10b981]"
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="whatwedo">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="neo-badge bg-[#ec4899] text-white font-extrabold text-xs">
              WHY VRAISE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter mb-6">
            Built for Institutional-Quality Venture Discovery.
          </h2>
        </div>

        {/* Pillars Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * i, type: "spring" }}
              className={`neo-card p-6 flex flex-col justify-between h-[280px] ${s.bg} border-[3px] border-black ${s.shadow} ${s.accent} group transition-all`}
            >
              {/* Icon widget */}
              <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0px_#000] transition-all">
                {s.icon}
              </div>

              {/* Text info */}
              <div className="mt-6 flex-grow flex flex-col justify-end">
                <h3 className="text-xl font-black text-[#0f172a] mb-2 uppercase leading-none font-display">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-tight font-semibold">
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
