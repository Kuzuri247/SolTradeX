import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const Skins = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileNav />
      
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Game Skins</h1>
        <p className="text-muted-foreground mb-8">
          Browse our collection of game skins. This page is under construction.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="bg-card rounded-lg border overflow-hidden">
              <div className="aspect-square bg-muted animate-pulse" />
              <div className="p-4">
                <div className="h-5 bg-muted rounded animate-pulse mb-2" />
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse mb-3" />
                <div className="h-6 bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Skins;
