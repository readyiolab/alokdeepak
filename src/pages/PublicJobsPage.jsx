import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Search, Filter, MapPin, Clock, Award } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PublicJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ department: '', location: '', job_type: '' });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({ ...filters, page, limit: 10 }).toString();
      const response = await fetch(`/api/jobs?${query}`);
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Job Openings at Sownmark | Careers</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Sownmark. Find jobs in tech, marketing, and more. Apply today!"
        />
        <meta
          name="keywords"
          content="Sownmark jobs, career opportunities, tech jobs, marketing jobs, remote jobs"
        />
        <link rel="canonical" href="https://www.sownmark.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #2a4365 0%, #4c7bb8 100%)' }}
      >
        <div className="container px-4 sm:px-6 md:px-8 text-center text-white">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Join the Sownmark Team
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Discover exciting career opportunities and grow with us in a dynamic environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="department"
                placeholder="Search by department"
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
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            >
              <option value="">All Locations</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="on-site">On-site</option>
            </select>
          </motion.div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 md:px-8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.1 } } }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {jobs.length === 0 ? (
                <p>No jobs found.</p>
              ) : (
                jobs.map((job) => (
                  <motion.div key={job.id} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                    <Helmet>
                      <script type="application/ld+json">
                        {JSON.stringify({
                          '@context': 'https://schema.org',
                          '@type': 'JobPosting',
                          title: job.title,
                          description: job.summary,
                          datePosted: job.created_at,
                          employmentType: job.job_type.toUpperCase(),
                          hiringOrganization: {
                            '@type': 'Organization',
                            name: 'Sownmark',
                            sameAs: 'https://www.sownmark.com',
                          },
                          jobLocation: {
                            '@type': 'Place',
                            address: {
                              '@type': 'PostalAddress',
                              addressLocality: job.location,
                            },
                          },
                          experienceRequirements: {
                            '@type': 'OccupationalExperienceRequirements',
                            monthsOfExperience: job.experience_level === 'entry' ? 0 : job.experience_level === 'mid' ? 24 : 60,
                          },
                          baseSalary: job.compensation ? {
                            '@type': 'MonetaryAmount',
                            currency: 'INR',
                            value: {
                              '@type': 'QuantitativeValue',
                              value: job.compensation,
                              unitText: 'YEAR',
                            },
                          } : undefined,
                        })}
                      </script>
                    </Helmet>
                    <h3 className="text-xl font-bold text-[#1a2957]">{job.title}</h3>
                    <div className="flex gap-2 text-gray-600 text-sm mt-2">
                      <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.department}</span>
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.job_type}</span>
                      <span className="flex items-center"><Award className="w-4 h-4 mr-1" /> {job.experience_level}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{job.summary}</p>
                    <Link
                      to={`/careers/${job.id}`}
                      className="mt-4 inline-block bg-[#1a2957] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#142145] transition-colors"
                    >
                      View Details
                    </Link>
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
      </section>
    </div>
  );
};

export default PublicJobsPage;