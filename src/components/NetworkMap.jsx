import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Star, Shield, HelpCircle } from 'lucide-react';

const NODES = [
  {
    id: "funds",
    label: "Venture Funds",
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-blue-500 text-white border-blue-600 shadow-[3px_3px_0px_#1d4ed8]",
    angle: 0,
    list: ["TEN13", "Level Up Ventures", "Pinery", "Boardy Syndicate", "Skip Capital"]
  },
  {
    id: "angels",
    label: "Angel Syndicates",
    icon: <Star className="w-5 h-5" />,
    color: "bg-pink-500 text-white border-pink-600 shadow-[3px_3px_0px_#be185d]",
    angle: 60,
    list: ["Tech Angels ANZ", "Global Founders Network", "Indie Fund Syndicate"]
  },
  {
    id: "offices",
    label: "Family Offices",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-purple-500 text-white border-purple-600 shadow-[3px_3px_0px_#6b21a8]",
    angle: 120,
    list: ["Apex Capital Office", "Multi-Family Tech Trust", "Beacon Sourcing arm"]
  },
  {
    id: "incubators",
    label: "Incubators",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-yellow-400 text-black border-yellow-500 shadow-[3px_3px_0px_#c2410c]",
    angle: 180,
    list: ["University Startup Labs", "DeepTech Incubation Corridor", "Pre-seed Builder Hubs"]
  },
  {
    id: "accelerators",
    label: "Accelerators",
    icon: <Users className="w-5 h-5" />,
    color: "bg-emerald-500 text-white border-emerald-600 shadow-[3px_3px_0px_#047857]",
    angle: 240,
    list: ["Global scale programs", "Corridors Seed Accelerator", "NextGen Founders cohorts"]
  },
  {
    id: "mentors",
    label: "Mentors",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "bg-orange-500 text-white border-orange-600 shadow-[3px_3px_0px_#c2410c]",
    angle: 300,
    list: ["Ex-Founders Syndicate", "Tech VCs in residence", "Narrative Specialists"]
  }
];

export default function NetworkMap() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState({});
  const centerRef = useRef(null);

  // Re-calculate node coordinate offsets for SVG lines
  const updatePositions = () => {
    if (!containerRef.current || !centerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();
    
    const centerPoint = {
      x: (centerRect.left + centerRect.width / 2) - containerRect.left,
      y: (centerRect.top + centerRect.height / 2) - containerRect.top
    };

    const newPositions = { center: centerPoint };

    NODES.forEach(node => {
      const el = document.getElementById(`node-${node.id}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        newPositions[node.id] = {
          x: (rect.left + rect.width / 2) - containerRect.left,
          y: (rect.top + rect.height / 2) - containerRect.top
        };
      }
    });

    setPositions(newPositions);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener('resize', updatePositions);
    // Extra trigger after font/layout stabilizes
    const timer = setTimeout(updatePositions, 500);
    return () => {
      window.removeEventListener('resize', updatePositions);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-transparent" id="network">
      <div className="max-w-6xl mx-auto px-6 py-12 border-[3px] border-black bg-white shadow-neo sm:p-12 relative flex flex-col items-center">
        
        {/* Section Title */}
        <div className="text-center mb-10 max-w-4xl">
          <div className="mb-4">
            <span className="neo-badge bg-yellow-400 text-[#0f172a] font-extrabold text-xs">
              GLOBAL PRESENCE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0f172a] leading-none tracking-tighter mb-6">
            We are <span className="text-[#2857bdff]">embedded </span> Where <span className="text-[#2857bdff]">Innovation</span> Begins.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            VRaise’s distributed scout network operates across leading universities, research institutions, founder communities, and startup ecosystems—creating early access to exceptional entrepreneurs before they reach the broader market.
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="p-4 border-[2.5px] border-black bg-blue-50 shadow-[3px_3px_0px_#000] text-center">
              <h4 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-1">100+</h4>
              <p className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">Startups Reviewed</p>
            </div>
            <div className="p-4 border-[2.5px] border-black bg-pink-50 shadow-[3px_3px_0px_#000] text-center">
              <h4 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-1">5+</h4>
              <p className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">VC Partners</p>
            </div>
            <div className="p-4 border-[2.5px] border-black bg-yellow-50 shadow-[3px_3px_0px_#000] text-center">
              <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] mb-1 pt-3">APAC</h4>
              <p className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">Region</p>
            </div>
            <div className="p-4 border-[2.5px] border-black bg-emerald-50 shadow-[3px_3px_0px_#000] text-center">
              <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] mb-1.5 pt-1.5">PreSeed - Series A</h4>
              <p className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">Stage Focus</p>
            </div>
          </div>

          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Interactive Network Map (Hover nodes to trace)
          </p>
        </div>

        {/* Network Diagram Workspace */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-3xl h-[450px] sm:h-[500px] border-[3px] border-black bg-slate-50 overflow-hidden shadow-neo flex items-center justify-center"
          style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px'
          }}
        >
          {/* SVG Overlay for Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            {positions.center && NODES.map(node => {
              const nodePos = positions[node.id];
              if (!nodePos) return null;
              
              const isHovered = hoveredNode === node.id;
              
              return (
                <g key={node.id}>
                  {/* Outer glowing path on hover */}
                  {isHovered && (
                    <line
                      x1={positions.center.x}
                      y1={positions.center.y}
                      x2={nodePos.x}
                      y2={nodePos.y}
                      stroke="#facc15"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.6"
                      className="blur-[2px]"
                    />
                  )}
                  {/* Core connection line */}
                  <line
                    x1={positions.center.x}
                    y1={positions.center.y}
                    x2={nodePos.x}
                    y2={nodePos.y}
                    stroke={isHovered ? "#000000" : "url(#lineGrad)"}
                    strokeWidth={isHovered ? "3.5" : "2"}
                    strokeDasharray={isHovered ? "8, 4" : "none"}
                    style={{
                      strokeDashoffset: isHovered ? -120 : 0,
                      transition: "stroke-dashoffset 4s linear, stroke 0.2s ease, stroke-width 0.2s ease",
                      animation: isHovered ? "dash-flow 2s linear infinite" : "none"
                    }}
                  />
                </g>
              );
            })}
          </svg>
          
          <style>{`
            @keyframes dash-flow {
              to {
                stroke-dashoffset: -40;
              }
            }
          `}</style>

          {/* Draggable/Hoverable Surrounding Nodes */}
          {NODES.map(node => {
            const rad = (node.angle * Math.PI) / 180;
            // Desktop radius 180px, mobile radius 130px
            const distance = typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 180;
            const x = Math.cos(rad) * distance;
            const y = Math.sin(rad) * distance;
            const isHovered = hoveredNode === node.id;

            return (
              <div
                key={node.id}
                id={`node-${node.id}`}
                className={`absolute z-10 flex flex-col items-center justify-center p-3 border-2 border-black font-mono font-bold text-[10px] sm:text-xs select-none rounded-lg cursor-pointer transition-all duration-300 ${node.color} ${
                  isHovered ? 'scale-110 -translate-y-1' : 'hover:scale-105'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${isHovered ? 1.1 : 1})`,
                }}
                onMouseEnter={() => {
                  setHoveredNode(node.id);
                  setTimeout(updatePositions, 50); // slight recalculation for safety
                }}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="mb-1 flex items-center justify-center">{node.icon}</div>
                <span>{node.label}</span>
              </div>
            );
          })}

          {/* Center FOUNDERS Node */}
          <div
            ref={centerRef}
            id="node-center"
            className="absolute z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3.5px] border-black bg-yellow-400 flex flex-col items-center justify-center text-center shadow-neo-large scale-95"
          >
            {/* Pulsing ring around Center */}
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-black animate-[spin_12s_linear_infinite]"></span>
            
            <span className="font-extrabold text-sm sm:text-base leading-none text-slate-900 uppercase font-display" style={{ fontFamily: '"Syne", sans-serif' }}>
              FOUNDERS
            </span>
            <span className="font-bold text-[8px] tracking-[0.1em] text-slate-700 font-mono mt-1">
              SCOUT NETWORK
            </span>
          </div>

          {/* Floating node overlay cards (Tooltip details) */}
          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute bottom-4 left-4 z-30 p-4 border-[3px] border-black bg-white shadow-neo max-w-[240px] select-none pointer-events-none"
              >
                <h4 className="font-black text-xs uppercase text-[#0f172a] border-b-2 border-black pb-1.5 mb-2 font-mono flex items-center gap-1.5">
                  {NODES.find(n => n.id === hoveredNode).icon}
                  {NODES.find(n => n.id === hoveredNode).label}
                </h4>
                <ul className="flex flex-col gap-1 text-[10px] font-semibold text-slate-600 list-disc pl-3.5">
                  {NODES.find(n => n.id === hoveredNode).list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute top-3 left-4 font-mono text-[9px] text-[#0f172a]/50 select-none">
            &lt; INTERACTIVE MAPPING CHANNEL &gt;
          </div>
        </div>

      </div>
    </section>
  );
}
