import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Link as LinkIcon } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeInUp} className="mb-8">
        <h2 className="text-3xl font-bold text-[#1a2957] mb-4">
          Digital Marketing Applications
        </h2>
        <div className="flex justify-between items-center">
          <Link
            to="/admin/dashboard"
            className="bg-[#1a2957] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#142145] transition-colors"
          >
            Back to Dashboard
          </Link>
          <input
            type="number"
            placeholder="Min Referrals (e.g., 10)"
            value={filters.minReferrals}
            onChange={(e) => setFilters({ ...filters, minReferrals: e.target.value, page: 1 })}
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
          />
        </div>
      </motion.div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {applications.length === 0 ? (
            <p>No applications found.</p>
          ) : (
            applications.map((app) => (
              <motion.div
                key={app.id}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2957] flex items-center">
                      <User className="w-5 h-5 mr-2" /> {app.name}
                    </h3>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2" /> {app.email}
                    </p>
                    <p className="text-gray-600 flex items-center">
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

      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={() => setFilters({ ...filters, page: Math.max(filters.page - 1, 1) })}
          disabled={filters.page === 1}
          className="px-4 py-2 rounded-full bg-[#1a2957] text-white disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
          disabled={filters.page * filters.limit >= total}
          className="px-4 py-2 rounded-full bg-[#1a2957] text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingApplicationsPage;