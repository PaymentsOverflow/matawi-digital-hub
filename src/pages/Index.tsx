import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import MegaFooter from "@/components/MegaFooter";
import AnnouncementBar from "@/components/AnnouncementBar";
import Schema from "@/components/Schema";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

/**
 * Home Page — Main landing page for Matawi Digital.
 */
const Index = () => {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" }
  ]);

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
      </Helmet>

      <Schema schema={orgSchema} />
      <Schema schema={breadcrumbs} />

      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
      </main>
      <MegaFooter />
    </>
  );
};

export default Index;
