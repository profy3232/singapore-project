import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Lim",
      location: "Punggol",
      rating: 5,
      text: "Excellent carpentry work! The team completed our whole house carpentry in 3 weeks. Professional, clean, and the quality is outstanding. Being BizSafe certified gave us extra confidence."
    },
    {
      name: "Jessica T.",
      location: "Bishan",
      rating: 5,
      text: "Best carpentry contractor in Singapore! From design to installation, everything was smooth. Our custom wardrobes are exactly what we wanted. Highly recommended!"
    },
    {
      name: "Rahman S.",
      location: "Jurong East",
      rating: 5,
      text: "Great value for money. Transparent pricing with no hidden costs. The carpenters were skilled and completed our kitchen cabinets beautifully. Very satisfied!"
    },
    {
      name: "Mrs. Chen",
      location: "Bedok",
      rating: 5,
      text: "Professional service from start to finish. The 3D design helped us visualize everything perfectly. Our condo carpentry looks amazing. Thank you!"
    },
    {
      name: "David Wong",
      location: "CBD",
      rating: 5,
      text: "Reliable and trustworthy carpentry contractor. They completed our office carpentry works on time and within budget. Will definitely use them again."
    },
    {
      name: "Sarah Lee",
      location: "Tampines",
      rating: 5,
      text: "Amazing craftsmanship! Our bedroom wardrobes are functional and beautiful. The team was respectful and cleaned up after themselves daily. Couldn't be happier!"
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear what our satisfied customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
