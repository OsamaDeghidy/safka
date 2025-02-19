import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  supportLinks?: Array<{ title: string; href: string }>;
  companyLinks?: Array<{ title: string; href: string }>;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
}

const Footer = ({
  supportLinks = [
    { title: "Return Policy", href: "#" },
    { title: "Shipping Info", href: "#" },
    { title: "FAQ", href: "#" },
    { title: "Track Order", href: "#" },
  ],
  companyLinks = [
    { title: "About Us", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Terms & Conditions", href: "#" },
    { title: "Privacy Policy", href: "#" },
  ],
  contactInfo = {
    email: "support@techstore.sa",
    phone: "+966 12 345 6789",
    address: "Riyadh Business District, Saudi Arabia",
  },
}: FooterProps) => {
  return (
    <footer className="bg-white text-gray-600 py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-pink-600"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
