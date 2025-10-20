import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Navigation = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6580638349", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-primary">
            Carpentry SG
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("packages")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button onClick={handleWhatsApp} size="sm" className="shadow-soft">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button onClick={handleWhatsApp} size="sm">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
