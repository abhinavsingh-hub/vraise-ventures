import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Landmark } from 'lucide-react';

export default function WhoWeServe() {
  const targets = [
    {
      title: "Founders",
      desc: "Prepare for institutional fundraising through strategic guidance and curated investor introductions.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      accent: "border-blue-600",
      shadow: "shadow-[4px_4px_0px_#2563eb]"
    },
    {
      title: "Venture Capital Firms",
      desc: "Access qualified, thesis-aligned opportunities sourced before they become widely visible.",
      icon: <Briefcase className="w-6 h-6 text-pink-500" />,
      bg: "bg-pink-50",
      accent: "border-pink-500",
      shadow: "shadow-[4px_4px_0px_#ec4899]"
    },
    {
      title: "Angel Syndicates",
      desc: "Discover high-potential companies through a structured sourcing and screening process.",
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50",
      accent: "border-yellow-500",
      shadow: "shadow-[4px_4px_0px_#eab308]"
    },
    {
      title: "Family Offices",
      desc: "Gain exposure to carefully evaluated early-stage investment opportunities aligned with long-term capital deployment.",
      icon: <Landmark className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      accent: "border-emerald-500",
      shadow: "shadow-[4px_4px_0px_#10b981]"
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="whoweserve">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="neo-badge bg-[#3b82f6] text-white font-extrabold text-xs">
              WHO WE SERVE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter">
            Connecting Exceptional Founders With Long-Term Capital.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {targets.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-6 border-3 border-black bg-slate-50 flex gap-5 items-start shadow-[5px_5px_0px_#000] hover:shadow-[7px_7px_0px_#000] transition-all`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
                {t.icon}
              </div>

              {/* Text Area */}
              <div>
                <h3 className="text-2xl font-black text-[#0f172a] mb-2 uppercase leading-none font-display">
                  {t.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
