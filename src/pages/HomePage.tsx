import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/home/HeroSection';
import { Helmet } from 'react-helmet';

// Lazy load sections below the fold
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const FeaturesSection = lazy(() => import('../components/home/FeaturesSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const CtaSection = lazy(() => import('../components/home/CtaSection'));

// Simple loading placeholder to prevent CLS
const SectionLoader = ({ height = "400px" }: { height?: string }) => (
  <div style={{ height, backgroundColor: 'transparent' }} className="w-full flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#1a2957] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sownmark: Your Partner in Digital Growth</title>
        <meta
          name="description"
          content="Sownmark offers expert web design, digital marketing, and training solutions to grow your business online and build your career"
        />
        <meta
          name="keywords"
          content="digital marketing agency, website development company, best digital marketing course, social media marketing agency, SEO company USA"
        />
        <link rel="canonical" href="https://sownmark.com/" />
        <meta property="og:title" content="Sownmark: Your Partner in Digital Growth" />
        <meta property="og:description" content="Sownmark offers expert web design, digital marketing, and training solutions to grow your business online and build your career" />
        <meta property="og:url" content="https://sownmark.com/" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sownmark",
              "url": "https://sownmark.com",
              "logo": "https://sownmark.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/sownmark_",
                "https://www.linkedin.com/company/sownmark",
                "https://x.com/Sownmark143641"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://sownmark.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sownmark.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="bg-white">
        <HeroSection />

        <Suspense fallback={<SectionLoader height="600px" />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<SectionLoader height="500px" />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<SectionLoader height="600px" />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader height="300px" />}>
          <CtaSection />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
