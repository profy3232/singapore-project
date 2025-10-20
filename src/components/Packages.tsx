import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Basic Carpentry Package",
      price: "$3,500",
      description: "Ideal for affordable carpentry Singapore",
      popular: false,
      features: [
        "Single room carpentry works",
        "Standard laminate finish",
        "Basic wardrobe design",
        "Functional storage solutions",
        "Quality hardware fittings",
        "1-year warranty"
      ]
    },
    {
      name: "Standard Carpentry Package",
      price: "$8,000",
      description: "Our popular carpentry renovation package",
      popular: true,
      features: [
        "2-3 rooms carpentry works",
        "Premium laminate selection",
        "Custom design consultation",
        "Built-in wardrobes",
        "TV console or study table",
        "Soft-close hinges and runners",
        "2-year warranty"
      ]
    },
    {
      name: "Premium Carpentry Package",
      price: "$20,000",
      description: "For complete home transformation",
      popular: false,
      features: [
        "Whole house carpentry works",
        "Designer laminate & veneer options",
        "Full 3D design visualization",
        "All bedroom wardrobes",
        "Kitchen cabinet works",
        "Living room carpentry",
        "Premium hardware (Blum/Hettich)",
        "Lighting integration",
        "3-year warranty"
      ]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/6580638349", "_blank");
  };

  return (
    <section id="packages" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Carpentry Packages Singapore
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your needs or request a custom quote
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'border-primary border-2 shadow-lg' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">starting from</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Solutions */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-dashed">
          <CardHeader>
            <CardTitle className="text-2xl">Custom Carpentry Solutions</CardTitle>
            <CardDescription className="text-base">
              Need something specific? We create tailored solutions for unique requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Tailored to your specific needs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Unlimited design revisions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Mix of materials available</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>Commercial projects welcome</span>
              </li>
            </ul>
            <Button onClick={handleWhatsApp} size="lg" variant="hero">
              <MessageCircle className="w-5 h-5" />
              Get Your Custom Quote Today
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Packages;
