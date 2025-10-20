import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6580638349", "_blank");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95" />
      
      <div className="container relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
          Get your FREE consultation and quote today. Professional carpentry services 
          backed by BizSafe 3 & BCA certification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleWhatsApp}
            size="xl"
            className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg font-bold"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp +65 8063 8349
          </Button>
          <p className="text-sm opacity-90">
            Fast Response • Free Consultation • No Obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
