import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import { trackServiceClick } from "@/services/analytics";
import { Code2, Globe, Monitor, Wrench, HardDrive, Network, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Monitor, Wrench, HardDrive, Network,
};

/**
 * Services Page — Overview of all services with links to individual pages.
 */
const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services — Matawi Digital | IT Solutions in Kenya</title>
        <meta name="description" content="Explore Matawi Digital's IT services: software development, websites, IT supplies, maintenance, backup & recovery, and networking across Kenya." />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              What We Offer
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              Comprehensive IT Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From software development to networking infrastructure, we provide end-to-end 
              technology services for businesses across Nairobi, Ngong, Karen, Thika, and country-wide.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => {
                const Icon = iconMap[service.icon] || Code2;
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => trackServiceClick(service.title, service.slug)}
                    className="mat-card group block text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                      <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
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
      </main>
      <MegaFooter />
    </>
  );
};

export default Services;
