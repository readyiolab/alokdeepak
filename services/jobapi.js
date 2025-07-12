
import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const fetchJobs = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch jobs');
  }
};

export const fetchJobById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch job');
  }
};

export const submitApplication = async (applicationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/apply`, applicationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to submit application');
  }
};
