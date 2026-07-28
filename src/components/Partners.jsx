import React from 'react';
import { motion } from 'framer-motion';

export default function Partners() {
  const funds = [
    { name: "TEN13", src: "/assets/ten13.png" },
    { name: "Pinery", src: "/assets/pinery.png" },
    { name: "Boardy", src: "/assets/boardy.png" },
    { name: "Level Up Ventures", src: "/assets/levelup.jpg" }
  ];

  return (
    <section className="w-full py-8 px-4 sm:px-8 bg-transparent" id="partners">
      <div className="max-w-6xl mx-auto px-6 py-10 border-[3px] border-black bg-white shadow-neo sm:p-10 relative flex flex-col items-center">
        <span className="neo-badge bg-[#ec4899] text-white font-extrabold text-[10px] tracking-wider mb-6">
          TRUSTED BY
        </span>
        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0f172a] mb-8 font-sans tracking-tight text-center">
          Some of Our Partner Funds & Syndicates
        </h3>
        
        {/* Logos Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-8">
          {funds.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className="p-4 border-2 border-black bg-white flex items-center justify-center h-20 sm:h-24 shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] transition-all overflow-hidden"
            >
              <img 
                src={f.src} 
                alt={f.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply" 
              />
            </motion.div>
          ))}
        </div>

        {/* Subtext below logos */}
        <p className="text-center text-slate-600 font-bold max-w-2xl text-xs sm:text-sm uppercase tracking-wide leading-relaxed font-mono mt-4">
          Building long-term relationships with venture capital firms, angel syndicates, and institutional investors across multiple markets.
        </p>
      </div>
    </section>
  );
}
