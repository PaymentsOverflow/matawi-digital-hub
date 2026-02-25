import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";
import { Target, Eye, Users } from "lucide-react";

/**
 * About Page — Company information, mission, vision, and team overview.
 */
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us — Matawi Digital | IT Solutions Company in Kenya</title>
        <meta name="description" content="Learn about Matawi Digital, a leading IT infrastructure and digital solutions company based in Ngong, Nairobi, serving businesses across Kenya." />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                About Us
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">
                Building Kenya's Digital Future
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Matawi Digital is a technology company based in Ngong, Nairobi. We specialize in 
                IT infrastructure, software development, and digital marketing. Our mission is to 
                empower businesses across Kenya — from Karen to Kitengela, Thika to Machakos — 
                with modern, reliable technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="mat-card text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mx-auto">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To deliver innovative, reliable, and affordable IT solutions that help Kenyan 
                  businesses compete on a global stage.
                </p>
              </div>
              <div className="mat-card text-center space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center mx-auto">
                  <Eye size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be the most trusted IT partner for businesses across East Africa, driving 
                  digital transformation in every sector.
                </p>
              </div>
              <div className="mat-card text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mx-auto">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Our Team</h3>
                <p className="text-sm text-muted-foreground">
                  A passionate team of engineers, designers, and strategists dedicated to 
                  solving complex technology challenges for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
};

export default About;
