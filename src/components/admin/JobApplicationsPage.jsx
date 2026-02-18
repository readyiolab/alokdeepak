import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        setApplications(Array.isArray(data.applications) ? data.applications : []);
        setTotal(typeof data.total === 'number' ? data.total : 0);
      } else {
        console.error('API Error:', data.error || 'Unknown error');
        setApplications([]);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setApplications([]);
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
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
          Applications for {job ? job.title : 'Job'}
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="default">
            <Link to="/admin/jobs" className="inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Jobs
            </Link>
          </Button>
          <Select
            name="status"
            value={filters.status}
            onValueChange={(value) => setFilters({ ...filters, status: value, page: 1 })}
          >
            <SelectTrigger className="w-full sm:w-64">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
              <SelectItem value="interviewed">Interviewed</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="hired">Hired</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {loading ? (
        <p className="text-foreground text-center">Loading...</p>
      ) : (
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:gap-6"
        >
          {applications.length === 0 ? (
            <p className="text-foreground text-center">No applications found.</p>
          ) : (
            applications.map((app) => (
              <motion.div key={app.id} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <Briefcase className="w-5 h-5 mr-2" />
                      {app.full_name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm">{app.email} • {app.phone}</p>
                    <p className="text-muted-foreground text-sm">Status: {app.status}</p>
                    <div className="flex space-x-4">
                      {app.linkedin_url && (
                        <Button asChild variant="link">
                          <a href={app.linkedin_url} target="_blank" rel="noopener noreferrer">
                            LinkedIn Profile
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="link">
                        <a href={app.resume_url} target="_blank" rel="noopener noreferrer">
                          View Resume
                        </a>
                      </Button>
                    </div>
                    <Select
                      value={app.status}
                      onValueChange={(value) => handleStatusChange(app.id, value)}
                      aria-label={`Change status for ${app.full_name}`}
                    >
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="reviewed">Reviewed</SelectItem>
                        <SelectItem value="interviewed">Interviewed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="hired">Hired</SelectItem>
                      </SelectContent>
                    </Select>
                    {app.cover_letter && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-foreground">Cover Letter</h4>
                        <p className="text-muted-foreground text-sm">{app.cover_letter}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <Button
          onClick={() => setFilters({ ...filters, page: Math.max(filters.page - 1, 1) })}
          disabled={filters.page === 1}
          variant="default"
        >
          Previous
        </Button>
        <Button
          onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
          disabled={filters.page * filters.limit >= total}
          variant="default"
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
};

export default JobApplicationsPage;