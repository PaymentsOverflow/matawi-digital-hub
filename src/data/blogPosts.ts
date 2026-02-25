/**
 * Blog post data schema and seed data.
 * Each post has: id, title, slug, author, date, heroImage, content, inlineImages (3 URLs).
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  heroImage: string;
  content: string;
  inlineImages: [string, string, string];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 IT Infrastructure Trends Shaping Kenya's Business Landscape in 2026",
    slug: "it-infrastructure-trends-kenya-2026",
    author: "Matawi Digital Team",
    date: "2026-02-20",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    content: "Kenya's IT landscape is evolving rapidly. From cloud-first strategies to edge computing, businesses in Nairobi, Ngong, and beyond are embracing digital transformation at an unprecedented pace. In this article, we explore the five most impactful trends reshaping how Kenyan enterprises approach their technology infrastructure.",
    inlineImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    ],
  },
  {
    id: "2",
    title: "Why Every SME in Nairobi Needs a Professional Website",
    slug: "sme-nairobi-professional-website",
    author: "Matawi Digital Team",
    date: "2026-02-15",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: "In today's digital-first economy, having a professional website isn't optional — it's essential. For SMEs operating in Nairobi, Karen, and Thika, a well-designed website serves as your 24/7 salesperson. We break down the ROI of investing in a professional web presence.",
    inlineImages: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80",
    ],
  },
  {
    id: "3",
    title: "Data Backup Strategies for Kenyan Businesses: A Complete Guide",
    slug: "data-backup-strategies-kenya",
    author: "Matawi Digital Team",
    date: "2026-02-10",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    content: "Data loss can be catastrophic for any business. Whether you're in Machakos, Kitengela, or anywhere in Kenya, having a robust backup and disaster recovery plan is crucial. This guide covers the best practices for protecting your business-critical data.",
    inlineImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80",
    ],
  },
  {
    id: "4",
    title: "Choosing the Right Networking Solution for Your Office",
    slug: "networking-solution-office-kenya",
    author: "Matawi Digital Team",
    date: "2026-02-05",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    content: "A reliable network is the backbone of modern business operations. From structured cabling to Wi-Fi 6 solutions, we guide Kenyan businesses through the process of selecting and implementing the right networking infrastructure for offices in Nairobi and beyond.",
    inlineImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80",
    ],
  },
  {
    id: "5",
    title: "The True Cost of IT Downtime and How to Prevent It",
    slug: "cost-it-downtime-prevention",
    author: "Matawi Digital Team",
    date: "2026-01-28",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    content: "Every minute of IT downtime costs money. For businesses across Kenya — from Ngong to Thika — understanding the financial impact of system failures and implementing proactive maintenance strategies can save millions of shillings annually.",
    inlineImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    ],
  },
  {
    id: "6",
    title: "Custom Software vs. Off-the-Shelf: What's Best for Your Kenyan Business?",
    slug: "custom-software-vs-off-shelf-kenya",
    author: "Matawi Digital Team",
    date: "2026-01-20",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    content: "Choosing between custom and off-the-shelf software is a critical decision. We analyze the pros and cons of each approach for businesses operating in Kenya's unique market, helping you make the right investment for sustainable growth in Nairobi, Karen, Machakos, and Kitengela.",
    inlineImages: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80",
    ],
  },
];
