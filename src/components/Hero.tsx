import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-carpentry.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6580638349", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Certification Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">
              <Shield className="w-4 h-4 mr-2" />
              BizSafe 3 Certified
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">
              <Award className="w-4 h-4 mr-2" />
              BCA Certified
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Leading Carpentry Contractors{" "}
            <span className="text-primary">Singapore</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Premium Custom Carpentry Works for Your Home & Office. Expert Craftsmanship, 
            Competitive Pricing, 100% Satisfaction Guaranteed.
          </p>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl" 
            onClick={handleWhatsApp}
            className="text-lg font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us Now at +65 8063 8349
          </Button>

          {/* Key Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-semibold">20+ Years Experience</p>
                <p className="text-sm text-muted-foreground">Singapore carpentry industry</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-semibold">Licensed & Insured</p>
                <p className="text-sm text-muted-foreground">Complete protection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-semibold">Warranty Backed</p>
                <p className="text-sm text-muted-foreground">Long-term peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
