# Complete Google Tag Manager Implementation Guide
# Tracking All User Actions & Events

## Overview
This guide documents all trackable events on Matawi Digital website with implementation instructions.

---

## Event Categories & Actions

### 1. Navigation & Page Interaction
```
Event: page_view
Trigger: Every page load (automatic via ScrollToTop)
Properties:
  - page_path: /services
  - page_title: Services Page
```

### 2. Service Interactions
```
Event: service_click
Trigger: User clicks on service card/link
Parameters:
  - service_name: "Software Development"
  - service_slug: "software-development"
```

### 3. Blog Interactions
```
Event: blog_post_view
Trigger: User lands on blog post
Parameters:
  - post_title: "How to Secure Your Business Data"
  - post_slug: "how-to-secure-business-data"

Event: blog_click
Trigger: User clicks blog post link
Parameters:
  - post_title: "How to Secure..."
  - location: "Blog Listing Page"
```

### 4. CTA Button Clicks
```
Event: cta_interaction
Trigger: User clicks Call-to-Action button
Parameters:
  - cta_text: "Get a Quote"
  - cta_type: "primary_button"
  - page_location: "Hero Section"
```

### 5. Contact Form Events
```
Event: contact_form_interaction
Trigger: User starts typing in form
Sub-events:
  - step: "started" (form focused)
  - step: "field_filled" → field_name: "email"
  - step: "submitted" (form submitted)

Event: form_submit
Trigger: Form successfully submitted
Parameters:
  - form_name: "contact-form"
```

### 6. Link Clicks
```
Event: button_click
Trigger: User clicks named button
Parameters:
  - button_name: "Contact CTA"
  - location: "Services Section"

Event: external_link_click
Trigger: User clicks external website link
Parameters:
  - link_url: "https://partner-site.com"
  - link_text: "Partner Website"
```

### 7. User Engagement
```
Event: scroll_depth
Trigger: User reaches 25%, 50%, 75%, 100% of page
Parameters:
  - depth_percentage: 75
  - page_name: "Services"

Event: user_drop_off
Trigger: User leaves page/form
Parameters:
  - page_name: "Contact Form"
  - reason: "User left without submitting"
```

### 8. WhatsApp & Communication
```
Event: whatsapp_click
Trigger: User clicks WhatsApp button
Parameters:
  - action: "whatsapp_engagement"
  - location: "floating_button"

Event: phone_call
Trigger: User clicks phone number
Parameters:
  - phone: "+254112471292"
  - location: "Header / Footer / Contact Page"

Event: email_click
Trigger: User clicks email link
Parameters:
  - email: "info@matawidigital.com"
  - location: "Footer"
```

### 9. Search & Filtering
```
Event: search
Trigger: User searches
Parameters:
  - search_term: "software development"
  - result_count: 6
```

---

## Implementation Files & Components

### Already Implemented ✅
- `ScrollToTop.tsx` - Tracks page views
- `Contact.tsx` - Tracks form interactions
- `WhatsAppButton.tsx` - Can track clicks

### Need to Add Tracking 📋
- `Header.tsx` - Navigation clicks
- `HeroSection.tsx` - CTA buttons
- `ServicesSection.tsx` - Service cards
- `BrandsSection.tsx` - Brand clicks
- `Services.tsx` - Service listing
- `ServiceDetail.tsx` - Service details
- `Blog.tsx` - Blog listing
- `BlogPost.tsx` - Blog post view
- `About.tsx` - Page engagement
- `MegaFooter.tsx` - Footer links & phone/email

---

## Tracking Implementation Steps

### Step 1: Import Analytics Service
```tsx
import { 
  trackServiceClick, 
  trackButtonClick, 
  trackCTA,
  trackExternalLinkClick 
} from "@/services/analytics";
```

### Step 2: Add Tracking to Event Handlers
```tsx
// Service Card Click
const handleServiceClick = (serviceName, serviceSlug) => {
  trackServiceClick(serviceName, serviceSlug);
  navigate(`/services/${serviceSlug}`);
};

// CTA Button
const handleCTAClick = (ctaText, section) => {
  trackCTA(ctaText, "primary_button", section);
  navigate("/contact");
};

// External Link
const handleExternalClick = (url, text) => {
  trackExternalLinkClick(url, text);
};
```

### Step 3: Add onClick Handlers to Elements
```tsx
<button onClick={() => handleCTAClick("Get Quote", "Hero Section")}>
  Get a Quote
</button>

<a href="https://external-site.com" onClick={() => handleExternalClick(...)}>
  External Link
</a>
```

