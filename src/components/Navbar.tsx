
import React from "react";
import { Link } from "react-router-dom";
import { Menu, LogIn, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkinvaultLogo from "./SkinvaultLogo";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return null; // Mobile nav is rendered separately
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <SkinvaultLogo />
          
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/skins" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skins
            </Link>
            <Link 
              to="/cards" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cards
            </Link>
            <Link 
              to="/customization" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Customization
            </Link>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            asChild 
            variant="outline" 
            className="gap-2 border-[#8052F4] text-[#8052F4] hover:bg-[#8052F4]/10"
          >
            <div>
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </div>
          </Button>

          <Button asChild className="gap-2 bg-[#1b2838] hover:bg-[#2a3f5a] border border-[#2a3f5a]">
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              <span>Login with Steam</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container py-4 flex flex-col gap-2">
            <Link 
              to="/skins" 
              className="px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skins
            </Link>
            <Link 
              to="/cards" 
              className="px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cards
            </Link>
            <Link 
              to="/customization" 
              className="px-2 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Customization
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
