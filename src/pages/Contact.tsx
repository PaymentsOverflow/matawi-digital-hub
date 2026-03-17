import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

/**
 * Contact Page — Contact form and company contact details.
 */
const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');

  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let device = 'Unknown';

    // Detect browser
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    else if (userAgent.includes('Opera')) browser = 'Opera';
    else if (userAgent.includes('Trident')) browser = 'IE';

    // Detect device
    if (/Mobile|Android|iPhone|iPad|iPod/.test(userAgent)) {
      device = /iPad/.test(userAgent) ? 'Tablet' : 'Mobile';
    } else {
      device = 'Desktop';
    }

    return { browser, device };
  };

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Failed to fetch IP:', error);
      return 'IP not available';
    }
  };

  const sendToTelegram = async (clientIP: string) => {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      console.error('Missing Telegram configuration:', { botToken: !!botToken, chatId: !!chatId });
      return false;
    }

    const { browser, device } = getBrowserInfo();

    const telegramMessage = `
🔔 <b>💚 Matawi Digital 💚 Contact Form</b>

👤 <b>Name:</b> ${formData.name}

📧 <b>Email:</b> ${formData.email}

🏢 <b>Company:</b> ${formData.company || 'Not specified'}

🛠️ <b>Service:</b> ${formData.service || 'Not specified'}

💬 <b>Message:</b> ${formData.message}

🌐 <b>IP Address:</b> ${clientIP}

💻 <b>Device:</b> ${device}

🌍 <b>Browser:</b> ${browser}

📅 <b>Submitted:</b> ${new Date().toLocaleString()}
    `;

    try {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      console.log('Sending to Telegram:', { url: url.substring(0, 50) + '...', chatId });
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      });

      const responseData = await response.json();
      console.log('Telegram API response:', responseData);

      if (!response.ok) {
        console.error('Telegram API error:', responseData);
        throw new Error(`HTTP ${response.status}: ${responseData.description || 'Unknown error'}`);
      }

      return true;
    } catch (error) {
      console.error('Telegram send detailed error:', error);
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if field is filled, it's a bot
    if (honeypot) {
      console.warn('Honeypot triggered - bot submission detected');
      // Show success message anyway to not tip off bots, but don't process
      toast({
        title: "Message Received",
        description: "Thank you for your submission."
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Get client IP
      const clientIP = await getClientIP();
      
      // Send to Telegram
      const telegramSuccess = await sendToTelegram(clientIP);
      
      if (telegramSuccess) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you in a few minutes, our promise."
        });
        
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        toast({
          title: "Message sent with issues",
          description: "Your message was processed but notification failed.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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

      <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Ecommerce (Shopify, WooCommerce, Wix)">Ecommerce (Shopify, WooCommerce, Wix)</option>
                        <option value="IT Maintenance">IT Maintenance</option>
                        <option value="IT Maintenance & Supplies"> IT Maintenance & Supplies </option>
                        <option value="Consultancy">Consultancy</option>

                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" disabled={isLoading} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div className="mat-card space-y-6">
                <h3 className="text-lg font-semibold">Contact Details</h3>
                <div className="space-y-4">
                  <a href="tel:+254112471292" className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    +254 112 471 292
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

            </div>
          </div>
        </div>
      </main>
      <MegaFooter />
    </>
  );
};

export default Contact;