---

## Event Tracking Map

### By Page

#### Index.tsx (Homepage)
- ✅ Page view (auto)
- [ ] Hero CTA clicks
- [ ] Service cards clicks
- [ ] Brand hovers/clicks

#### Services.tsx
- ✅ Page view (auto)
- [ ] Service card clicks
- [ ] Filter/search
- [ ] CTA button clicks

#### ServiceDetail.tsx
- ✅ Page view (auto)
- [ ] Related service clicks
- [ ] CTA clicks
- [ ] Contact form starts

#### Blog.tsx
- ✅ Page view (auto)
- [ ] Blog post clicks
- [ ] Filter/category clicks
- [ ] Search in blog

#### BlogPost.tsx
- ✅ Page view (auto)
- [ ] Related post clicks
- [ ] Share button clicks
- [ ] Scroll depth

#### Contact.tsx
- ✅ Form start/field fills/submit
- ✅ Live indicator view
- [ ] Phone/WhatsApp clicks

#### About.tsx
- ✅ Page view (auto)
- [ ] CTA clicks
- [ ] Link clicks (if any)

#### Header.tsx
- [ ] Logo click
- [ ] Navigation link clicks
- [ ] Mobile menu opens
- [ ] Get Quote button click

#### Footer (MegaFooter.tsx)
- [ ] Phone number clicks
- [ ] Email clicks
- [ ] Social media clicks
- [ ] Footer link clicks
- [ ] Logo clicks

#### WhatsAppButton.tsx
- [ ] WhatsApp button click

---

## GTM Setup Instructions

### Create Tags in Google Tag Manager

#### 1. Service Click Event
```
Tag Type: Google Analytics: GA4 Event
Event Name: service_click
Parameters:
  - service_name: {{service_name}}
  - service_slug: {{service_slug}}
Trigger: When service_click event fires
```

#### 2. Button Click Event
```
Tag Type: Google Analytics: GA4 Event
Event Name: button_click
Parameters:
  - button_name: {{button_name}}
  - location: {{location}}
Trigger: When button_click event fires
```

#### 3. Mobile Menu Interaction
```
Tag Type: Google Analytics: GA4 Event
Event Name: mobile_menu_toggle
Parameters:
  - action: {{menu_action}} (open/close)
Trigger: Click on menu toggle button
```

#### 4. External Link Click
```
Tag Type: Google Analytics: GA4 Event
Event Name: external_link_click
Parameters:
  - link_url: {{click_url}}
  - link_text: {{click_text}}
Trigger: Click on outbound links
```

---

## Code Examples by Component

### HeroSection.tsx
```tsx
import { trackCTA, trackButtonClick } from "@/services/analytics";

const HeroSection = () => {
  const handleCTAClick = () => {
    trackCTA("Get Started", "button", "Hero Section");
    trackButtonClick("Get Started CTA", "Hero");
    navigate("/contact");
  };

  return (
    <section>
      <h1>Your Hero Headline</h1>
      <button onClick={handleCTAClick} className="btn-primary">
        Get Started
      </button>
    </section>
  );
};
```

### ServicesSection.tsx
```tsx
import { trackServiceClick } from "@/services/analytics";

const ServicesSection = () => {
  const handleServiceClick = (serviceName, serviceSlug) => {
    trackServiceClick(serviceName, serviceSlug);
    navigate(`/services/${serviceSlug}`);
  };

  return (
    <div className="services-grid">
      {services.map(service => (
        <div 
          key={service.slug}
          onClick={() => handleServiceClick(service.name, service.slug)}
          className="service-card"
        >
          {service.name}
        </div>
      ))}
    </div>
  );
};
```

### MegaFooter.tsx (Phone/Email)
```tsx
import { trackButtonClick } from "@/services/analytics";

const MegaFooter = () => {
  const handlePhoneClick = () => {
    trackButtonClick("Phone Call", "Footer - Contact");
  };

  const handleEmailClick = () => {
    trackButtonClick("Email Link", "Footer - Contact");
  };

  return (
    <footer>
      <a 
        href="tel:+254112471292" 
        onClick={handlePhoneClick}
      >
        +254 112 471 292
      </a>
      <a 
        href="mailto:info@matawidigital.com"
        onClick={handleEmailClick}
      >
        info@matawidigital.com
      </a>
    </footer>
  );
};
```

