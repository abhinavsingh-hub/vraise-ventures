import React from 'react';

export default function MarqueeDivider() {
  const words = [
    "WE SCOUT",
    "WE BUILD",
    "WE RAISE",
    "OFF-MARKET DEAL ORIGINATION",
    "100+ CAMPUS SCOUTS",
    "5 CONTINENTS",
    "PRE-SEED TO SERIES A",
    "DISCREET SCOUTING ENGINE"
  ];

  return (
    <div className="relative w-full h-44 overflow-hidden bg-slate-900 border-b-4 border-black select-none" style={{ isolation: 'isolate' }}>
      {/* Yellow Ribbon moving Left */}
      <div 
        className="absolute top-4 left-[-5%] w-[110%] marquee-container bg-yellow-400 border-y-[3px] border-black py-2.5 transform rotate-[2.5deg] z-10 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
      >
        <div className="marquee-content">
          {words.concat(words).map((w, idx) => (
            <span key={idx}>{w}</span>
          ))}
        </div>
      </div>

      {/* Pink Ribbon moving Right (reversed) */}
      <div 
        className="absolute top-10 left-[-5%] w-[110%] marquee-container marquee-reverse bg-pink-500 border-y-[3px] border-black py-2.5 transform rotate-[-2deg] z-20 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
      >
        <div className="marquee-content">
          {words.concat(words).map((w, idx) => (
            <span key={idx}>{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
