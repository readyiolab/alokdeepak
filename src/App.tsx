import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader'; // Adjust path as needed

// Lazy load components
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage'));
const HiringSolutionsPage = lazy(() => import('./pages/HiringSolutionsPage'));
const AgencyServicesPage = lazy(() => import('./pages/AgencyServicesPage'));
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
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
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;