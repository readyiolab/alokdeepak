import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import { Helmet } from 'react-helmet';

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
        <meta property="og:url" content="https://sownmark.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </>
  );
};

export default HomePage;
