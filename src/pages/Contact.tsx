import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["267 b Sindhi colony raja park ",  "Jaipur Rajasthan 302004"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8233897557", , "Mon - Sat 10AM-6PM PST"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["Business@optifusiontechnologies.com", "Hr@optifusiontechnologies.com"],
      action: "Send Email"
      
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 10AM - 6PM",  "Sunday: Closed"],
      action: "Schedule Call"
    }
  ];

  const serviceOptions = [
    "Talent Acquisition",
    // "HR Consulting", 
    // "Workforce Analytics",
    // "Executive Search",
    // "HR Technology Implementation",
    // "Other"
  ];

  const budgetRanges = [
    "Under ₹10k",
    "₹10k - ₹30k",
    "₹30k - ₹50k",
    "₹50k+",
    "Let's discuss"
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring"
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
console.log(formData);


   const handleWhatsApp = ()=>{
    window.open("https://wa.me/919928610677", "_blank")
  }
  



  // send contact form data to googlesheet  

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/proxy`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    console.log(result);

    if (result.status === 'success' || response.ok) {
      alert('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } else {
      alert('⚠️ Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('❌ Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};






  return (
    <div className="pt-20">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ready to transform your HR processes? Let's discuss your needs 
              and find the perfect solution for your organization.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 " data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass hover-lift text-center" style={{ animationDelay: `${index * 0.1}s` }} data-aos="fade-up">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a
                    href={
                      info.action === "Call Now"
                        ? "tel:+918233897557"
                        : info.action === "Get Directions"
                        ? "https://maps.app.goo.gl/rw6Q6fgnP6zdXNpaA"
                        : info.action === "Send Email"
                        ? "mailto:Info@optifusiontechnologies.com?subject=Inquiry&body=Hello, I want to know more about your services."
                        : info.action === "Schedule Call"
                        ? "https://wa.me/919928610677?text=Hi!%20interested%20in%20exploring%20your%20talent%20acquisition%20services.%20I%20would%20like%20to%20book%20a%20free%20demo%20and%20see%20a%20few%20candidate%20profiles.%20Can%20we%20schedule%20it%3F"
                        : "#"
                    }
                    target={
                      info.action === "Get Directions" || info.action === "Schedule Call"
                        ? "_blank" // external web links → open new tab
                        : undefined // tel: and mailto: → open system app
                    }
                    rel="noopener noreferrer"
                  >
                    <Button   variant="outline" size="sm" className="btn-glass">
                    {info.action}
                  </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      {/* <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <Card className="glass max-w-4xl mx-auto text-center fade-in-up">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Check out our comprehensive FAQ section or reach out to our support team 
                for personalized assistance with your HR needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services#faq-section">
                <Button  size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                  View FAQ
                </Button>
                </Link>
                <Button onClick={handleWhatsApp} size="lg" className="btn-primary text-lg px-8 py-4">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;