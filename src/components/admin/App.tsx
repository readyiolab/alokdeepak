import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GA4Tracker from '../../analytics/GA4Tracker';

// Layouts
import MainLayout from '../../layouts/MainLayout';

// Pages - Lazy Loaded
const HomePage = lazy(() => import('../../pages/HomePage'));
const HiringSolutionsPage = lazy(() => import('../../pages/HiringSolutionsPage'));
const AgencyServicesPage = lazy(() => import('../../pages/AgencyServicesPage'));
const WebDevelopmentPage = lazy(() => import('../../pages/WebDevelopmentPage'));
const InfluencerMarketingPage = lazy(() => import('../../pages/InfluencerMarketingPage'));
const CaseStudiesPage = lazy(() => import('../../pages/CaseStudiesPage'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const BlogPage = lazy(() => import('../../pages/BlogPage'));
const AboutUsPage = lazy(() => import('../../pages/AboutUsPage'));
const BlogPostPage = lazy(() => import('../../pages/BlogPostPage'));
const PrivacyPolicy = lazy(() => import('../../pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../../pages/TermsAndConditions'));
const UnsubscribeForm = lazy(() => import('../../pages/UnsubscribeForm'));
const AdminLoginPage = lazy(() => import('../../pages/AdminLoginPage'));
const AdminLayout = lazy(() => import('../admin/AdminLayout'));
const AdminDashboard = lazy(() => import('../admin/AdminDashboard'));
const BlogForm = lazy(() => import('../admin/BlogForm'));
const BlogList = lazy(() => import('../admin/BlogList'));
const BlogDetail = lazy(() => import('../admin/BlogDetail'));
const JobsAdminPage = lazy(() => import('../admin/JobsAdminPage'));
const JobForm = lazy(() => import('../admin/JobForm'));
const JobApplicationsPage = lazy(() => import('../admin/JobApplicationsPage'));
const ContactMessagesPage = lazy(() => import('../admin/ContactMessagesPage'));
const DigitalMarketingApplicationsPage = lazy(() => import('../admin/DigitalMarketingApplicationsPage'));

const JobDetailPage = lazy(() => import('../../pages/JobDetailPage'));
const JobApplicationForm = lazy(() => import('../../pages/JobApplicationForm'));


// Loading Fallback
const PageLoader = () => (
  <div className="min-h-[60vh] w-full flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#1a2957] border-t-transparent rounded-full animate-spin"></div>
  </div>
);



function App() {
  return (
    <AnimatePresence mode="wait">
      <GA4Tracker />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route path="hiring-solutions" element={<HiringSolutionsPage />} />
            <Route path="digital-marketing-agency" element={<AgencyServicesPage />} />
            <Route path="website-development" element={<WebDevelopmentPage />} />
            <Route path="influencer-marketing" element={<InfluencerMarketingPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />
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
            <Route path="jobs" element={<JobsAdminPage />} />
            <Route path="jobs/create" element={<JobForm />} />
            <Route path="jobs/edit/:jobId" element={<JobForm />} />
            <Route path="jobs/:jobId/applications" element={<JobApplicationsPage />} />
            <Route path="contact-messages" element={<ContactMessagesPage />} />
            <Route path="marketing-applications" element={<DigitalMarketingApplicationsPage />} />
          </Route>


          <Route path="/careers/:jobId/apply" element={<JobApplicationForm />} />
        </Routes>
      </Suspense>
    </AnimatePresence >
  );
}

export default App;
