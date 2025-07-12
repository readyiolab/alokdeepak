import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const JobForm = () => {
  const { id, jobId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const isEdit = !!jobId;

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    job_type: "",
    location: "",
    experience_level: "",
    summary: "",
    responsibilities: [""],
    qualifications: [""],
    preferred_skills: [""],
    compensation: "",
    timezone: "",
    status: "open",
    expiry_date: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEdit) {
      fetchJob();
    }
  }, [jobId]);

const fetchJob = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log("Fetched job data:", data); // ✅ Debug

    if (response.ok) {
      setFormData({
        ...data,
        responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : [""],
        qualifications: Array.isArray(data.qualifications) ? data.qualifications : [""],
        preferred_skills: Array.isArray(data.preferred_skills) ? data.preferred_skills : [""],
        expiry_date: data.expiry_date ? data.expiry_date.split("T")[0] : "",
      });
    } else {
      setError(data.error || "Error loading job");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setError("Failed to fetch job details");
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
    setFormData({ ...formData, [field]: [...formData[field], ""] });
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
      const method = isEdit ? "PUT" : "POST";
      const url = isEdit
        ? `${import.meta.env.VITE_API_URL}/api/jobs/${jobId}`
        : `${import.meta.env.VITE_API_URL}/api/jobs`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/admin/jobs");
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Failed to save job");
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
      className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-[#1a2957] mb-6">
        {isEdit ? "Edit Job Posting" : "Create Job Posting"}
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            required
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Experience Level
          </label>
          <select
            name="experience_level"
            value={formData.experience_level}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            required
          >
            <option value="">Select Experience Level</option>
            <option value="entry">Entry</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Responsibilities
          </label>
          {formData.responsibilities.map((item, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleArrayChange(index, "responsibilities", e.target.value)
                }
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
                required
              />
              {formData.responsibilities.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("responsibilities", index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-full"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("responsibilities")}
            className="mt-2 px-4 py-2 bg-[#1a2957] text-white rounded-full"
          >
            Add Responsibility
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Qualifications
          </label>
          {formData.qualifications.map((item, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleArrayChange(index, "qualifications", e.target.value)
                }
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
                required
              />
              {formData.qualifications.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("qualifications", index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-full"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("qualifications")}
            className="mt-2 px-4 py-2 bg-[#1a2957] text-white rounded-full"
          >
            Add Qualification
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Skills (Optional)
          </label>
          {formData.preferred_skills.map((item, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                type="text"
                value={item}
                onChange={(e) =>
                  handleArrayChange(index, "preferred_skills", e.target.value)
                }
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
              />
              {formData.preferred_skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField("preferred_skills", index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-full"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField("preferred_skills")}
            className="mt-2 px-4 py-2 bg-[#1a2957] text-white rounded-full"
          >
            Add Preferred Skill
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Compensation (Optional)
          </label>
          <input
            type="text"
            name="compensation"
            value={formData.compensation}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Timezone (Optional)
          </label>
          <input
            type="text"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expiry Date (Optional)
          </label>
          <input
            type="date"
            name="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            className="mt-1 w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a2957]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#1a2957] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#142145] transition-colors"
        >
          {isEdit ? "Update Job" : "Create Job"}
        </button>
      </form>
    </motion.div>
  );
};

export default JobForm;
