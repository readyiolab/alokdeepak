import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2 } from 'lucide-react';

const JobForm = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');
  const isEdit = !!jobId;

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    job_type: '',
    location: '',
    experience_level: '',
    summary: '',
    responsibilities: [''],
    qualifications: [''],
    preferred_skills: [''],
    compensation: '',
    timezone: '',
    status: 'open',
    expiry_date: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    if (isEdit) {
      fetchJob();
    }
  }, [jobId, navigate, token]);

  const fetchJob = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({
          ...data,
          responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : [''],
          qualifications: Array.isArray(data.qualifications) ? data.qualifications : [''],
          preferred_skills: Array.isArray(data.preferred_skills) ? data.preferred_skills : [''],
          expiry_date: data.expiry_date ? data.expiry_date.split('T')[0] : '',
        });
      } else {
        setError(data.error || 'Error loading job');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to fetch job details');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeArrayField = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const url = isEdit
        ? `${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`
        : `${import.meta.env.VITE_API_URL}/api/jobs`;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/admin/jobs');
      } else {
        setError(data.error || 'Failed to save job');
      }
    } catch (error) {
      setError('Failed to save job');
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
      {...fadeInUp}
      className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
        {isEdit ? 'Edit Job Posting' : 'Create Job Posting'}
      </h2>
      {error && <p className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <select
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Experience Level</label>
          <select
            name="experience_level"
            value={formData.experience_level}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          >
            <option value="">Select Experience Level</option>
            <option value="entry">Entry</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            rows="4"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
          {formData.responsibilities.map((item, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(index, 'responsibilities', e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                required
                aria-required="true"
              />
              {formData.responsibilities.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('responsibilities', index)}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  aria-label="Remove responsibility"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('responsibilities')}
            className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            <Plus className="w-5 h-5 inline-block mr-1" />
            Add Responsibility
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Qualifications</label>
          {formData.qualifications.map((item, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(index, 'qualifications', e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
                required
                aria-required="true"
              />
              {formData.qualifications.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('qualifications', index)}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  aria-label="Remove qualification"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('qualifications')}
            className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            <Plus className="w-5 h-5 inline-block mr-1" />
            Add Qualification
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Skills (Optional)</label>
          {formData.preferred_skills.map((item, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(index, 'preferred_skills', e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              />
              {formData.preferred_skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('preferred_skills', index)}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  aria-label="Remove preferred skill"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField('preferred_skills')}
            className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            <Plus className="w-5 h-5 inline-block mr-1" />
            Add Preferred Skill
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Compensation (Optional)</label>
          <input
            type="text"
            name="compensation"
            value={formData.compensation}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Timezone (Optional)</label>
          <input
            type="text"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date (Optional)</label>
          <input
            type="date"
            name="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
        >
          <Save className="w-5 h-5 inline-block mr-2" />
          {isEdit ? 'Update Job' : 'Create Job'}
        </button>
      </form>
    </motion.div>
  );
};

export default JobForm;