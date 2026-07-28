import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onNavClick }) {
  const [copied, setCopied] = useState(false);
  const pitchBtnRef = useRef(null);
  const partnerBtnRef = useRef(null);
  const [pitchPos, setPitchPos] = useState({ x: 0, y: 0 });
  const [partnerPos, setPartnerPos] = useState({ x: 0, y: 0 });

  // Magnetic button hover logic
  const handleMouseMove = (e, btnRef, setPos) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic pull strength (offset max 12px)
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const resetPos = (setPos) => {
    setPos({ x: 0, y: 0 });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@vraiseventures.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#0f172a] text-white border-t-4 border-black pt-20 pb-8 px-4 sm:px-8 relative z-30" id="footer">
      
      {/* Dynamic Grid Background Overlay */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Row 1: Massive CTA Headings & Buttons */}
        <div className="flex flex-col items-center text-center pb-20 border-b border-white/10">
          <span className="neo-badge bg-yellow-400 text-black font-extrabold text-xs mb-6 shadow-none border-[2.5px] border-black">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white leading-none tracking-tighter max-w-4xl mb-12">
            READY TO ACCESS OFF-MARKET DEAL FLOW?
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {/* Magnetic PITCH US Button */}
            <motion.button
              ref={pitchBtnRef}
              animate={{ x: pitchPos.x, y: pitchPos.y }}
              onMouseMove={(e) => handleMouseMove(e, pitchBtnRef, setPitchPos)}
              onMouseLeave={() => resetPos(setPitchPos)}
              onClick={() => window.open('mailto:contact@vraiseventures.com')}
              className="neo-btn neo-btn-primary border-[3.5px] border-black text-sm px-10 py-5 font-black text-white hover:bg-blue-500 shadow-[6px_6px_0px_#000] active:translate-y-[4px] active:shadow-none transition-transform duration-75"
            >
              PITCH US
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </motion.button>

            {/* Magnetic PARTNER WITH US Button */}
            <motion.button
              ref={partnerBtnRef}
              animate={{ x: partnerPos.x, y: partnerPos.y }}
              onMouseMove={(e) => handleMouseMove(e, partnerBtnRef, setPartnerPos)}
              onMouseLeave={() => resetPos(setPartnerPos)}
              onClick={() => window.open('mailto:contact@vraiseventures.com')}
              className="neo-btn border-[3.5px] border-black text-sm px-10 py-5 font-black text-black bg-white hover:bg-pink-500 hover:text-white shadow-[6px_6px_0px_#000] active:translate-y-[4px] active:shadow-none transition-transform duration-75"
            >
              PARTNER WITH US
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>

          {/* Copyable email card */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full py-2 px-5 max-w-sm w-full justify-between">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-300">
              <Mail className="w-4 h-4 text-pink-500" />
              <span>contact@vraiseventures.com</span>
            </div>
            <button 
              onClick={copyEmail}
              className="p-1.5 bg-white/10 border border-white/20 hover:bg-white hover:text-[#0f172a] rounded-full transition-colors flex items-center justify-center cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Row 2: Sub-columns list navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 text-slate-400 font-mono text-xs">
          
          {/* Logo Description */}
          <div className="flex flex-col gap-4">
            <Logo showText={true} className="h-14 text-white" />
            <p className="font-sans text-sm text-slate-400 leading-relaxed font-medium mt-2">
              Bilateral early-stage deal origination firm discovering breakout teams across India, ANZ, and US corridors.
            </p>
          </div>

          {/* Navigation link col */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-white font-bold text-sm uppercase mb-1 tracking-wide font-sans">Navigation</h4>
            <button onClick={() => onNavClick('about')} className="text-left hover:text-yellow-400 transition-colors w-fit">About Us</button>
            <button onClick={() => onNavClick('whatwedo')} className="text-left hover:text-yellow-400 transition-colors w-fit">What We Do</button>
            <button onClick={() => onNavClick('journey')} className="text-left hover:text-yellow-400 transition-colors w-fit">Venture Journey</button>
            <button onClick={() => onNavClick('network')} className="text-left hover:text-yellow-400 transition-colors w-fit">Network</button>
          </div>

          {/* Deal pipeline link col */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-white font-bold text-sm uppercase mb-1 tracking-wide font-sans">Deal Pipeline</h4>
            <span>01 • Campus Discovery</span>
            <span>02 • Traction &amp; Team</span>
            <span>03 • IC Readiness</span>
            <span>04 • Investor Matching</span>
            <span>05 • Close &amp; Support</span>
          </div>

          {/* Scout Networks col */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-white font-bold text-sm uppercase mb-1 tracking-wide font-sans">Scout Networks</h4>
            <span>Group of Eight (Go8)</span>
            <span>Ivy League Corridor</span>
            <span>Russell Group Corridor</span>
            <span>IITs &amp; IIMs India</span>
            <span>Campus Incubators</span>
          </div>

        </div>

        {/* Row 3: Rights & Footer Tagline */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 VRaise Ventures. All rights reserved.</span>
          </div>
          <span className="uppercase tracking-widest text-[#00d2ff]">
            DISCREET UNIVERSITY DEAL ORIGINATION ENGINE
          </span>
        </div>

      </div>
    </footer>
  );
}