### Header.tsx (Navigation)
```tsx
import { trackButtonClick } from "@/services/analytics";

const Header = () => {
  const handleNavClick = (label) => {
    trackButtonClick(label, "Header Navigation");
  };

  const handleGetQuoteClick = () => {
    trackButtonClick("Get a Quote", "Header CTA");
    navigate("/contact");
  };

  return (
    <header>
      <nav>
        {navLinks.map(link => (
          <Link 
            key={link.path} 
            to={link.path}
            onClick={() => handleNavClick(link.label)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button onClick={handleGetQuoteClick}>Get a Quote</button>
    </header>
  );
};
```

### Blog.tsx (Blog Listing)
```tsx
import { trackButtonClick } from "@/services/analytics";

const Blog = () => {
  const handleBlogClick = (postTitle, postSlug) => {
    trackButtonClick(postTitle, "Blog Listing");
    navigate(`/blog/${postSlug}`);
  };

  return (
    <div>
      {blogPosts.map(post => (
        <div 
          key={post.slug}
          onClick={() => handleBlogClick(post.title, post.slug)}
        >
          {post.title}
        </div>
      ))}
    </div>
  );
};
```

### WhatsAppButton.tsx (Already has tracking potential)
```tsx
import { trackButtonClick } from "@/services/analytics";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    trackButtonClick("WhatsApp Chat", "Floating Button");
  };

  return (
    <a 
      href={whatsappUrl}
      onClick={handleWhatsAppClick}
      target="_blank"
    >
      <MessageCircle size={32} />
    </a>
  );
};
```

---

## Conversion Tracking

### Goal 1: Contact Form Submission
```
Track form_submit event
Measure: Conversion Rate, Revenue Impact
```

### Goal 2: Service Page View
```
Track service_click + page_view events
Measure: Service interest, most popular services
```

### Goal 3: Blog Engagement
```
Track blog_post_view + scroll_depth
Measure: Content engagement, time spent
```

### Goal 4: Phone/WhatsApp Contact
```
Track phone_call + whatsapp_click
Measure: Direct contact attempts
```

---

## Custom Dashboard Metrics

### Dashboard 1: User Journey
- Landing page → Service view → Contact form → Submission

### Dashboard 2: Popular Services
- Rank services by click count
- Track conversion by service

### Dashboard 3: Content Performance
- Blog post views
- Average time on post
- Scroll depth patterns

### Dashboard 4: Conversion Funnel
- Hero CTA clicks
- Service page visits
- Contact form starts
- Form submissions

---

## Testing Events Before Launch

### Step 1: Enable GTM Preview Mode
1. Go to Google Tag Manager
2. Click "Preview"
3. Enter website URL
4. Debug panel appears at bottom

### Step 2: Test Each Event
```
Homepage:
1. Click Hero CTA → Check "cta_interaction" fires
2. Click Service card → Check "service_click" fires

Services Page:
1. Click any service → Check event fires
2. Click CTA button → Check event fires

Contact Page:
1. Start typing → Check "contact_form_interaction" fires
2. Submit form → Check "form_submit" fires
```

### Step 3: Verify in Google Analytics
1. Go to Google Analytics
2. Realtime → Events
3. Should see events firing in real-time

---

## Checklist

### Essential Tracking ✅
- [x] Page views (auto via ScrollToTop)
- [x] Form submissions (Contact page)
- [ ] Service clicks
- [ ] CTA button clicks
- [ ] Blog post views
- [ ] Navigation clicks
- [ ] Phone/Email clicks
- [ ] WhatsApp clicks

### Advanced Tracking 📊
- [ ] Scroll depth
- [ ] Time on page
- [ ] Drop-off points
- [ ] Form field interactions
- [ ] External link clicks
- [ ] Search/filter usage

---

## Deployment Checklist

- [ ] Add tracking functions to all pages
- [ ] Test all events in GTM Preview Mode
- [ ] Set up conversion goals in Google Analytics
- [ ] Create custom dashboard
- [ ] Document all events
- [ ] Train team on event names
- [ ] Monitor for 1 week
- [ ] Optimize based on data

---

## Key Metrics to Monitor

### Weekly
- Total events fired
- Service popularity
- Contact form submissions
- Page views by service

### Monthly
- Conversion rate trends
- Most engaged pages
- User journey patterns
- Drop-off points

### Quarterly
- ROI by service
- Content performance
- Traffic sources
- User behavior changes

---

**Status:** ✅ Guide Complete | 📋 Implementation Pending
