import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Search, Edit, Trash2 } from 'lucide-react';

const JobsAdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ department: '', location: '', job_type: '', status: '' });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchJobs();
  }, [filters, page, navigate, token]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({ ...filters, page, limit: 10 }).toString();
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setJobs(data.jobs);
        setTotal(data.total);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
    setLoading(false);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          fetchJobs();
        } else {
          console.error('Failed to delete job');
        }
      } catch (error) {
        console.error('Error deleting job:', error);
      }
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
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Manage Job Postings</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/admin/jobs/create"
            className="inline-flex items-center bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Create New Job
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="department"
                placeholder="Filter by department"
                value={filters.department}
                onChange={handleFilterChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              />
            </div>
            <select
              name="job_type"
              value={filters.job_type}
              onChange={handleFilterChange}
              className="w-full sm:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            >
              <option value="">All Job Types</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full sm:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            >
              <option value="">All Statuses</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>
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
          {jobs.length === 0 ? (
            <p className="text-gray-900 text-center">No jobs found.</p>
          ) : (
            jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{job.department} • {job.job_type} • {job.location}</p>
                    <p className="text-sm text-gray-500">Status: {job.status}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/jobs/edit/${job.id}`}
                      className="p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
                      aria-label={`Edit ${job.title}`}
                    >
                      <Edit className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                      aria-label={`Delete ${job.title}`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/admin/jobs/${job.id}/applications`}
                      className="p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
                      aria-label={`View applications for ${job.title}`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * 10 >= total}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default JobsAdminPage;