/**
 * Analytics Implementation Examples
 * 
 * This file shows practical examples of how to add analytics tracking
 * to your components for measuring user interactions and drop-offs.
 */

// ============================================================================
// EXAMPLE 1: Service Card Component
// ============================================================================
import { trackServiceClick } from "@/services/analytics";

export const ServiceCardExample = ({ service }: any) => {
  const handleServiceClick = () => {
    // Track when user clicks on a service
    trackServiceClick(service.name, service.slug);
    // Then navigate
    window.location.href = `/services/${service.slug}`;
  };

  return (
    <div onClick={handleServiceClick}>
      {/* Service card content */}
    </div>
  );
};

// ============================================================================
// EXAMPLE 2: Contact Form Component
// ============================================================================
import { trackFormSubmission, trackContactFormInteraction } from "@/services/analytics";

export const ContactFormExample = () => {
  const handleFormStart = () => {
    trackContactFormInteraction("started");
  };

  const handleEmailChange = () => {
    trackContactFormInteraction("field_filled", "email");
  };

  const handleMessageChange = () => {
    trackContactFormInteraction("field_filled", "message");
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    // Submit form logic
    trackFormSubmission("contact-form");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        onChange={handleEmailChange}
        onFocus={handleFormStart}
        placeholder="Email"
      />
      <textarea
        onChange={handleMessageChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// ============================================================================
// EXAMPLE 3: CTA Button Component
// ============================================================================
import { trackCTA, trackButtonClick } from "@/services/analytics";

export const CTAButtonExample = ({ text, href, section }: any) => {
  const handleClick = () => {
    trackCTA(text, "primary-button", section);
    trackButtonClick(text, section);
    window.location.href = href;
  };

  return <button onClick={handleClick}>{text}</button>;
};

// ============================================================================
// EXAMPLE 4: Scroll Depth Tracking
// ============================================================================
import { useEffect } from "react";
import { trackScrollDepth } from "@/services/analytics";

export const ScrollDepthTracker = ({ pageName }: any) => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = docHeight - windowHeight;
      const scrollPercent = (scrollTop / totalScroll) * 100;

      // Track at 25%, 50%, 75%, 100%
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScrollDepth(25, pageName);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScrollDepth(50, pageName);
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        trackScrollDepth(75, pageName);
      } else if (scrollPercent >= 100) {
        trackScrollDepth(100, pageName);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageName]);

  return null; // This is a tracking-only component
};

// ============================================================================
// EXAMPLE 5: External Link Tracking
// ============================================================================
import { trackExternalLinkClick } from "@/services/analytics";

export const ExternalLinkExample = ({ href, text }: any) => {
  const handleClick = (e: any) => {
    trackExternalLinkClick(href, text);
    // Link will open in new tab due to target="_blank"
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      {text}
    </a>
  );
};

// ============================================================================
// EXAMPLE 6: User Drop-off Tracking
// ============================================================================
import { trackUserDropOff } from "@/services/analytics";

export const PricingPageExample = () => {
  const handleBackClick = () => {
    trackUserDropOff("Pricing Page", "Clicked Back");
  };

  const handleLeaveClick = () => {
    trackUserDropOff("Pricing Page", "Navigation away");
  };

  return (
    <div>
      <button onClick={handleBackClick}>← Go Back</button>
      {/* Pricing content */}
    </div>
  );
};

// ============================================================================
// EXAMPLE 7: Blog Post View Tracking
// ============================================================================
import { trackBlogPostView } from "@/services/analytics";

export const BlogPostPageExample = ({ post }: any) => {
  useEffect(() => {
    trackBlogPostView(post.title, post.slug);
  }, [post.slug, post.title]);

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Post content */}
    </article>
  );
};

// ============================================================================
// IMPLEMENTATION CHECKLIST
// ============================================================================
/*
☐ Add trackServiceClick() to service cards in Services.tsx
☐ Add trackFormSubmission() to contact form in Contact.tsx
☐ Add trackCTA() to all "Call to Action" buttons throughout the site
☐ Add ScrollDepthTracker to long-form content pages (Blog, Services)
☐ Add trackExternalLinkClick() to partner/external links in Footer
☐ Add trackBlogPostView() to blog post pages
☐ Add trackButtonClick() to navigation buttons
☐ Set up conversion goals in Google Analytics for:
  - Contact form submissions
  - Service page visits
  - Blog post reads
  - Phone call clicks

EVENTS TO MONITOR FOR DROP-OFF:
• Contact Form Starts → Submissions (are people abandoning?)
• Service Click → Details View → Contact Click (where do they leave?)
• Blog List → Blog Post View → Comment/Share (engagement levels?)
• CTA Buttons → Form Submission (conversion rate)
• External Links → Return Rate (are they coming back?)
*/
