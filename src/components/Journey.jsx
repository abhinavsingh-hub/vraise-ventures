import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Network, Rocket } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    phase: "DISCOVER",
    title: "Discover",
    desc: "Exceptional founders identified through universities, startup ecosystems, operators, and research communities.",
    accent: "text-yellow-400"
  },
  {
    num: "02",
    phase: "VALIDATE",
    title: "Validate",
    desc: "Every opportunity undergoes structured screening, founder evaluation, and market assessment.",
    accent: "text-pink-500"
  },
  {
    num: "03",
    phase: "PREPARE",
    title: "Prepare",
    desc: "Institutional-quality pitch materials, fundraising strategy, financial models, and diligence preparation.",
    accent: "text-blue-500"
  },
  {
    num: "04",
    phase: "CONNECT",
    title: "Connect",
    desc: "Targeted introductions to investors whose thesis, sector, and stage align with the opportunity.",
    accent: "text-emerald-500"
  },
  {
    num: "05",
    phase: "RAISE",
    title: "Raise",
    desc: "Hands-on support throughout fundraising, diligence, negotiations, and successful round closure.",
    accent: "text-violet-500"
  }
];

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          root: null,
          // Trigger when the step is in the middle 40% of the screen
          rootMargin: "-30% 0px -40% 0px",
          threshold: 0.1
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(o => o.disconnect());
    };
  }, []);

  // Visual renderers for the sticky console based on active step
  const renderVisual = () => {
    switch (activeStep) {
      case 0:
        return (
          <motion.div
            key="step0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-yellow-400">STATUS: SCANNING_CAMPUSES</span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping"></span>
            </div>

            {/* Visual: Campus nodes grid */}
            <div className="flex-grow flex items-center justify-center relative">
              <div className="grid grid-cols-4 gap-6 relative p-4 bg-black/40 border border-white/10 rounded-lg">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="relative w-4 h-4 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                    {i === 6 && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Radar locator sweep */}
              <div className="absolute w-24 h-24 border-[2px] border-dashed border-yellow-400/40 rounded-full animate-[spin_8s_linear_infinite] flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_8px_#facc15] translate-x-12"></div>
              </div>
            </div>

            <div className="bg-black/50 border border-white/10 p-3 rounded font-mono text-[11px] text-yellow-400/80">
              [LOCATED] FOUNDER SEED NODE IN Go8 LAB // SYNC_SUCCESS
            </div>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-pink-500">STATUS: CORE_VETTING</span>
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
            </div>

            {/* Visual: Progress evaluation bars */}
            <div className="flex-grow flex flex-col justify-center gap-4 px-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>FOUNDER RESILIENCE</span>
                  <span className="text-pink-500">10 / 10</span>
                </div>
                <div className="h-3 bg-black border border-white/20 p-0.5">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} className="h-full bg-pink-500"></motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>MARKET POTENTIAL</span>
                  <span className="text-pink-500">9.2 / 10</span>
                </div>
                <div className="h-3 bg-black border border-white/20 p-0.5">
                  <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ duration: 0.8 }} className="h-full bg-pink-500"></motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span>TECHNICAL DEPTH</span>
                  <span className="text-pink-500">9.5 / 10</span>
                </div>
                <div className="h-3 bg-black border border-white/20 p-0.5">
                  <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 0.8 }} className="h-full bg-pink-500"></motion.div>
                </div>
              </div>
            </div>

            <div className="bg-pink-500 text-black border border-black font-extrabold text-center py-2 text-xs uppercase tracking-wider font-mono">
              ★ SCORING CRITERIA PASSED: STAGE 02 ACCESS ★
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-blue-400">STATUS: COMPILING_MATERIALS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            </div>

            {/* Visual: Compilation file decks */}
            <div className="flex-grow flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-44 h-28 border-2 border-black bg-white text-black p-3 shadow-[4px_4px_0px_#000] rotate-2"
              >
                <div className="border-b border-slate-300 pb-2 mb-2 flex justify-between items-center">
                  <span className="font-mono text-[10px] font-black uppercase text-blue-600">INVESTOR_DECK.pdf</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 bg-slate-900 rounded-sm w-4/5"></div>
                  <div className="h-2 bg-slate-400 rounded-sm w-3/5"></div>
                  <div className="h-2 bg-slate-300 rounded-sm w-5/6"></div>
                </div>
              </motion.div>

              {/* Overlapping model board */}
              <motion.div
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-40 h-24 border-2 border-black bg-yellow-400 text-black p-3 shadow-[4px_4px_0px_#000] -rotate-3 translate-y-6 translate-x-4"
              >
                <div className="border-b border-black pb-1 mb-1.5 flex justify-between items-center">
                  <span className="font-mono text-[9px] font-black uppercase">FINANCIAL_MODEL.xlsx</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[9px] font-mono font-bold">
                  <div className="bg-white/80 p-0.5 text-center">CAGR</div>
                  <div className="bg-white/80 p-0.5 text-center text-emerald-600">45%</div>
                  <div className="bg-white/80 p-0.5 text-center">ROI</div>
                </div>
              </motion.div>
            </div>

            <div className="bg-black/50 border border-white/10 p-3 rounded font-mono text-[11px] text-blue-400/80">
              DATAROOM_COMPILED // DECK_IC_VERIFIED
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-emerald-400">STATUS: MATCHING_PARTNERS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>

            {/* Visual: Routing match connections */}
            <div className="flex-grow flex items-center justify-center relative">
              <div className="flex items-center gap-12 relative">
                {/* Center Node */}
                <div className="w-12 h-12 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_15px_#10b981]">
                  <Database className="w-5 h-5 text-white" />
                </div>

                {/* Connecting arrows */}
                <div className="flex flex-col gap-6 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    <span className="border border-white/20 px-2 py-1 bg-black/40 rounded">TEN13</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    <span className="border border-white/20 px-2 py-1 bg-black/40 rounded">LEVEL UP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    <span className="border border-white/20 px-2 py-1 bg-black/40 rounded">PINERY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-white/10 p-3 rounded font-mono text-[11px] text-emerald-400/80">
              3 FUNDS DISCOVERED // STAGE THESIS ALIGNED
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-mono text-xs text-violet-400">STATUS: ROUND_CLOSE</span>
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-ping"></span>
            </div>

            {/* Visual: Rocket launch and signed term sheet */}
            <div className="flex-grow flex flex-col items-center justify-center relative gap-3">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-44 h-16 bg-white text-black border-2 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center font-bold px-3 text-center text-sm"
              >
                ★ TERM SHEET SIGNED ★
              </motion.div>

              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex items-center justify-center bg-violet-600 text-white w-14 h-14 rounded-full border-2 border-white shadow-[0_0_15px_#8b5cf6]"
              >
                <Rocket className="w-7 h-7" />
              </motion.div>
            </div>

            <div className="bg-violet-600 text-white border border-black font-extrabold text-center py-2 text-xs uppercase tracking-wider font-mono">
              🚀 ALL SYSTEMS GO // ROUND COMPLETED 🚀
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="journey">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">

        {/* Section Header */}
        <div className="mb-16">
          <span className="neo-badge bg-pink-500 text-white font-extrabold text-xs mb-3">
            OUR PROCESS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter">
            From Discovery to Capital.
          </h2>
        </div>

        {/* Story Layout Grid */}
        <div className="journey-sticky-container">

          {/* Left sticky visual dashboard panel */}
          <div className="sticky-visual-wrapper">
            <div className="w-full max-w-lg aspect-square lg:aspect-auto lg:h-[480px] bg-[#0f172a] border-[4px] border-black shadow-neo-large p-6 flex flex-col justify-between text-white relative">

              {/* Retro design grid marks */}
              <div className="absolute top-2 right-3 font-mono text-[9px] text-white/30 uppercase select-none">
                vraise_engine_console v2.06
              </div>
              <div className="absolute bottom-2 right-3 font-mono text-[9px] text-white/30 uppercase select-none">
                active_frame: {activeStep + 1} / 5
              </div>

              {/* Console window content */}
              <AnimatePresence mode="wait">
                {renderVisual()}
              </AnimatePresence>
            </div>
          </div>

          {/* Right scrolling steps narrative */}
          <div className="flex flex-col">
            {STEPS.map((s, i) => (
              <div
                key={i}
                ref={el => stepRefs.current[i] = el}
                className="min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center py-12 first:pt-0 last:pb-24 border-b border-dashed border-slate-300 last:border-b-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`font-mono text-3xl font-black ${s.accent}`}>
                    {s.num}
                  </span>
                  <span className="neo-badge text-xs font-mono font-bold py-1 px-3 bg-slate-900 text-white border-2 border-black shadow-none">
                    {s.phase}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-4 uppercase leading-none font-display">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                  {s.desc}
                </p>

                {/* Mobile version inline visual (only visible on small screen) */}
                <div className="mt-8 lg:hidden w-full aspect-video bg-[#0f172a] border-[3px] border-black shadow-neo p-4 flex flex-col justify-between text-white">
                  {i === 0 && (
                    <div className="flex flex-col h-full justify-between font-mono text-xs text-yellow-400">
                      <span>STATUS: SCANNING_CAMPUSES</span>
                      <div className="flex justify-center py-4">
                        <span className="w-4 h-4 rounded-full bg-yellow-400 animate-ping"></span>
                      </div>
                      <span>[SYNCED] CAMPUS CHANNELS ACTIVE</span>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="flex flex-col h-full justify-between font-mono text-xs text-pink-500">
                      <span>STATUS: EVALUATION_PASSED</span>
                      <div className="flex flex-col gap-2 py-4">
                        <div className="h-2 bg-pink-500 w-full"></div>
                        <div className="h-2 bg-pink-500 w-4/5"></div>
                      </div>
                      <span>VETTING SCORECARD SUBMITTED</span>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="flex flex-col h-full justify-between font-mono text-xs text-blue-400">
                      <span>STATUS: MATERIALS_VERIFIED</span>
                      <div className="py-2 border border-white/20 p-2 text-center text-[10px] bg-black/40">
                        INVESTOR_DECK.pdf [COMPILED]
                      </div>
                      <span>DATA ROOM COMPLETE</span>
                    </div>
                  )}
                  {i === 3 && (
                    <div className="flex flex-col h-full justify-between font-mono text-xs text-emerald-400">
                      <span>STATUS: INTROS_LAUNCHED</span>
                      <div className="flex justify-around py-2">
                        <span>TEN13</span>
                        <span>·</span>
                        <span>LEVEL UP</span>
                      </div>
                      <span>DIRECT ALLOCATION ALIGNMENT</span>
                    </div>
                  )}
                  {i === 4 && (
                    <div className="flex flex-col h-full justify-between font-mono text-xs text-violet-400">
                      <span>STATUS: DEAL_CLOSED</span>
                      <div className="text-center font-bold text-sm text-white bg-violet-600 border border-white py-1">
                        ★ ROUND COMPLETED ★
                      </div>
                      <span>SUCCESSFULLY FUNDED</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
