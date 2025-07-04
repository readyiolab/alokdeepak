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
