import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_LINES = [
  "INITIALIZING VRAISE SCOUTING ENGINE...",
  "ESTABLISHING SECURE CAMPUS CORRIDORS: Go8 • IVY LEAGUE • IITs · IIMs...",
  "SYNCING 100+ EMBEDDED CAMPUS SCOUTS...",
  "THESIS TARGET: PRE-SEED TO SERIES A DEAL FLOW...",
  "ORIGINATION PIPELINE SYNC COMPLETE (ANZ / INDIA / US corridors)...",
  "SYSTEM ONLINE. INITIALIZING INTERACTIVE INTERFACE..."
];

export default function Preloader({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < LOG_LINES.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, LOG_LINES[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 400); // speed of logs appearing
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 w-full h-full bg-[#0f172a] text-emerald-400 font-mono z-50 p-6 flex flex-col justify-between border-[8px] border-black"
      style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full pt-12">
        {/* Console Header */}
        <div className="flex items-center justify-between border-b-2 border-emerald-500/20 pb-4 mb-4 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-black inline-block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-black inline-block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-black inline-block"></span>
            <span className="text-xs text-emerald-500/60 font-bold ml-2">vraise_terminal.sh</span>
          </div>
          <span className="text-xs font-bold text-emerald-500/60">EST. 2026</span>
        </div>

        {/* Console logs */}
        <div className="flex flex-col gap-2 select-none">
          {logs.map((log, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              key={index}
              className="text-xs sm:text-sm leading-relaxed"
            >
              <span className="text-emerald-500 font-bold mr-2">&gt;&gt;</span>
              {log}
            </motion.div>
          ))}
          {currentLine < LOG_LINES.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-xs sm:text-sm text-emerald-300 font-bold"
            >
              &gt;&gt; █
            </motion.div>
          )}
        </div>
      </div>

      <div className="text-center text-[10px] text-emerald-500/40 select-none pb-4 border-t border-emerald-500/10 pt-4">
        © 2026 VRAISE VENTURES • DISCREET DEAL ORIGINATION SYSTEMS
      </div>
    </motion.div>
  );
}
