import React from 'react';

export default function About() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="about">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative">
        
        {/* Row: Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div>
              <span className="neo-badge bg-[#facc15] text-[#0f172a] font-extrabold text-xs">
                OUR INVESTMENT THESIS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-[#0f172a] leading-none tracking-tighter">
              Great Investments Begin Long Before the First Pitch.
            </h2>
          </div>
          
          {/* Right Column: Copy text */}
          <div className="lg:col-span-6 lg:pl-8 flex flex-col gap-6 pt-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-bold">
              The strongest companies are often built quietly—long before they appear on demo days or inbound fundraising pipelines.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              At VRaise, we believe early discovery creates better investment outcomes. Through a global network of scouts, structured evaluation, and curated introductions, we help exceptional founders and investors connect at the right time.
            </p>
            <div className="w-full h-2 bg-slate-900 border-2 border-black mt-2"></div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
