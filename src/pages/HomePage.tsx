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
        <meta name="description" content="Master digital marketing, find top talent, and drive online success with Sownmark - your comprehensive digital partner." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;