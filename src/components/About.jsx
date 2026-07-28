import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    {
      num: "100+",
      label: "Campus Scouts Global Reach",
      border: "border-blue-600",
      accentBg: "bg-blue-100",
      accentText: "text-blue-600",
      shadow: "shadow-[4px_4px_0px_#2563eb]"
    },
    {
      num: "5",
      label: "Continents Operating Worldwide",
      border: "border-pink-500",
      accentBg: "bg-pink-100",
      accentText: "text-pink-500",
      shadow: "shadow-[4px_4px_0px_#ec4899]"
    },
    {
      num: "ALL",
      label: "Sectors Scouting (Sector Agnostic)",
      border: "border-yellow-500",
      accentBg: "bg-yellow-100",
      accentText: "text-yellow-600",
      shadow: "shadow-[4px_4px_0px_#eab308]"
    },
    {
      num: "EARLY",
      label: "Pre-Seed to Series A Stage Focus",
      border: "border-emerald-500",
      accentBg: "bg-emerald-100",
      accentText: "text-emerald-600",
      shadow: "shadow-[4px_4px_0px_#10b981]"
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="about">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">
        
        {/* Row 1: Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div>
              <span className="neo-badge bg-yellow-400 text-[#0f172a] font-extrabold text-xs">
                About Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter">
              WE DON'T DO BORING COOKIE-CLUTTER PIPELINES, LIKE...EVER.
            </h2>
          </div>
          
          <div className="lg:col-span-6 lg:pl-8 flex flex-col gap-6 pt-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              VRaise operates very discreetly. Our scout network works entirely behind the scenes inside leading university campuses worldwide. 
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Most people never know where our scouts are located, ensuring our partner funds see exceptional founders first, see them off-market, and see them fully prepared to face an investment committee.
            </p>
            <div className="w-full h-2 bg-slate-900 border-2 border-black"></div>
          </div>
          
        </div>

        {/* Row 2: Stats cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`p-6 border-[3px] border-black flex flex-col justify-between h-44 sm:h-48 ${s.shadow} ${s.border} bg-white hover:translate-y-[-4px] hover:shadow-neo-large transition-all`}
            >
              <div className={`w-fit px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase ${s.accentBg} ${s.accentText} border-2 border-black`}>
                Metric
              </div>
              <div>
                <h4 className="text-3xl sm:text-5xl font-black uppercase leading-none text-[#0f172a] mb-2">
                  {s.num}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-bold uppercase leading-tight font-mono">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
