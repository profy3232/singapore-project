import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does carpentry work take in Singapore?",
      answer: "Typical timeline is 2-4 weeks depending on scope. A full house carpentry package usually takes 3-4 weeks from start to completion."
    },
    {
      question: "Do I need HDB approval for carpentry works?",
      answer: "Generally, carpentry works don't require HDB approval unless it involves hacking or structural changes. We can advise you accordingly based on your specific project requirements."
    },
    {
      question: "What's the difference between laminate and veneer?",
      answer: "Laminate is synthetic and more affordable, offering consistent patterns and high durability. Veneer is real wood with natural grain patterns, providing an authentic wood look. Both have their advantages depending on your budget and aesthetic preferences."
    },
    {
      question: "Can you match existing carpentry in my home?",
      answer: "Yes, we can match colors and designs to blend seamlessly with your existing carpentry works. We'll bring samples to ensure a perfect match."
    },
    {
      question: "Do you provide warranty for carpentry works?",
      answer: "Yes, we provide warranty coverage for workmanship and materials. Duration depends on the package selected: 1-year for Basic, 2-year for Standard, and 3-year for Premium packages."
    },
    {
      question: "Can I see the design before you start work?",
      answer: "Absolutely! We provide detailed 3D design renderings for your approval before commencing any work. This ensures you're completely satisfied with the design."
    },
    {
      question: "What happens if my carpentry gets damaged?",
      answer: "Contact us immediately. We'll assess the damage and repair it under warranty if applicable, or provide repair services at reasonable rates."
    },
    {
      question: "Do you handle carpentry disposal and hacking?",
      answer: "Yes, we provide complete carpentry removal and disposal services for renovation projects. We'll handle everything from hacking to cleanup."
    },
    {
      question: "Can you work around my schedule?",
      answer: "We're flexible and can arrange installation during times that minimize disruption to your routine. Weekend work can also be arranged if needed."
    },
    {
      question: "What payment terms do you offer?",
      answer: "Typically, we require a deposit to start (30%), progress payment (40%), and final payment upon completion (30%). Terms will be clearly stated in the quotation."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our carpentry services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
