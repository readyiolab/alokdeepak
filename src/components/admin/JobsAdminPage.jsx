import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Search, Filter, Edit, Trash2 } from 'lucide-react';

const JobsAdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ department: '', location: '', job_type: '', status: '' });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

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
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeInUp} className="mb-8">
        <h2 className="text-3xl font-bold text-[#1a2957] mb-4">Manage Job Postings</h2>
        <div className="flex justify-between items-center">
          <Link
            to="/admin/jobs/create"
            className="bg-[#1a2957] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#142145] transition-colors"
          >
            Create New Job
          </Link>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="department"
                placeholder="Filter by department"
                value={filters.department}
                onChange={handleFilterChange}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
              />
            </div>
            <select
              name="job_type"
              value={filters.job_type}
              onChange={handleFilterChange}
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
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
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            >
              <option value="">All Statuses</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>
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
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            jobs.map((job) => (
              <motion.div key={job.id} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2957]">{job.title}</h3>
                    <p className="text-gray-600">{job.department} • {job.job_type} • {job.location}</p>
                    <p className="text-sm text-gray-500">Status: {job.status}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/admin/jobs/edit/${job.id}`}
                      className="p-2 rounded-full bg-[#1a2957] text-white hover:bg-[#142145]"
                    >
                      <Edit className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/admin/jobs/${job.id}/applications`}
                      className="p-2 rounded-full bg-[#1a2957] text-white hover:bg-[#142145]"
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

      <div className="mt-6 flex justify-center gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-full bg-[#1a2957] text-white disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * 10 >= total}
          className="px-4 py-2 rounded-full bg-[#1a2957] text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobsAdminPage;