import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Link as LinkIcon, ArrowLeft } from 'lucide-react';

const DigitalMarketingApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [filters, setFilters] = useState({ minReferrals: '', page: 1, limit: 10 });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchApplications();
  }, [filters]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        minReferrals: filters.minReferrals,
        page: filters.page,
        limit: filters.limit,
      }).toString();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/applications?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setApplications(data.applications);
        setTotal(data.total);
      } else {
        console.error(data.error);
        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
    setLoading(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <motion.div {...fadeInUp} className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Digital Marketing Applications
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <input
            type="number"
            placeholder="Min Referrals (e.g., 10)"
            value={filters.minReferrals}
            onChange={(e) => setFilters({ ...filters, minReferrals: e.target.value, page: 1 })}
            className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
      </motion.div>

      {loading ? (
        <p className="text-gray-900 text-center">Loading...</p>
      ) : (
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:gap-6"
        >
          {applications.length === 0 ? (
            <p className="text-gray-900 text-center">No applications found.</p>
          ) : (
            applications.map((app) => (
              <motion.div
                key={app.id}
                variants={fadeInUp}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                      <User className="w-5 h-5 mr-2" /> {app.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Mail className="w-4 h-4 mr-2" /> {app.email}
                    </p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Phone className="w-4 h-4 mr-2" /> {app.phone}
                    </p>
                    <p className="text-sm text-gray-500">
                      Referral Code: <span className="font-medium">{app.referral_code}</span>
                    </p>
                    {app.referred_by && (
                      <p className="text-sm text-gray-500">
                        Referred By: <span className="font-medium">{app.referred_by}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      Referrals: <span className="font-medium">{app.referral_count}</span>
                      {app.referral_count >= 10 && (
                        <span className="ml-2 text-green-600 font-semibold">(Top Referrer)</span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">
                      Applied: {new Date(app.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setFilters({ ...filters, page: Math.max(filters.page - 1, 1) })}
          disabled={filters.page === 1}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
          disabled={filters.page * filters.limit >= total}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default DigitalMarketingApplicationsPage;