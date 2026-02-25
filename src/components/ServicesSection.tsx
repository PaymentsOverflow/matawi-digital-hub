import {
  Code2,
  Globe,
  Monitor,
  Wrench,
  HardDrive,
  Network,
} from "lucide-react";

/**
 * ServicesSection — Material-style grid of 6 core service cards.
 * Uses flat design with clean icons and generous spacing.
 */

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. From web apps to enterprise systems, we build scalable software that drives growth.",
  },
  {
    icon: Globe,
    title: "Websites",
    description:
      "Professional, responsive websites designed to convert visitors into customers. SEO-optimized and blazing fast across all devices.",
  },
  {
    icon: Monitor,
    title: "IT Supplies",
    description:
      "Quality hardware, peripherals, and IT equipment sourced from trusted global brands. Competitive pricing with reliable delivery across Kenya.",
  },
  {
    icon: Wrench,
    title: "IT Maintenance",
    description:
      "Proactive IT maintenance and support to keep your systems running at peak performance. Minimize downtime with our expert managed services.",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    description:
      "Enterprise-grade backup solutions and disaster recovery plans. Protect your critical business data with automated, secure backups.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "End-to-end networking solutions including LAN/WAN setup, Wi-Fi optimization, VPN configuration, and network security for businesses of all sizes.",
  },
];

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
          {services.map((service, index) => (
            <div
              key={service.title}
              className="mat-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon
                  size={24}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
