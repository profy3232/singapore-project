import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Palette, Hammer, CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "FREE Consultation & Site Measurement",
      icon: Ruler,
      description: "Our professional carpenters will:",
      items: [
        "Visit your property for accurate measurements",
        "Understand your carpentry requirements",
        "Assess space and structural considerations",
        "Discuss design preferences and budget",
        "Provide expert recommendations"
      ]
    },
    {
      number: "02",
      title: "Custom Design & Quotation",
      icon: Palette,
      description: "Detailed planning and transparent pricing:",
      items: [
        "Detailed 3D design rendering",
        "Material and laminate selection",
        "Transparent, itemized quotation",
        "Hardware specifications",
        "Timeline estimation",
        "No hidden costs guarantee"
      ]
    },
    {
      number: "03",
      title: "Professional Carpentry Installation",
      icon: Hammer,
      description: "Expert craftsmanship in action:",
      items: [
        "Experienced carpentry team",
        "Quality wood and materials",
        "Precision craftsmanship",
        "Clean and organized worksite",
        "Minimal disruption to your routine",
        "Daily progress updates",
        "Strict safety protocols"
      ]
    },
    {
      number: "04",
      title: "Quality Inspection & Handover",
      icon: CheckCircle2,
      description: "Ensuring perfect results:",
      items: [
        "Thorough quality checking",
        "Final touch-ups if needed",
        "Professional cleaning",
        "Hardware adjustment",
        "Care and maintenance guide",
        "Warranty documentation"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Carpentry Work Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach ensuring quality results and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {/* Step Number */}
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-primary/5">
                  {step.number}
                </div>
                
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
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

export default Process;
