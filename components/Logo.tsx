
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center justify-center overflow-hidden ${className}`}>
      <img 
        src="logo.png" 
        alt="FILLENIAL Digital Marketing Services logo" 
        className="site-logo"
      />
    </div>
  );
};

export default Logo;
