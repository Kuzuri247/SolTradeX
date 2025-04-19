
import React from "react";
import { Link } from "react-router-dom";

const SkinvaultLogo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 font-bold text-xl md:text-2xl"
    >
      <span className="text-foreground">Sol<span className="text-[#2c4df6]">tradeX</span></span>
    </Link>
  );
};

export default SkinvaultLogo;
