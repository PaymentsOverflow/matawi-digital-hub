/**
 * Schema Utility Functions
 * Generates JSON-LD structured data for SEO
 * Reference: https://schema.org
 */

/**
 * Generate Organization Schema
 */
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Matawi Digital",
  "url": "https://matawidigital.com",
  "logo": "https://matawidigital.com/src/assets/matawi-logo.png",
  "description": "Leading IT infrastructure, management, and digital solutions company in Kenya",
  "founded": "2022",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ngong",
      "addressRegion": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    }
  },
  "location": {
    "@type": "Place",
    "name": "Matawi Digital Headquarters",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ngong",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+254112471292",
    "email": "info@matawidigital.com"
  },
  "sameAs": [
    "https://www.facebook.com/matawidigital",
    "https://twitter.com/matawidigital",
    "https://www.linkedin.com/company/matawidigital",
    "https://www.instagram.com/matawidigital"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Kenya",
    "addressCountry": "KE"
  }
});

/**
 * Generate Service Schema
 */
export const generateServiceSchema = (
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  areaServed: string = "Kenya"
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "url": serviceUrl,
  "provider": {
    "@type": "Organization",
    "name": "Matawi Digital",
    "url": "https://matawidigital.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "telephone": "+254112471292"
    }
  },
  "areaServed": areaServed,
  "availableLanguage": [
    "en",
    "sw"
  ]
});

/**
 * Generate LocalBusiness Schema
 */
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Matawi Digital",
  "image": "https://matawidigital.com/src/assets/matawi-logo.png",
  "description": "IT infrastructure and digital solutions company",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ngong",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "telephone": "+254112471292",
  "email": "info@matawidigital.com",
  "url": "https://matawidigital.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
});

/**
 * Generate Blog Post Schema
 */
export const generateBlogPostSchema = (
  title: string,
  description: string,
  imageUrl: string,
  datePublished: string,
  dateModified: string,
  authorName: string = "Matawi Digital",
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": imageUrl,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Organization",
    "name": authorName,
    "url": "https://matawidigital.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Matawi Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://matawidigital.com/src/assets/matawi-logo.png"
    }
  },
  "url": url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

/**
 * Generate BreadcrumbList Schema
 */
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * Generate FAQ Schema
 */
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
