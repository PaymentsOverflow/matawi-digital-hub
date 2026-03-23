import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import Schema from "@/components/Schema";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";
import { trackCTA } from "@/services/analytics";
import { Code2, Globe, Monitor, Wrench, HardDrive, Network, CheckCircle2, ArrowLeft } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Monitor, Wrench, HardDrive, Network,
};

/**
 * ServiceDetail — Individual service page with full description and features.
 */
const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Header />
        <main className="section-padding bg-background text-center">
          <div className="container-narrow space-y-6">
            <h1 className="text-3xl font-bold">Service Not Found</h1>
            <Link to="/services" className="btn-primary inline-block">
              Back to Services
            </Link>
          </div>
        </main>
        <MegaFooter />
      </>
    );
  }

  const Icon = iconMap[service.icon] || Code2;

  const serviceSchema = generateServiceSchema(
    service.title,
    service.shortDescription,
    `https://matawidigital.com/services/${service.slug}`,
    "Kenya"
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" },
    { name: "Services", url: "https://matawidigital.com/services" },
    { name: service.title, url: `https://matawidigital.com/services/${service.slug}` }
  ]);

  return (
    <>
      <Helmet>
        <title>{service.title} — Matawi Digital | IT Services in Kenya</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <Schema schema={serviceSchema} />
      <Schema schema={breadcrumbs} />

      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center space-y-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} /> All Services
            </Link>
            <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mx-auto">
              <Icon size={32} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold">{service.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {service.fullDescription}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-muted">
          <div className="container-narrow max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link 
                to="/contact" 
                onClick={() => trackCTA("Get a Quote", "primary-button", `Service: ${service.title}`)}
                className="btn-primary"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
};

export default ServiceDetail;
