import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Team = () => {
  const founder = {
    name: "Krish Melwani",
    role: "Founder & CEO",
    image: "/krish.jpeg",
    message: `
At HireApex, we view recruitment as a responsibility rather than a transaction. Building the right team has a direct impact on an organization’s growth, culture, and long-term stability, and we take that responsibility seriously in every engagement. From the very start, HireApex was founded with the intention of creating a recruitment firm that businesses can depend on for consistency, transparency, and quality hiring outcomes.

Our approach is rooted in understanding. Before any search begins, we invest time in learning about our clients’ business objectives, team structures, and role expectations. This allows us to move beyond resumes and focus on meaningful matches that align skills, experience, and cultural fit. We follow structured recruitment processes, maintain clear communication, and uphold ethical hiring standards to ensure every placement adds measurable value.

Equally important to us is the experience we create for candidates. Professional conduct, honest communication, and respect are non-negotiable at HireApex. We believe that a fair and transparent hiring experience strengthens employer branding and leads to better retention and performance.

Our team plays a central role in delivering this vision. At HireApex, we foster a culture of accountability, ownership, and continuous improvement. Each team member is encouraged to work with integrity, maintain high professional standards, and take pride in delivering dependable results for our clients. Collaboration and learning are key parts of how we grow together as an organization.

As HireApex continues to expand, our commitment remains unchanged. We aim to build long-term partnerships with businesses by serving as a reliable recruitment partner, supporting their hiring needs today while contributing to their success in the future.
    `,
  };

  return (
    <div className="pt-20">
      <ScrollAnimations />

      {/* Founder Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center gradient-text">
              Meet Our Founder
            </h1>

            <Card className="glass">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-[1.2fr_auto_2fr] gap-10 items-center">
                  
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm md:max-w-md">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-[420px] md:h-[480px] object-cover rounded-3xl shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-[4px] self-stretch bg-gradient-to-b from-purple-500/30 via-purple-500/70 to-purple-500/30 rounded-full" />

                  {/* Message */}
                  <div>
                    <h2 className="text-3xl font-bold gradient-text mb-2">
                      {founder.name}
                    </h2>
                    <p className="text-primary font-medium mb-6">
                      {founder.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {founder.message.trim()}
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" />
      </section>

      {/* Statistics */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">35+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-muted-foreground">
                Years Combined Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">
                10 AM – 6 PM
              </div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
