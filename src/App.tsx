import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import HiringSolutionsPage from './pages/HiringSolutionsPage';
import AgencyServicesPage from './pages/AgencyServicesPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="digital-marketing-mastery" element={<DigitalMarketingPage />} />
          <Route path="hiring-solutions" element={<HiringSolutionsPage />} />
          <Route path="digital-marketing-agency" element={<AgencyServicesPage />} />
          <Route path="website-development" element={<WebDevelopmentPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;