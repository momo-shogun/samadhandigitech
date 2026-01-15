import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Our Team", href: "/#about" },
    { name: "Careers", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Media Production", href: "/services#media" },
    { name: "Digital Marketing", href: "/services#digital" },
    { name: "IT Services", href: "/services#it" },
    { name: "Studio Rental", href: "/services#studio" },
    { name: "Branding", href: "/services#branding" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/our-work" },
    { name: "FAQs", href: "/contact" },
    { name: "Privacy Policy", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/samadhandigitech", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/samadhandigitech", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/samadhandigitech", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/samadhan-digitech", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@samadhandigitech", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#000b8d] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Link to="/" className="flex items-center">
                <img 
                  src="/favicon-dark.png" 
                  alt="Samadhan Digitech Logo" 
                  className="h-32 w-32 md:h-40 md:w-40 object-contain"
                />
              </Link>
            </div>
            <p className="text-white/70 mb-5 max-w-sm text-sm">
              A leading creative-tech agency delivering solutions that shape industries
              and empower people since 2017.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Samadhan Tower 27/1/B Gokhale Marg, Lucknow – 226001</span>
              </div>
              <a
                href="tel:+917607655555"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 7607655555</span>
              </a>
              <a
                href="mailto:contact@samadhan.group"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@samadhan.group</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-white/70">
              © {new Date().getFullYear()} Samadhan Digitech. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/10 text-white/70 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
