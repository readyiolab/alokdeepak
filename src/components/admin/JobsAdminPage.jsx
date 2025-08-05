import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Search, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      // Only include non-empty filter values in the query
      const activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value && value !== 'all')
      );
      const query = new URLSearchParams({ ...activeFilters, page, limit: 10 }).toString();
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

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
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
      className="p-4 sm:p-6"
    >
      <motion.div {...fadeInUp} className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">Manage Job Postings</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="default">
            <Link to="/admin/jobs/create" className="inline-flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Create New Job
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                name="department"
                placeholder="Filter by department"
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              name="job_type"
              value={filters.job_type}
              onValueChange={(value) => handleFilterChange('job_type', value)}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Job Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Job Types</SelectItem>
                <SelectItem value="full-time">Full-Time</SelectItem>
                <SelectItem value="part-time">Part-Time</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
            <Select
              name="status"
              value={filters.status}
              onValueChange={(value) => handleFilterChange('status', value)}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
          {jobs.length === 0 ? (
            <p className="text-foreground text-center">No jobs found.</p>
          ) : (
            jobs.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <Briefcase className="w-5 h-5 mr-2" />
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                      <div className="space-y-2">
                        <p className="text-muted-foreground text-sm">
                          {job.department} • {job.job_type} • {job.location}
                        </p>
                        <p className="text-muted-foreground text-sm">Status: {job.status}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild variant="default" size="icon">
                          <Link to={`/admin/jobs/edit/${job.id}`} aria-label={`Edit ${job.title}`}>
                            <Edit className="w-5 h-5" />
                          </Link>
                        </Button>
                        <Button
                          onClick={() => handleDelete(job.id)}
                          variant="destructive"
                          size="icon"
                          aria-label={`Delete ${job.title}`}
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                        <Button asChild variant="default" size="icon">
                          <Link to={`/admin/jobs/${job.id}/applications`} aria-label={`View applications for ${job.title}`}>
                            <Briefcase className="w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          variant="default"
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * 10 >= total}
          variant="default"
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
};

export default JobsAdminPage;