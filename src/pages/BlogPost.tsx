import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import Schema from "@/components/Schema";
import { generateBlogPostSchema, generateBreadcrumbSchema } from "@/utils/schemaGenerator";
import { blogPosts } from "@/data/blogPosts";
import { CalendarDays, ArrowLeft, User } from "lucide-react";

/**
 * BlogPost Page — Individual blog post detail view.
 */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="section-padding bg-background">
          <div className="container-narrow text-center space-y-4">
            <h1 className="text-3xl font-bold">Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary inline-block">
              Back to Blog
            </Link>
          </div>
        </main>
        <MegaFooter />
      </>
    );
  }

  const blogSchema = generateBlogPostSchema(
    post.title,
    post.content.substring(0, 155),
    post.heroImage,
    post.publishedDate || new Date().toISOString(),
    new Date().toISOString(),
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
        <title>{post.title} — Matawi Digital Blog</title>
        <meta name="description" content={post.content.substring(0, 155)} />
        <meta property="og:title" content={post.title} />

      <Schema schema={blogSchema} />
      <Schema schema={breadcrumbs} />
        <meta property="og:description" content={post.content.substring(0, 155)} />
        <meta property="og:image" content={post.heroImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />
      <main className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Hero image */}
          <div className="aspect-video bg-muted rounded overflow-hidden mb-8">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {new Date(post.date).toLocaleDateString("en-KE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            <p>{post.content}</p>

            {/* Inline images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {post.inlineImages.map((img, i) => (
                <div key={i} className="aspect-video bg-muted rounded overflow-hidden">
                  <img
                    src={img}
                    alt={`${post.title} - Image ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <p>
              At Matawi Digital, we're committed to helping businesses across Kenya leverage 
              the latest technology to grow and succeed. Whether you're in Nairobi, Ngong, Karen, 
              or anywhere in the country, our team is ready to help you navigate the digital landscape.
            </p>
          </div>
        </div>
      </main>
      <MegaFooter />
    </>
  );
};

export default BlogPost;
