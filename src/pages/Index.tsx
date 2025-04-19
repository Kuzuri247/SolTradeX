import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, CreditCard, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileNav />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5c0067] to-[#00d4ff] z-0"></div>
          <div className="container relative z-10 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              The Next-Gen <span className="text-[#00FFFF]">Steam</span> Marketplace
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
              Buy and sell Steam collectibles with lower fees, powered by Solana
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/skins">
                  <Package className="h-5 w-5" />
                  <span>Browse Skins</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/login">
                  <span>Login with Steam</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/skins" className="group">
              <div className="bg-card hover:bg-card/80 rounded-lg border p-6 h-full flex flex-col items-center text-center transition-colors">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] flex items-center justify-center mb-4 group-hover:bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] transition-colors">
                  <Package className="h-8 w-8 text-[#ffffff]" />
                </div>
                <h3 className="text-xl font-medium mb-2">Game Skins</h3>
                <p className="text-muted-foreground text-sm">
                  Browse thousands of CS:GO, Dota 2, and other game skins
                </p>
              </div>
            </Link>
            
            <Link to="/cards" className="group">
              <div className="bg-card hover:bg-card/80 rounded-lg border p-6 h-full flex flex-col items-center text-center transition-colors">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] flex items-center justify-center mb-4 group-hover:bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] transition-colors">
                  <CreditCard className="h-8 w-8 text-[#ffffff]" />
                </div>
                <h3 className="text-xl font-medium mb-2">Trading Cards</h3>
                <p className="text-muted-foreground text-sm">
                  Complete your badge collections with Steam trading cards
                </p>
              </div>
            </Link>
            
            <Link to="/customization" className="group">
              <div className="bg-card hover:bg-card/80 rounded-lg border p-6 h-full flex flex-col items-center text-center transition-colors">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] flex items-center justify-center mb-4 group-hover:bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] transition-colors">
                  <Palette className="h-8 w-8 text-[#ffffff]" />
                </div>
                <h3 className="text-xl font-medium mb-2">Customization</h3>
                <p className="text-muted-foreground text-sm">
                  Profile backgrounds, emoticons, and other customization items
                </p>
              </div>
            </Link>
          </div>
        </section>
        
        {/* Features */}
        <section className="bg-gradient-to-br from-secondary to-background py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose SolTradeX?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-[#5c0067] to-[#00d4ff] rounded-lg p-6">
                <div className="font-bold text-4xl text-[#2c4df6] mb-4">1</div>
                <h3 className="text-lg font-medium mb-2">Lower Fees</h3>
                <p className="text-muted-foreground text-sm">
                  Save money with our Solana-powered fee structure that's lower than Steam Market
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#5c0067] to-[#00d4ff] rounded-lg p-6">
                <div className="font-bold text-4xl text-[#2c4df6] mb-4">2</div>
                <h3 className="text-lg font-medium mb-2">Secure Trading</h3>
                <p className="text-muted-foreground text-sm">
                  All transactions are handled through official Steam APIs for maximum security
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#5c0067] to-[#00d4ff] rounded-lg p-6">
                <div className="font-bold text-4xl text-[#2c4df6] mb-4">3</div>
                <h3 className="text-lg font-medium mb-2">Fast Withdrawals</h3>
                <p className="text-muted-foreground text-sm">
                  Get your funds instantly with Solana's ultra-fast blockchain technology
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#5c0067] to-[#00d4ff] rounded-lg p-6">
                <div className="font-bold text-4xl text-[#2c4df6] mb-4">4</div>
                <h3 className="text-lg font-medium mb-2">User-Friendly</h3>
                <p className="text-muted-foreground text-sm">
                  Intuitive interface designed for both crypto natives and newcomers
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container py-16 md:py-24">
          <div className="bg-card rounded-lg border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join thousands of traders on the most innovative Steam marketplace.
              </p>
              <Button size="lg" className="gap-2">
                <span>Login with Steam</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
