import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import { Mail, Phone, MapPin, Send } from "lucide-react";

/**
 * Contact Page — Contact form and company contact details.
 */
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Matawi Digital | Get in Touch</title>
        <meta name="description" content="Contact Matawi Digital for IT infrastructure, software development, and digital solutions in Kenya. Based in Ngong, Nairobi. Call, email, or visit us." />
      </Helmet>

      <Header />
      <main className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div className="space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Get In Touch
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how Matawi Digital can help your business grow.
              </p>

              {submitted ? (
                <div className="mat-card bg-primary/5 border-primary text-center space-y-3">
                  <Send size={32} className="text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div className="mat-card space-y-6">
                <h3 className="text-lg font-semibold">Contact Details</h3>
                <div className="space-y-4">
                  <a href="tel:+254700000000" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    +254 700 000 000
                  </a>
                  <a href="mailto:info@matawidigital.com" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    info@matawidigital.com
                  </a>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    Ngong, Nairobi, Kenya
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 bg-muted border border-border rounded flex items-center justify-center">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Google Maps Embed</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MegaFooter />
    </>
  );
};

export default Contact;
