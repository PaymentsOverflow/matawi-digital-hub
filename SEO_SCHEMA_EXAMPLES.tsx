/**
 * SEO Schema Implementation Examples
 * 
 * Copy these patterns to your pages to add rich snippets to search results
 */

// ============================================================================
// EXAMPLE 1: Homepage (Index.tsx) - Organization + Breadcrumb
// ============================================================================

import { Helmet } from "react-helmet-async";
import Schema from "@/components/Schema";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

export const IndexWithSchema = () => {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" }
  ]);

  return (
    <>
      <Helmet>
        <title>Matawi Digital — IT Infrastructure & Digital Solutions in Kenya</title>
        <meta name="description" content="..." />
      </Helmet>
      
      {/* Add these schema components */}
      <Schema schema={orgSchema} />
      <Schema schema={breadcrumbSchema} />
      
      {/* Rest of page content */}
    </>
  );
};

// ============================================================================
// EXAMPLE 2: Service Detail Page - Service + Breadcrumb
// ============================================================================

import { useParams } from "react-router-dom";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

export const ServiceDetailWithSchema = () => {
  const { slug } = useParams();
  
  // Example: Software Development service
  const serviceData = {
    "software-development": {
      name: "Software Development",
      description: "Custom software development solutions tailored for your business needs",
      url: "https://matawidigital.com/services/software-development"
    }
  };

  const service = serviceData[slug as keyof typeof serviceData];
  
  if (!service) return null;

  const serviceSchema = generateServiceSchema(
    service.name,
    service.description,
    service.url,
    "Kenya"
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" },
    { name: "Services", url: "https://matawidigital.com/services" },
    { name: service.name, url: service.url }
  ]);

  return (
    <>
      <Helmet>
        <title>{service.name} — Matawi Digital</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      {/* Add these schema components */}
      <Schema schema={serviceSchema} />
      <Schema schema={breadcrumbs} />
      
      {/* Rest of page content */}
    </>
  );
};

// ============================================================================
// EXAMPLE 3: Blog Post Page - Blog Post + Breadcrumb
// ============================================================================

import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

export const BlogPostWithSchema = ({ post }: any) => {
  const blogSchema = generateBlogPostSchema(
    post.title,
    post.excerpt,
    post.featuredImage || "https://matawidigital.com/default-image.jpg",
    post.publishedDate,
    post.lastModified || post.publishedDate,
    "Matawi Digital",
    `https://matawidigital.com/blog/${post.slug}`
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" },
    { name: "Blog", url: "https://matawidigital.com/blog" },
    { name: post.title, url: `https://matawidigital.com/blog/${post.slug}` }
  ]);

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:author" content="Matawi Digital" />
      </Helmet>
      
      {/* Add these schema components */}
      <Schema schema={blogSchema} />
      <Schema schema={breadcrumbs} />
      
      {/* Rest of page content */}
    </>
  );
};

// ============================================================================
// EXAMPLE 4: Services Listing Page - Multiple Schemas
// ============================================================================

import { generateServiceSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

export const ServicesWithSchema = () => {
  const services = [
    { name: "Software Development", slug: "software-development" },
    { name: "Websites", slug: "websites" },
    { name: "IT Supplies", slug: "it-supplies" },
    { name: "IT Maintenance", slug: "it-maintenance" },
    { name: "Backup & Recovery", slug: "backup-and-recovery" },
    { name: "Networking", slug: "networking" }
  ];

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" },
    { name: "Services", url: "https://matawidigital.com/services" }
  ]);

  return (
    <>
      <Helmet>
        <title>Services — Matawi Digital</title>
        <meta name="description" content="Our range of IT and digital services" />
      </Helmet>
      
      {/* Main breadcrumb for this page */}
      <Schema schema={breadcrumbs} />
      
      {/* Individual service schemas for each listed service */}
      {services.map(service => (
        <Schema 
          key={service.slug}
          schema={generateServiceSchema(
            service.name,
            `${service.name} solutions for your business`,
            `https://matawidigital.com/services/${service.slug}`,
            "Kenya"
          )}
        />
      ))}
      
      {/* Rest of page content */}
    </>
  );
};

// ============================================================================
// EXAMPLE 5: About Page - Organization + Local Business
// ============================================================================

import { generateOrganizationSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

export const AboutWithSchema = () => {
  const orgSchema = generateOrganizationSchema();
  const localBizSchema = generateLocalBusinessSchema();
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" },
    { name: "About", url: "https://matawidigital.com/about" }
  ]);

  return (
    <>
      <Helmet>
        <title>About Matawi Digital</title>
        <meta name="description" content="Learn about Matawi Digital's mission and values" />
      </Helmet>
      
      <Schema schema={orgSchema} />
      <Schema schema={localBizSchema} />
      <Schema schema={breadcrumbs} />
      
      {/* Rest of page content */}
    </>
  );
};

// ============================================================================
// EXAMPLE 6: Contact Page - Local Business + Organization
// ============================================================================

import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

export const ContactWithSchema = () => {
  const localBizSchema = generateLocalBusinessSchema();
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://matawidigital.com" },
    { name: "Contact", url: "https://matawidigital.com/contact" }
  ]);

  return (
    <>
      <Helmet>
        <title>Contact Matawi Digital</title>
        <meta name="description" content="Get in touch with Matawi Digital" />
      </Helmet>
      
      <Schema schema={localBizSchema} />
      <Schema schema={breadcrumbs} />
      
      {/* Rest of page content */}
    </>
  );
};

// ============================================================================
// TESTING & VALIDATION
// ============================================================================

/*
After implementing schemas, test them:

1. GOOGLE RICH RESULTS TEST
   URL: https://search.google.com/test/rich-results
   
   Steps:
   • Go to the URL
   • Paste your website URL
   • Click "Test URL"
   • Look for your schema types
   
   Expected results:
   ✅ Organization schema detected
   ✅ Service schema detected
   ✅ Blog post schema detected
   ✅ Breadcrumb schema detected
   ✅ Local business schema detected

2. SCHEMA.ORG VALIDATOR
   URL: https://schema.org/validator
   
   Steps:
   • Paste page URL or HTML
   • Check for any errors/warnings
   • Verify all required properties present

3. GOOGLE SEARCH CONSOLE
   URL: https://search.google.com/search-console
   
   Steps:
   • Submit sitemap
   • Check "Enhancement" reports
   • Monitor "Rich Results" section
   • Wait 1-2 weeks for re-indexing

4. MONITOR RESULTS
   • Check Google Search Console weekly
   • Look for increased CTR
   • Monitor impressions + clicks
   • Check for indexing issues
*/

// ============================================================================
// QUICK COPY-PASTE: Add to Index.tsx
// ============================================================================

/*
1. Add imports at top:
   import Schema from "@/components/Schema";
   import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";

2. Inside component, before return statement:
   const orgSchema = generateOrganizationSchema();
   const breadcrumbSchema = generateBreadcrumbSchema([
     { name: "Home", url: "https://matawidigital.com" }
   ]);

3. In JSX, after <Helmet>:
   <>
     <Helmet>...</Helmet>
     <Schema schema={orgSchema} />
     <Schema schema={breadcrumbSchema} />
     {rest of component}
   </>
*/
