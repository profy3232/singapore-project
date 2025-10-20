import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, ChefHat, Sofa, Briefcase, Home, Hammer } from "lucide-react";
import bedroomImage from "@/assets/bedroom-carpentry.jpg";
import kitchenImage from "@/assets/kitchen-carpentry.jpg";
import livingImage from "@/assets/living-carpentry.jpg";

const Services = () => {
  const services = [
    {
      title: "Bedroom Carpentry Works",
      description: "Complete bedroom carpentry solutions",
      icon: Bed,
      image: bedroomImage,
      items: [
        "Built-in wardrobes & closets",
        "Walk-in wardrobe carpentry",
        "Sliding & hinged door wardrobes",
        "Custom headboard design",
        "Dressing table with mirror",
        "Storage bed frames"
      ]
    },
    {
      title: "Kitchen Carpentry",
      description: "Expert kitchen cabinet carpentry",
      icon: ChefHat,
      image: kitchenImage,
      items: [
        "Custom kitchen cabinets",
        "Kitchen island carpentry",
        "Kitchen countertop installation",
        "Open shelving design",
        "Pantry cabinet works",
        "Built-in appliance cabinets"
      ]
    },
    {
      title: "Living Room Carpentry",
      description: "Stylish living room carpentry works",
      icon: Sofa,
      image: livingImage,
      items: [
        "TV console carpentry",
        "Feature wall paneling",
        "Display cabinet design",
        "Entertainment unit",
        "Coffee table carpentry",
        "Wall-mounted shelving"
      ]
    },
    {
      title: "Office Carpentry Works",
      description: "Professional commercial carpentry",
      icon: Briefcase,
      items: [
        "Office partition carpentry",
        "Custom office desks",
        "Filing cabinet works",
        "Office shelving systems",
        "Reception counter carpentry",
        "Workstation carpentry"
      ]
    },
    {
      title: "Home Carpentry Services",
      description: "Complete home carpentry works",
      icon: Home,
      items: [
        "Carpentry for HDB flats",
        "Condo carpentry works",
        "Landed property carpentry",
        "Door and frame installation",
        "Flooring and skirting",
        "False ceiling carpentry"
      ]
    },
    {
      title: "Custom Built-In Carpentry",
      description: "Professional built-in carpentry works",
      icon: Hammer,
      items: [
        "Study tables & workstations",
        "Display cabinets & shelving",
        "Shoe cabinets & storage",
        "Platform bed with storage",
        "Bay window seating",
        "Custom design solutions"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Comprehensive Carpentry Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From custom built-ins to complete home transformations, we deliver excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {service.image && (
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
