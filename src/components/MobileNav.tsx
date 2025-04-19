
import React from "react";
import { Link } from "react-router-dom";
import { Clock, LogIn, Package, Paintbrush, Wallet } from "lucide-react";
import SkinvaultLogo from "./SkinvaultLogo";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const MobileNav: React.FC = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <>
      {/* Top mini-navbar with logo and connect wallet */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <SkinvaultLogo />
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-[#8052F4] text-[#8052F4] hover:bg-[#8052F4]/10"
            >
              <Wallet className="h-5 w-5" />
            </Button>
            <Button 
              asChild 
              size="icon"
              className="bg-[#1b2838] hover:bg-[#2a3f5a] border border-[#2a3f5a]"
            >
              <Link to="/login">
                <LogIn className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Bottom navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t">
        <div className="grid grid-cols-4 h-16">
          <Link 
            to="/skins" 
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <Package className="h-5 w-5" />
            <span className="text-xs mt-1">Skins</span>
          </Link>
          
          <Link 
            to="/cards" 
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <Clock className="h-5 w-5" />
            <span className="text-xs mt-1">Cards</span>
          </Link>
          
          <Link 
            to="/customization" 
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <Paintbrush className="h-5 w-5" />
            <span className="text-xs mt-1">Custom</span>
          </Link>
          
          <Link 
            to="/login" 
            className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
          >
            <LogIn className="h-5 w-5" />
            <span className="text-xs mt-1">Login</span>
          </Link>
        </div>
      </nav>
      
      {/* Add padding to the bottom of the page to account for the navbar */}
      <div className="pb-16" />
    </>
  );
};

export default MobileNav;
