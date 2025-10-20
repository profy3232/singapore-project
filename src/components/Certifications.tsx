import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const benefits = [
    "Peace of mind during carpentry works",
    "Professional and safe work practices",
    "Quality craftsmanship guaranteed",
    "Insurance coverage in place",
    "Reliable and trustworthy contractors",
    "Compliance with HDB/Condo regulations"
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why BizSafe 3 & BCA Certification Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your assurance of safety, quality, and professionalism
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-secondary/50">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>BizSafe 3 Certification Benefits</CardTitle>
              <CardDescription>Commitment to workplace safety excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Comprehensive risk management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Trained safety officers on-site</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Regular safety audits and inspections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Protection for workers and your property</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Compliance with MOM regulations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>BCA Certification Advantages</CardTitle>
              <CardDescription>Recognized by Building & Construction Authority</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Adherence to Singapore building standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Quality workmanship assurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Professional industry standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Legal compliance guaranteed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Qualified and skilled contractors</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-6 text-center">What This Means for You:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;
