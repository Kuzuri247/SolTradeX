
import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MobileNav />
      
      <main className="flex-1 container py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Find answers to common questions about SkinVault
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does SkinVault work?</AccordionTrigger>
              <AccordionContent>
                SkinVault is a third-party marketplace for Steam items. We connect buyers and sellers, but all transactions are processed through Steam's trading system for maximum security. We use Solana blockchain technology to handle platform fees with lower costs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Is SkinVault safe to use?</AccordionTrigger>
              <AccordionContent>
                Yes, SkinVault is designed with security as a top priority. We use Steam's official API for all item trading, and your Steam credentials are never shared with us. Our platform only facilitates matching buyers with sellers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the fees for using SkinVault?</AccordionTrigger>
              <AccordionContent>
                SkinVault charges a small platform fee for each transaction, which is lower than the Steam Community Market. Our fee structure is transparent and clearly displayed during the listing process.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I login to SkinVault?</AccordionTrigger>
              <AccordionContent>
                You can login to SkinVault using your Steam account. Click the "Login with Steam" button and you'll be redirected to Steam's official login page. We only receive basic profile information needed to provide our service.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Why does SkinVault use Solana?</AccordionTrigger>
              <AccordionContent>
                We use Solana blockchain technology for platform fees because it offers extremely fast transaction times and very low fees compared to other blockchain networks. This allows us to keep our platform fees lower than competitors.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>How do I sell my Steam items on SkinVault?</AccordionTrigger>
              <AccordionContent>
                After logging in with your Steam account, you can easily list your items for sale by setting a price and confirming the listing. Once a buyer is found, you'll be guided through the Steam trading process to complete the transaction securely.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger>What's the difference between SkinVault and Steam Market?</AccordionTrigger>
              <AccordionContent>
                Unlike the Steam Market, SkinVault offers lower fees, the ability to cash out to Solana, and supports a wider range of items including those not normally tradable on the Steam Market. We're focused on providing a better user experience with more features.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger>How do I get support if I have an issue?</AccordionTrigger>
              <AccordionContent>
                If you encounter any issues or have questions, you can contact our support team through the Support page. We're committed to providing quick and helpful assistance to resolve any problems you might face.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faq;
