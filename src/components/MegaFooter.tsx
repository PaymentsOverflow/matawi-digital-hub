import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { trackButtonClick, trackExternalLinkClick } from "@/services/analytics";
import longLogo from "@/assets/matawi-digital-only-transparent-svg.svg";
import logo from "@/assets/matawi-digital-logo-transparent.png";

/**
 * MegaFooter — Full viewport-height footer with comprehensive company info,
 * quick links, newsletter signup, contact details, map placeholder,
 * and SEO-optimized location keywords for Kenya.
 */

const quickLinks = [
  { label: "Software Development", path: "/services/software-development" },
  { label: "Websites", path: "/services/websites" },
  { label: "IT Supplies", path: "/services/it-supplies" },
  { label: "IT Maintenance", path: "/services/it-maintenance" },
  { label: "Backup & Recovery", path: "/services/backup-and-recovery" },
  { label: "Networking", path: "/services/networking" },
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
      <div className="min-h-screen flex flex-col justify-between">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {/* Column 1: Company Info */}
              <div className="space-y-6 flex flex-col items-center">
                <div className="h-12" />
                <Link to="/">
                  <img src={logo} alt="Matawi Digital" className="h-12 md:h-20 w-auto brightness-100 hover:brightness-110 transition-all cursor-pointer" />
                </Link>
                <Link to="/">
                  <img src={longLogo} alt="Matawi Digital" className="h-16 md:h-24 w-auto brightness-100 hover:brightness-110 transition-all cursor-pointer" />
                </Link>
                {/* <p className="text-sm leading-relaxed opacity-70">
                  Matawi Digital is a leading IT infrastructure, management, and marketing company 
                  headquartered in Kenya. We deliver world-class technology solutions to businesses 
                  across the country, helping them thrive in the digital age.
                </p> */}
              </div>

              {/* Column 2: Quick Links - hidden on mobile */}
              <div className="hidden md:block space-y-6">
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

              {/* Column 3: Company - hidden on mobile */}
              <div className="hidden md:block space-y-6">
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
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Us</h3>
                <div className="space-y-4 flex flex-col md:items-start items-center">
                  <a
                    href="tel:+254112471292"
                    onClick={() => trackButtonClick("+254 112 471 292", "Footer Phone")}
                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Phone size={18} />
                    +254 112 471 292
                  </a>
                  <a
                    href="mailto:wave@matawidigital.co.ke"
                    className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Mail size={18} />
                    wave@matawidigital.co.ke
                  </a>
                    <a
                    href="https://maps.app.goo.gl/ywTQHmZaAe5ctTzq7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackExternalLinkClick("https://maps.app.goo.gl/ywTQHmZaAe5ctTzq7", "Google Maps")}
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
            <br />
            Your trusted technology partner for digital transformation.
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
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick("https://policies.google.com/privacy", "Google Privacy Policy")} className="text-xs opacity-40 hover:opacity-70 transition-opacity">Google Privacy Policy</a>
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick("https://policies.google.com/terms", "Google Terms of Service")} className="text-xs opacity-40 hover:opacity-70 transition-opacity">Google Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
