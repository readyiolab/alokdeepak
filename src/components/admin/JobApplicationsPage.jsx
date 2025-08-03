import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

const JobApplicationsPage = () => {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);
  const [job, setJob] = useState(null);
  const [filters, setFilters] = useState({ status: '', page: 1, limit: 10 });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchJob();
    fetchApplications();
  }, [jobId, filters, navigate, token]);

  const fetchJob = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setJob(data);
      } else {
        console.error('Backend error:', data.error);
      }
    } catch (error) {
      console.error('Error fetching job:', error);
    }
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({ status: filters.status, page: filters.page, limit: filters.limit }).toString();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}/applications?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setApplications(data.applications);
        setTotal(data.total);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
    setLoading(false);
  };

  const handleStatusChange = async (applicationId, status) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/applications/${applicationId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        fetchApplications();
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
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
          Applications for {job ? job.title : 'Job'}
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/admin/jobs"
            className="inline-flex items-center bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Jobs
          </Link>
          <select
            name="status"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
            className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="interviewed">Interviewed</option>
            <option value="rejected">Rejected</option>
            <option value="hired">Hired</option>
          </select>
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      {app.full_name}
                    </h3>
                    <p className="text-gray-600 text-sm">{app.email} • {app.phone}</p>
                    <p className="text-sm text-gray-500">Status: {app.status}</p>
                    <div className="flex space-x-4">
                      {app.linkedin_url && (
                        <a
                          href={app.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-150"
                        >
                          LinkedIn Profile
                        </a>
                      )}
                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-150"
                      >
                        View Resume
                      </a>
                    </div>
                  </div>
                  <select
                    value={app.status}
                    onChange={(e) => handleStatusChange(app.id, e.target.value)}
                    className="w-full sm:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                    aria-label={`Change status for ${app.full_name}`}
                  >
                    <option value="new">New</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="rejected">Rejected</option>
                    <option value="hired">Hired</option>
                  </select>
                </div>
                {app.cover_letter && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Cover Letter</h4>
                    <p className="text-gray-600 text-sm">{app.cover_letter}</p>
                  </div>
                )}
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

export default JobApplicationsPage;