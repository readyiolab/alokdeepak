import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GA4Tracker from './analytics/GA4Tracker';

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
import UnsubscribeForm from './pages/UnsubscribeForm';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import BlogForm from './components/admin/BlogForm';
import BlogList from './components/admin/BlogList';
import BlogDetail from './components/admin/BlogDetail';


function App() {
  return (
    <AnimatePresence mode="wait">
      <GA4Tracker />
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
          <Route path="/unsubscribe" element={<UnsubscribeForm />} />
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="blog/create" element={<BlogForm />} />
          <Route path="blog/edit/:id" element={<BlogForm isEdit={true} />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
