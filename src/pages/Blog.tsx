import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import { blogPosts } from "@/data/blogPosts";
import { CalendarDays, ArrowRight } from "lucide-react";

/**
 * Blog Page — Lists all blog posts in a Material-style card grid.
 */
const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog — Matawi Digital | IT Insights & Tips for Kenyan Businesses</title>
        <meta name="description" content="Read the latest IT insights, tips, and industry news from Matawi Digital. Covering software development, networking, backup solutions, and more for businesses in Kenya." />
      </Helmet>

      <Header />
      <main className="section-padding bg-background">
        <div className="container-narrow">
          {/* Page header */}
          <div className="space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Insights & Updates
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">Our Blog</h1>
            <p className="text-muted-foreground max-w-xl">
              Expert insights on IT infrastructure, digital transformation, and technology 
              trends for businesses across Kenya.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="mat-card group block"
              >
                {/* Hero image */}
                <div className="aspect-video bg-muted rounded overflow-hidden mb-6">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <CalendarDays size={14} />
                  {new Date(post.date).toLocaleDateString("en-KE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.content}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
                  Read More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <MegaFooter />
    </>
  );
};

export default Blog;
