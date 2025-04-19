
import React from "react";
import { Link } from "react-router-dom";

const SkinvaultLogo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 font-bold text-xl md:text-2xl"
    >
      <div className="relative w-8 h-8 md:w-9 md:h-9">
        <div className="absolute inset-0 bg-primary rounded-md rotate-45 transform origin-center"></div>
        <div className="absolute inset-1 bg-background rounded-sm rotate-45 transform origin-center flex items-center justify-center">
          <span className="text-primary font-bold text-xs md:text-sm">SX</span>
        </div>
      </div>
      <span className="text-foreground">Sol<span className="text-primary">tradeX</span></span>
    </Link>
  );
};

export default SkinvaultLogo;
