import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import PricingTable from "@/components/PricingTable";
import Certifications from "@/components/Certifications";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Packages />
      <Process />
      <PricingTable />
      <Certifications />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
