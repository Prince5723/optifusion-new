'use client'

import { useState } from "react";
import {
  Check,
  ArrowRight,
  Users,
  Brain,
  TrendingUp,
  Zap,
  Target
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Services = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F",
      "_blank"
    );
  };

  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions designed for businesses of all sizes.",
      features: [
        "Optimized candidate delivery timelines based on role complexity and hiring priority.",
        "Structured shortlisting aligned with your job requirements and ideal candidate profile.",
        "Multi-level screening to ensure candidate reliability, credibility, and role readiness.",
        "Cultural fit assessment focused on long-term retention and performance.",
        "Proactive sourcing focused on high-quality, role-specific candidate shortlists.",
        "Dedicated hiring manager support throughout the engagement.",
        "Complete interview coordination and onboarding assistance.",
        "Personalized WhatsApp and phone support across the entire hiring lifecycle.",
      ],
      details: {
        process:
          "Our talent acquisition team manages the full hiring lifecycle, aligning speed, quality, and cultural fit to deliver reliable candidates.",
        benefits: [
          "Faster time-to-hire with priority sourcing.",
          "High-quality shortlists through multi-level screening.",
          "Lower hiring costs than traditional agencies.",
          "Improved long-term retention.",
          "Scalable hiring aligned to your growth.",
          "Expertise across multiple domains.",
          "Consistent communication and transparency.",
        ],
      },
    },
  ];

const faqs = [
  {
    question: "What makes Optifusion Technologies different from other recruitment agencies?",
    answer:
      "We focus on quality over volume. Our process combines targeted sourcing, structured screening, culture-fit evaluation, and dedicated hiring support to ensure you receive relevant, job-ready candidates instead of random profiles."
  },
  {
    question: "How does your recruitment process help streamline hiring?",
    answer:
      "We manage sourcing, shortlisting, screening, and interview coordination, allowing your team to focus only on final selection while we handle the operational workload."
  },
  {
    question: "How quickly can I receive shortlisted candidates?",
    answer:
      "Timelines vary by role, but most profiles are shared within a short turnaround after understanding your requirements and hiring priority."
  },
  {
    question: "Do you evaluate candidates for cultural and role fit?",
    answer:
      "Yes. Every candidate is assessed for role alignment, communication, and cultural compatibility to support long-term hiring success."
  },
  {
    question: "Can you handle urgent or bulk hiring requirements?",
    answer:
      "Yes, we support both urgent closures and volume hiring with focused sourcing and dedicated coordination."
  },
  {
    question: "How can I get support during the recruitment process?",
    answer:
      "Our dedicated team is available via email, call, or WhatsApp to guide you at every step, ensuring smooth communication and timely support."
  }
];


  const processSteps = [
    { step: "01", title: "Discovery & Requirements", description: "Understand role, culture, and expectations.", icon: Target },
    { step: "02", title: "Strategy Development", description: "Custom hiring strategy and timelines.", icon: Brain },
    { step: "03", title: "Execution", description: "Sourcing, screening, and shortlisting.", icon: Zap },
    { step: "04", title: "Optimization", description: "Continuous improvement for best outcomes.", icon: TrendingUp },
  ];

  return (
    <div className="pt-20">
      <ScrollAnimations />

      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Services & Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive HR solutions designed to scale your hiring.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pt-24 pb-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="talent-acquisition" className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Users className="w-10 h-10 text-purple-500" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Talent Acquisition
              </h2>
            </div>

            {services.map((service, index) => (
              <TabsContent
                key={index}
                value={service.title.toLowerCase().replace(" ", "-")}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                  {/* Left Card */}
                  <Card className="glass hover-lift h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <service.icon className="w-16 h-16 text-primary mb-6" />

                      <h3 className="text-3xl font-bold mb-4 gradient-text">
                        {service.title}
                      </h3>

                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-3 text-lg flex-1 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <Check className="w-5 h-5 text-primary mr-3 mt-1" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="btn-primary w-full mt-auto">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Right Card */}
                  <Card className="glass hover-lift h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <h3 className="text-3xl font-bold mb-4 gradient-text">
                        How It Works
                      </h3>

                      <p className="text-lg text-muted-foreground mb-6">
                        {service.details.process}
                      </p>

                      <h4 className="text-xl font-semibold mb-4">
                        Key Benefits
                      </h4>

                      <div className="space-y-3 text-lg flex-1">
                        {service.details.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start">
                            <TrendingUp className="w-5 h-5 text-secondary mr-3 mt-1" />
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process */}
      <section className="pt-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Card key={i} className="glass hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get clear answers to common questions about our recruitment services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass px-6 rounded-lg"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Transform Your Hiring?
          </h2>
          <Button onClick={handleWhatsApp} size="lg" className="btn-primary">
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
