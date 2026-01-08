
import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Logo component that references the local 'Pictures/logo.png' file.
 * Includes a text fallback in case the image asset is missing.
 */
export default function Logo({ className = "h-16" }: LogoProps) {
  return (
    <div className={`flex items-center justify-start overflow-visible ${className}`}>
      <img 
        src="Pictures/logo.png" 
        alt="FILLENIAL Digital Agency Logo" 
        className="h-full w-full object-contain transition-all duration-500"
        loading="eager"
        onError={(e) => {
          // If the image fails to load, we show a clean text-based fallback
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.logo-fallback')) {
            const fallback = document.createElement('span');
            fallback.className = "logo-fallback text-2xl font-black text-jet tracking-tighter uppercase whitespace-nowrap";
            fallback.innerText = "FILLENIAL";
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
}
