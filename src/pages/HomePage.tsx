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
        <title>Website Development Company in India – Get More Leads</title>
        <meta
          name="description"
          content="Looking for a website development company in India? Sownmark Digital builds fast, SEO-ready, high-converting websites that generate leads."
        />
        <meta
          name="keywords"
          content="digital marketing agency, website development company, social media marketing agency, SEO company USA"
        />
        <link rel="canonical" href="https://sownmark.com/" />
        <meta property="og:title" content="Website Development Company in India – Get More Leads" />
        <meta property="og:description" content="Looking for a website development company in India? Sownmark Digital builds fast, SEO-ready, high-converting websites that generate leads." />
        <meta property="og:url" content="https://sownmark.com/" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sownmark Digital",
              "url": "https://sownmark.com",
              "logo": "https://sownmark.com/logo.png",
              "description": "Sownmark Digital is an AI-driven digital marketing and website development company in India offering SEO, PPC, influencer marketing and hiring solutions.",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "foundingLocation": {
                "@type": "Country",
                "name": "India"
              },
              "knowsAbout": [
                "Digital Marketing Services in India",
                "SEO Services",
                "Website Development",
                "Influencer Marketing",
                "Hiring Solutions",
                "AI Marketing Strategies",
                "Performance Marketing"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Digital Marketing Services in India"
                },
                {
                  "@type": "Service",
                  "name": "Website Development Services in India"
                },
                {
                  "@type": "Service",
                  "name": "Influencer Marketing Agency in India"
                },
                {
                  "@type": "Service",
                  "name": "Hiring Solutions in India"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/sownmark",
                "https://www.instagram.com/sownmark_",
                "https://x.com/Sownmark143641"
              ]
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
