import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "What types of startups does VRaise work with?",
    a: "All of them. VRaise is sector-agnostic and stage-agnostic — our partner funds invest across every category and at every stage. What we filter for is the quality of the team and the clarity of the opportunity, not the label on the company."
  },
  {
    q: "How does venture readiness work?",
    a: "We work directly with the founding team on narrative, metrics, deck, model and data room until the company can withstand real investor diligence. Typically a few focused weeks, not months."
  },
  {
    q: "How do investor introductions happen?",
    a: "Through our scouting agreements with partner funds. When a company matches a fund's thesis and stage, we submit it directly to the partner or associate who owns that area."
  },
  {
    q: "Does VRaise invest directly?",
    a: "No. VRaise is a scouting and readiness firm. We source and prepare companies, then introduce them to the funds we partner with. Investment decisions sit entirely with those funds."
  },
  {
    q: "Can student founders apply?",
    a: "Yes. A significant share of our deal flow begins on campus, which is where our scout network sits. Student-founded companies go through exactly the same scouting and readiness process as any other."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="faq">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="neo-badge bg-pink-500 text-white font-extrabold text-xs">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter">
            GOT QUESTIONS?
          </h2>
        </div>

        {/* Accordions Container */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div 
                key={idx}
                className={`border-[3px] border-black transition-all duration-300 ${
                  isOpen ? 'bg-blue-50/80 shadow-[4px_4px_0px_#2563eb]' : 'bg-white hover:bg-slate-50 shadow-[4px_4px_0px_#000]'
                }`}
              >
                {/* Header row click area */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 select-none"
                >
                  <span className="font-extrabold tracking-tight uppercase leading-snug">
                    {faq.q}
                  </span>
                  
                  {/* Neobrutalist plus-minus rotator container */}
                  <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180 shadow-[1px_1px_0px_#000]' : 'bg-white text-slate-800 rotate-0 shadow-[2px_2px_0px_#000]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t-2 border-dashed border-black/20 text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
