/**
 * Analytics Service
 * Centralized event tracking for Google Tag Manager
 */

/**
 * Track page views
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", "G-ZNPTCK0HK9", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track custom events
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventData);
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", {
    form_name: formName,
  });
};

/**
 * Track service clicks
 */
export const trackServiceClick = (serviceName: string, serviceSlug: string) => {
  trackEvent("service_click", {
    service_name: serviceName,
    service_slug: serviceSlug,
  });
};

/**
 * Track blog post views
 */
export const trackBlogPostView = (postTitle: string, postSlug: string) => {
  trackEvent("blog_post_view", {
    post_title: postTitle,
    post_slug: postSlug,
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location,
  });
};

/**
 * Track CTA interactions
 */
export const trackCTA = (ctaText: string, ctaType: string, pageLocation: string) => {
  trackEvent("cta_interaction", {
    cta_text: ctaText,
    cta_type: ctaType,
    page_location: pageLocation,
  });
};

/**
 * Track contact form interactions
 */
export const trackContactFormInteraction = (
  step: "started" | "field_filled" | "submitted",
  fieldName?: string
) => {
  trackEvent("contact_form_interaction", {
    step: step,
    field_name: fieldName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track user drop-off points
 */
export const trackUserDropOff = (pageName: string, reason: string) => {
  trackEvent("user_drop_off", {
    page_name: pageName,
    reason: reason,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLinkClick = (linkUrl: string, linkText: string) => {
  trackEvent("external_link_click", {
    link_url: linkUrl,
    link_text: linkText,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number, pageName: string) => {
  trackEvent("scroll_depth", {
    depth_percentage: percentage,
    page_name: pageName,
  });
};

/**
 * Track search actions
 */
export const trackSearch = (searchQuery: string, resultCount: number) => {
  trackEvent("search", {
    search_term: searchQuery,
    result_count: resultCount,
  });
};
