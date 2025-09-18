import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import SEO from '@/components/SEO';

const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NovaStack",
    "description": "Get in touch with NovaStack for your web development needs. Free consultation and quick response times.",
    "url": `${window.location.origin}/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": "NovaStack",
      "email": "hello@novastack.dev",
      "telephone": "+1-555-123-4567",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": "English",
        "hoursAvailable": "Mo-Fr 08:00-18:00"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact NovaStack - Get Your Web Development Quote Today"
        description="Ready to start your project? Contact NovaStack for professional web development services. Free consultation, quick response, and transparent pricing."
        keywords="contact web developer, freelance web development quote, hire react developer, web development consultation, custom website quote"
        canonical="/contact"
        structuredData={contactSchema}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-16">
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;