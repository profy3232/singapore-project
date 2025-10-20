import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6580638349", "_blank");
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Carpentry SG</h3>
            <p className="mb-4 opacity-90">
              Leading carpentry contractors in Singapore. BizSafe 3 & BCA Certified professionals 
              delivering quality craftsmanship since 2000.
            </p>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                BS3
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
                BCA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 opacity-90">
              <li>Bedroom Carpentry</li>
              <li>Kitchen Carpentry</li>
              <li>Living Room Carpentry</li>
              <li>Office Carpentry</li>
              <li>Custom Built-ins</li>
              <li>Home Carpentry</li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Packages</h4>
            <ul className="space-y-2 opacity-90">
              <li>Basic Package - From $3,500</li>
              <li>Standard Package - From $8,000</li>
              <li>Premium Package - From $20,000</li>
              <li>Custom Solutions</li>
              <li>Commercial Projects</li>
              <li>Renovation Works</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="font-semibold">WhatsApp / Call</p>
                  <p className="opacity-90">+65 8063 8349</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="opacity-90">Island-wide Singapore</p>
                </div>
              </li>
              <li>
                <Button onClick={handleWhatsApp} className="w-full mt-2" variant="secondary">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us Now
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-90 text-sm">
              © {new Date().getFullYear()} Carpentry Contractors Singapore. All rights reserved.
            </p>
            <p className="opacity-90 text-sm">
              BizSafe 3 Certified | BCA Certified | Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
