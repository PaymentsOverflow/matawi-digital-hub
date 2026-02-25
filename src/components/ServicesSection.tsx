import { Link } from "react-router-dom";
import {
  Code2,
  Globe,
  Monitor,
  Wrench,
  HardDrive,
  Network,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Monitor, Wrench, HardDrive, Network,
};

/**
 * ServicesSection — Material-style grid of 6 core service cards on the home page.
 * Links to individual service pages.
 */
const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to empower businesses across Nairobi, Ngong, 
            Karen, Thika, Machakos, Kitengela, and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="mat-card group block text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <Icon
                    size={24}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
