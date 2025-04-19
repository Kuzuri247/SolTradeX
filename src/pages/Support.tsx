import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileNav />
      
      <main className="flex-1 container py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Support Center
          </h1>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Need help with SolTradeX? Our support team is here to assist you with any questions or issues.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-[#7F00FF]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get help via email from our support team
              </p>
              <a href="mailto:support@skinvault.example" className="text-[#7F00FF] text-sm hover:underline">
                rs4515080@gmail.com
              </a>
            </div>
            
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-[#7F00FF]" />
              </div>
              <h3 className="text-lg font-medium mb-2">Discord Community</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join our Discord for community support
              </p>
              <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="text-[#7F00FF] text-sm hover:underline">
                Join Discord Server
              </a>
            </div>
            
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7F00FF] to-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-[#7F00FF]" />
              </div>
              <h3 className="text-lg font-medium mb-2">FAQ</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Browse our frequently asked questions
              </p>
              <a href="/faq" className="text-[#7F00FF] text-sm hover:underline">
                View FAQ
              </a>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your inquiry" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your issue or question in detail" 
                  rows={6}
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
