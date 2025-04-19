import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-fit flex flex-col">
      <Navbar />
      <MobileNav />

      <main className=" flex-1 container py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Welcome to SolTradeX! We dont promote any kind of account selling or
            trading. We only provide a platform for users to buy and sell items
            from the Steam market by using solana . All the transactions are
            handled by the Steam backend we just provide a platform for the
            potential customers with ccrypto to buy and sell through it.
            SolTradeX is not affiliated with Valve Corporation.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
