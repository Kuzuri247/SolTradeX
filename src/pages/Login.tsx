
import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileNav />
      
      <main className="flex-1 container flex items-center justify-center py-8 md:py-16">
        <div className="max-w-md w-full bg-card border rounded-lg p-8 text-center">
          <div className="h-16 w-16 bg-[#2c4df6] rounded-full flex items-center justify-center mx-auto mb-6">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Login with Steam</h1>
          <p className="text-muted-foreground mb-8">
            Connect your Steam account to start trading on SolTradeX
          </p>
          
          <Button className="w-full bg-[#2c4df6] hover:bg-[#2a3f5a] border border-[#2a3f5a] gap-2">
            <LogIn className="h-5 w-5" />
            <span>Continue with Steam</span>
          </Button>
          
          <p className="mt-6 text-xs text-muted-foreground">
            By logging in, you agree to our Terms of Service and Privacy Policy.
            We do not store your Steam credentials.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
