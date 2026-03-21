# Google Tag Manager & Search Console Setup Guide

## 1. Google Tag Manager Setup

### Step 1: Get Your GTM ID
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Sign in with your Google account
3. Click **Create Account**
4. Enter account name: `Matawi Digital`
5. Enter container name: `Website`
6. Select **Web** as the platform
7. Accept terms and create
8. You'll receive a **GTM ID** like `GTM-XXXXXXXX`

### Step 2: Add GTM ID to Your Website
Two places need your ID (in `index.html`):
- Line 2: `GTM-XXXXXXXX` in the main script tag
- Line 11: `GTM-XXXXXXXX` in the noscript tag

Replace both instances with your actual GTM ID.

### Step 3: Set Up Google Analytics 4
1. In GTM, create a new **Tag**
2. Choose **Google Analytics: GA4 Configuration**
3. Paste your **Google Analytics 4 Measurement ID** (e.g., `G-XXXXXXXXXX`)
4. Trigger: **All Pages**
5. Publish the container

**To get your Measurement ID:**
- Go to [Google Analytics](https://analytics.google.com/)
- Create a property for `matawidigital.com`
- Find your **Measurement ID** in Admin → Data Streams

### Step 4: Update Analytics Service
In `src/services/analytics.ts`, replace `GA_MEASUREMENT_ID` with your actual measurement ID.

---

## 2. Google Search Console Setup

### Step 1: Verify Your Domain
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **Add property**
3. Select **URL prefix** and enter `https://matawidigital.com`
4. Choose verification method:
   - **HTML Meta Tag** (easiest): Copy the meta tag content
   - In `index.html`, replace `your-verification-code` with the verification code

### Step 2: Monitor Performance
Once verified, you can:
- See which pages are indexed
- Check search performance and click-through rates
- Identify drop-off points in search results
- Monitor mobile usability
- View backlinks

---

## 3. Using the Analytics Service

### Track Custom Events

Import the analytics service in any component:

```tsx
import { trackEvent, trackServiceClick, trackButtonClick } from "@/services/analytics";

// In your component
const handleServiceClick = (serviceName: string) => {
  trackServiceClick(serviceName, "software-development");
};

const handleContactClick = () => {
  trackButtonClick("Contact CTA", "Hero Section");
};
```

### Available Tracking Functions

```tsx
// Track form submissions
trackFormSubmission("contact-form");

// Track service interactions
trackServiceClick("Software Development", "software-development");

// Track blog posts
trackBlogPostView("How to Choose IT Solutions", "how-to-choose-it");

// Track button clicks
trackButtonClick("Get Quote", "Services Page");

// Track CTA engagement
trackCTA("Schedule Consultation", "button", "Services Section");

// Track contact form interactions
trackContactFormInteraction("started");
trackContactFormInteraction("field_filled", "email");
trackContactFormInteraction("submitted");

// Track drop-off points
trackUserDropOff("Pricing Page", "Too expensive");

// Track external links
trackExternalLinkClick("https://example.com", "Partner Website");

// Track scroll depth
trackScrollDepth(75, "Services Page");

// Track searches
trackSearch("software development", 15);
```

---

## 4. Key Metrics to Monitor

### Drop-Off Points
Monitor these in Google Analytics under **Behavior Flow**:
- Contact form abandonment rates
- Page exit rates by page-section
- Service details page drop-off

### Conversion Tracking
Set up conversion goals:
- Contact form submissions
- Service page visits
- Blog post reads (time on page)
- Newsletter signups

### User Behavior
- Scroll depth on key pages
- Time spent on each page
- Device/browser breakdown
- Geographic distribution (Kenya focus)

---

## 5. Tips for Kenya-Based Analytics

1. **Filter for Kenya traffic** in GA4:
   - Admin → Audiences → Create custom audience for Kenya (location)
   
2. **Set timezone to Nairobi (EAT)** for accurate daily data

3. **Monitor mobile traffic** (highest in Kenya):
   - Create custom dashboard for mobile metrics
   - Test on common devices (Samsung, iPhone)

4. **Track important CTAs**:
   - "Book Consultation"
   - "Get Quote"
   - "Call Us" links
   - WhatsApp clicks

---

## 6. Next Steps

1. ✅ Add GTM ID to `index.html`
2. ✅ Add Google Search Console verification code to `index.html`
3. ✅ Update `GA_MEASUREMENT_ID` in `src/services/analytics.ts`
4. ✅ Add `trackEvent()` calls in components for important interactions
5. ✅ Set up conversion goals in Google Analytics
6. ✅ Test using Google Tag Manager preview mode

---

## Testing Your Setup

### GTM Preview Mode
1. In Google Tag Manager, click **Preview**
2. Enter your website URL
3. A debug panel will appear at the bottom of your site
4. Trigger events and see them fire in real-time

### Check GA4
1. Go to Google Analytics
2. Navigate to **Realtime** section
3. Load your website - you should see a user count increase
4. Check **Realtime Events** for custom event tracking

