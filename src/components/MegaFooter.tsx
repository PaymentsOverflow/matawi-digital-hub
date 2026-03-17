import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/matawi-logo.png";

/**
 * MegaFooter — Full viewport-height footer with comprehensive company info,
 * quick links, newsletter signup, contact details, map placeholder,
 * and SEO-optimized location keywords for Kenya.
 */

const quickLinks = [
  { label: "Software Development", path: "/#services" },
  { label: "Websites", path: "/#services" },
  { label: "IT Supplies", path: "/#services" },
  { label: "IT Maintenance", path: "/#services" },
  { label: "Backup & Recovery", path: "/#services" },
  { label: "Networking", path: "/#services" },
];

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const MegaFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer content */}
      <div className="h-screen flex flex-col justify-between">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {/* Column 1: Company Info */}
              <div className="space-y-6">
                <img src={logo} alt="Matawi Digital" className="h-10 w-auto brightness-100" />
                <p className="text-sm leading-relaxed opacity-70">
                  Matawi Digital is a leading IT infrastructure, management, and marketing company 
                  headquartered in Kenya. We deliver world-class technology solutions to businesses 
                  across Nairobi, Ngong, Karen, Thika, Machakos, Kitengela, and country-wide.
                </p>
              </div>

              {/* Column 2: Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-wider">Services</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Company */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-wider">Company</h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Us</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+254112471292"
                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Phone size={18} />
                    +254 112 471 292
                  </a>
                  <a
                    href="mailto:info@matawidigital.com"
                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Mail size={18} />
                    info@matawidigital.com
                  </a>
                    <a
                    href="https://maps.app.goo.gl/ywTQHmZaAe5ctTzq7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                    <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Ngong, Nairobi, Kenya</span>
                    </a>
                </div>

              
              </div>
            </div>
          </div>
        </div>

        {/* SEO location keywords strip */}
        <div className="border-t border-primary-foreground/10">
          <div className="container-narrow px-6 md:px-12 lg:px-24 py-6">
            <p className="text-xs opacity-40 leading-relaxed text-center">
              Matawi Digital provides IT infrastructure solutions, software development, website design,
              IT supplies, maintenance, backup and recovery, and networking services across Kenya.
              Proudly serving businesses in Ngong, Nairobi, Karen, Thika, Machakos, Kitengela,
              and country-wide in Kenya. Your trusted technology partner for digital transformation.
            </p>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container-narrow px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs opacity-40">
              © 2022 - {new Date().getFullYear()} Matawi Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/about" className="text-xs opacity-40 hover:opacity-70 transition-opacity">Privacy Policy</Link>
              <Link to="/about" className="text-xs opacity-40 hover:opacity-70 transition-opacity">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
