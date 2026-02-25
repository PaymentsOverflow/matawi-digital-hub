import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MegaFooter from "@/components/MegaFooter";

/**
 * Home Page — Main landing page for Matawi Digital.
 * Includes hero, services, and mega footer with full SEO metadata.
 */
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Matawi Digital — IT Infrastructure & Digital Solutions in Kenya</title>
        <meta
          name="description"
          content="Matawi Digital provides IT infrastructure, software development, website design, IT supplies, maintenance, backup & recovery, and networking services across Nairobi, Ngong, Karen, Thika, Machakos, Kitengela, and country-wide in Kenya."
        />
        <meta property="og:title" content="Matawi Digital — IT Infrastructure & Digital Solutions in Kenya" />
        <meta property="og:description" content="End-to-end IT solutions for businesses across Kenya. Software development, websites, IT supplies, maintenance, backup, and networking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matawidigital.com" />
        <link rel="canonical" href="https://matawidigital.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Matawi Digital",
            description: "IT infrastructure, management, and marketing company based in Kenya.",
            url: "https://matawidigital.com",
            telephone: "+254700000000",
            email: "info@matawidigital.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ngong",
              addressRegion: "Nairobi",
              addressCountry: "KE",
            },
            areaServed: [
              "Ngong", "Nairobi", "Karen", "Thika", "Machakos", "Kitengela", "Kenya"
            ],
            serviceType: [
              "Software Development", "Website Design", "IT Supplies",
              "IT Maintenance", "Backup and Recovery", "Networking"
            ],
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <MegaFooter />
    </>
  );
};

export default Index;
