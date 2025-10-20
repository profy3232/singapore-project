import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const PricingTable = () => {
  const pricing = [
    {
      type: "Wardrobe Carpentry",
      basic: "$800 - $1,500 per meter",
      standard: "$1,500 - $2,500 per meter",
      premium: "$2,500 - $4,000 per meter"
    },
    {
      type: "Kitchen Cabinet Carpentry",
      basic: "$1,200 - $2,000 per meter",
      standard: "$2,000 - $3,500 per meter",
      premium: "$3,500 - $6,000 per meter"
    },
    {
      type: "TV Console Carpentry",
      basic: "$800 - $1,500",
      standard: "$1,500 - $3,000",
      premium: "$3,000 - $6,000"
    },
    {
      type: "Study Table Carpentry",
      basic: "$600 - $1,200",
      standard: "$1,200 - $2,500",
      premium: "$2,500 - $4,500"
    }
  ];

  const factors = [
    "Size and dimensions",
    "Material selection (laminate/veneer)",
    "Design complexity",
    "Hardware quality (hinges, runners)",
    "Number of compartments",
    "Additional features (lighting, mirrors)",
    "Customization level"
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/6580638349", "_blank");
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Carpentry Cost Singapore
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for all carpentry works
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Average Carpentry Prices in Singapore</CardTitle>
            <CardDescription>
              Prices vary based on size, materials, design complexity, and hardware
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Type</TableHead>
                    <TableHead className="font-bold">Basic</TableHead>
                    <TableHead className="font-bold">Standard</TableHead>
                    <TableHead className="font-bold">Premium</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricing.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>{item.basic}</TableCell>
                      <TableCell>{item.standard}</TableCell>
                      <TableCell>{item.premium}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card>
            <CardHeader>
              <CardTitle>What Affects Carpentry Cost?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {factors.map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Get Accurate Pricing</CardTitle>
              <CardDescription className="text-base">
                Every project is unique. Contact us for a detailed, customized quote for your carpentry needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleWhatsApp} size="lg" variant="hero" className="w-full">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for FREE Quote
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Free consultation • No obligation • Fast response
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
