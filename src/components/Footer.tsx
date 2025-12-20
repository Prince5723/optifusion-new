import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../assets/hireapex-logo-removebg-preview.png";

export const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="">
              <img
                src={logo}
                alt="HireApex"
                className="w-64 md:w-72 lg:w-80"
              />
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Transforming workforce management through AI-powered HR solutions.
              We connect exceptional talent with forward-thinking companies.
            </p>

            <div className="space-y-4 text-base md:text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  267 B Sindhi Colony, Raja Park, Jaipur, Rajasthan 302004
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+91 9928610677</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  business@hireapex.in
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 gradient-text">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base md:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 gradient-text">
              Stay Updated
            </h3>

            <p className="text-muted-foreground text-base md:text-lg mb-6">
              Get the latest HR trends and insights delivered to your inbox.
            </p>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass text-base md:text-lg h-12"
              />
              <Button className="w-full btn-primary text-base md:text-lg h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-10 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground text-base md:text-lg">
              © 2025 HireApex. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                variant="outline"
                className="w-11 h-11 p-0 rounded-full btn-glass"
              >
                <a
                  href="https://www.linkedin.com/company/HireApex-technologiess/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="w-11 h-11 p-0 rounded-full btn-glass"
              >
                <a
                  href="https://www.instagram.com/HireApextechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-8 text-base md:text-lg">
              <Link
                to="/privacypolicy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/termsofservice"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
