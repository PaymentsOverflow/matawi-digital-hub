import { Link } from "react-router-dom";
import { trackCTA, trackButtonClick } from "@/services/analytics";

/**
 * HeroSection — Centered bold hero with a strong value proposition.
 */
const HeroSection = () => {
  const handleGetStarted = () => {
    trackCTA("Get Started", "primary-button", "Hero Section");
    trackButtonClick("Get Started", "Hero CTA");
  };

  const handleOurServices = () => {
    trackCTA("Our Services", "secondary-button", "Hero Section");
    trackButtonClick("Our Services", "Hero CTA");
  };
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Eyebrow */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            IT Infrastructure &amp; Digital Solutions
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Transform Your Business With{" "}
            <span className="text-primary">Modern Technology</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Matawi Digital delivers end-to-end IT infrastructure, software development, 
            and digital marketing solutions for businesses across Kenya. From Nairobi to 
            country-wide — we build the technology backbone your business needs to thrive.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" onClick={handleGetStarted} className="btn-primary">
              Get Started
            </Link>
            <Link to="/services" onClick={handleOurServices} className="btn-outline-primary">
              Our Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">6+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Core Services</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">Kenya</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Country-wide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
