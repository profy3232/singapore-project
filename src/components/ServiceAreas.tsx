import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      region: "Central Region",
      locations: "Bishan, Toa Payoh, Ang Mo Kio, Serangoon, Hougang, Potong Pasir"
    },
    {
      region: "East Region",
      locations: "Tampines, Pasir Ris, Bedok, Simei, Changi, Tanah Merah, Kembangan"
    },
    {
      region: "West Region",
      locations: "Jurong East, Jurong West, Clementi, Bukit Batok, Bukit Panjang, Choa Chu Kang, Yew Tee"
    },
    {
      region: "North Region",
      locations: "Woodlands, Yishun, Sembawang, Admiralty, Marsiling, Kranji"
    },
    {
      region: "North-East Region",
      locations: "Sengkang, Punggol, Hougang"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Service Areas Across Singapore
          </h2>
          <p className="text-xl text-muted-foreground">
            We provide professional carpentry services island-wide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {areas.map((area, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {area.region}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.locations}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="text-center py-8">
            <p className="text-lg font-semibold mb-2">
              All Condominiums & Landed Properties across Singapore
            </p>
            <p className="text-muted-foreground">
              No matter where you are in Singapore, we're ready to serve you
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceAreas;
