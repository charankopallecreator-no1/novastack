import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NovaStack",
    "description": "Professional freelance web development team specializing in modern, scalable websites with React, TypeScript, and cutting-edge technologies.",
    "url": window.location.origin,
    "logo": `${window.location.origin}/assets/nova-logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "hello@novastack.dev"
    },
    "sameAs": [
      "https://github.com/novastack",
      "https://linkedin.com/company/novastack"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Remote"
    },
    "foundingDate": "2024",
    "numberOfEmployees": "2-10",
    "knowsAbout": [
      "Web Development",
      "React Development", 
      "TypeScript",
      "Frontend Development",
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization"
    ]
  };

  return (
    <>
      <SEO
        title="NovaStack - Professional Freelance Web Development Agency"
        description="Expert freelance web development team. We build modern, responsive websites with React, TypeScript & cutting-edge tech. Agency quality, freelancer flexibility."
        keywords="freelance web development, react development, typescript, responsive design, modern websites, web development agency, custom websites, SEO optimization"
        canonical="/"
        structuredData={organizationSchema}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
