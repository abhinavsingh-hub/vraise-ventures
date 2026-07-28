import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import MarqueeDivider from './components/MarqueeDivider';
import WhatWeDo from './components/WhatWeDo';
import Journey from './components/Journey';
import NetworkMap from './components/NetworkMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Custom cursor movement logic for desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Quick navigation scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Intro Pre-loader CLI screen */}
      <AnimatePresence>
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative w-full min-h-screen selection:bg-yellow-400 selection:text-black">
          
          {/* Neobrutalist Custom Cursor (Desktop only) */}
          <div 
            className="custom-cursor" 
            style={{ 
              left: `${mousePos.x}px`, 
              top: `${mousePos.y}px` 
            }}
          />

          {/* Main Website Sections */}
          <Hero onNavClick={scrollToSection} />
          
          <div className="h-12 w-full" />
          <Partners />
          
          <div className="h-12 w-full" />
          <About />
          
          <div className="h-16 w-full" />
          <MarqueeDivider />
          
          <div className="h-16 w-full" />
          <WhatWeDo />
          
          <div className="h-12 w-full" />
          <Journey />
          
          <div className="h-12 w-full" />
          <NetworkMap />
          
          <div className="h-12 w-full" />
          <FAQ />
          
          <div className="h-16 w-full" />
          <Footer onNavClick={scrollToSection} />
          
        </div>
      )}
    </>
  );
}
