import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, XCircle } from 'lucide-react';

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
    fetchJob();
    fetchApplications();
  }, [jobId, filters]);

  const fetchJob = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log("Fetched Job:", data); // ✅ Check this in DevTools

    if (response.ok) {
      setJob(data); // ✅ This should set the job
    } else {
      console.error("Backend error:", data.error);
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
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeInUp} className="mb-8">
        <h2 className="text-3xl font-bold text-[#1a2957] mb-4">
          Applications for {job ? job.title : 'Job'}
        </h2>
        <div className="flex justify-between items-center">
          <Link
            to="/admin/jobs"
            className="bg-[#1a2957] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#142145] transition-colors"
          >
            Back to Jobs
          </Link>
          <select
            name="status"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
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
              <motion.div key={app.id} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2957]">{app.full_name}</h3>
                    <p className="text-gray-600">{app.email} • {app.phone}</p>
                    <p className="text-sm text-gray-500">Status: {app.status}</p>
                    {app.linkedin_url && (
                      <a href={app.linkedin_url} target="_blank" className="text-[#1a2957] text-sm hover:underline">
                        LinkedIn Profile
                      </a>
                    )}
                    <a href={app.resume_url} target="_blank" className="text-[#1a2957] text-sm hover:underline ml-4">
                      View Resume
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app.id, e.target.value)}
                      className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
                    >
                      <option value="new">New</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="interviewed">Interviewed</option>
                      <option value="rejected">Rejected</option>
                      <option value="hired">Hired</option>
                    </select>
                  </div>
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

export default JobApplicationsPage;