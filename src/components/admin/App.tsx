import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GA4Tracker from '../../analytics/GA4Tracker';

// Layouts
import MainLayout from '../../layouts/MainLayout';

// Pages
import HomePage from '../../pages/HomePage';
import DigitalMarketingPage from '../../pages/DigitalMarketingPage';
import HiringSolutionsPage from '../../pages/HiringSolutionsPage';
import AgencyServicesPage from '../../pages/AgencyServicesPage';
import WebDevelopmentPage from '../../pages/WebDevelopmentPage';
import ContactPage from '../../pages/ContactPage';
import NotFoundPage from '../../pages/NotFoundPage';
import BlogPage from '../../pages/BlogPage';
import AboutUsPage from '../../pages/AboutUsPage';
import BlogPostPage from '../../pages/BlogPostPage';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import TermsAndConditions from '../../pages/TermsAndConditions';
import UnsubscribeForm from '../../pages/UnsubscribeForm';
import AdminLoginPage from '../../pages/AdminLoginPage';
import AdminLayout from '../admin/AdminLayout';
import AdminDashboard from '../admin/AdminDashboard';
import BlogForm from '../admin/BlogForm';
import BlogList from '../admin/BlogList';
import BlogDetail from '../admin/BlogDetail';
import JobsAdminPage from '../admin/JobsAdminPage';
import JobForm from '../admin/JobForm';
import JobApplicationsPage from '../admin/JobApplicationsPage';
import PublicJobsPage from '../../pages/PublicJobsPage';
import JobDetailPage from '../../pages/JobDetailPage';
import JobApplicationForm from '../../pages/JobApplicationForm';
import DigitalMarketingApplicationsPage from '../admin/DigitalMarketingApplicationsPage';
import CancellationRefundPolicy from '../../pages/CancellationRefundPolicy';



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
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
          <Route path="/unsubscribe" element={<UnsubscribeForm />} />
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="blog/create" element={<BlogForm />} />
          <Route path="blog/edit/:id" element={<BlogForm isEdit={true} />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="jobs" element={<JobsAdminPage />} />
          <Route path="jobs/create" element={<JobForm />} />
          <Route path="jobs/edit/:jobId" element={<JobForm />} />
          <Route path="jobs/:jobId/applications" element={<JobApplicationsPage />} />
            <Route path="marketing-applications" element={<DigitalMarketingApplicationsPage />} />
        </Route>
        <Route path="/careers" element={<PublicJobsPage />} />
        
        <Route path="/careers/:jobId/apply" element={<JobApplicationForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
