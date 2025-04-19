
import React from "react";
import { Link } from "react-router-dom";
import SkinvaultLogo from "./SkinvaultLogo";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className={`border-t bg-card ${isMobile ? 'pb-16' : ''}`}>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-4">
            <SkinvaultLogo />
            <p className="text-sm text-muted-foreground max-w-xs">
              The premier marketplace for Steam trading cards and skins, powered by Solana.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/skins" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Skins
                </Link>
              </li>
              <li>
                <Link to="/cards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Trading Cards
                </Link>
              </li>
              <li>
                <Link to="/customization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Customization Items
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/RahulSingh38128" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://solana.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Solana
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} SolTradeX. All rights reserved. <br className="md:hidden" />
            Not affiliated with Valve Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
