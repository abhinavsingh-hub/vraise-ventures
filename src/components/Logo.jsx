import React from 'react';

export default function Logo({ className = "h-12 sm:h-14 w-auto" }) {
  return (
    <div className="flex items-center select-none">
      <img 
        src="./public/assets/logo.png" 
        alt="VRaise Ventures Logo" 
        className={`${className} object-contain mix-blend-multiply`} 
      />
    </div>
  );
}
