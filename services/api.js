

import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});
// const api = axios.create({
//   baseURL: 'http://localhost:3002/api', // Hardcoded backend URL
//   withCredentials: true, // Only if you use cookies/session/auth
// });

// Interceptor to automatically add Authorization header with token from localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// --- Admin Authentication ---
export const loginAdmin = async (username, password) => {
  return api.post('/admin/auth/login', { username, password });
};

// --- Blog Routes ---
// Public routes
export const getAllBlogs = async () => {
  return api.get('/blogs');
};

export const getBlogById = async (id) => {
  return api.get(`/blogs/${id}`);
};

export const getCommentsByBlogId = async (id) => {
  return api.get(`/blogs/${id}/comments`);
};

export const incrementLikes = async (id) => {
  return api.post(`/blogs/${id}/likes`);
};

export const incrementShares = async (id) => {
  return api.post(`/blogs/${id}/shares`);
};

// Authenticated routes
export const createComment = async (id, data) => {
  return api.post(`/blogs/${id}/comments`, {
    user_name: data.name || 'Anonymous', // Map frontend 'name' to backend 'user_name'
    user_email: data.email || null, // Map frontend 'email' to backend 'user_email'
    content: data.content,
    user_id: data.user_id || undefined, // Include only for authenticated users
  });
};

// Admin routes
export const createBlog = async (data) => {
  return api.post('/blogs', data);
};

export const updateBlog = async (id, data) => {
  return api.put(`/blogs/${id}`, data);
};

export const deleteBlog = async (id) => {
  return api.delete(`/blogs/${id}`);
};

export const deleteComment = async (id, commentId) => {
  return api.delete(`/blogs/${id}/comments/${commentId}`);
};

// --- Job Routes ---
// Public routes
export const getJobs = async () => {
  return api.get('/jobs');
};

export const getJobById = async (id) => {
  return api.get(`/jobs/${id}`);
};

export const submitApplication = async (data) => {
  return api.post('/jobs/apply', data);
};

// Admin routes
export const createJob = async (data) => {
  return api.post('/jobs', data);
};

export const updateJob = async (id, data) => {
  return api.put(`/jobs/${id}`, data);
};

export const deleteJob = async (id) => {
  return api.delete(`/jobs/${id}`);
};

export const getApplications = async (job_id) => {
  return api.get(`/jobs/${job_id}/applications`);
};

export const updateApplicationStatus = async (id, status) => {
  return api.put(`/jobs/applications/${id}/status`, { status });
};



/// --- Digital Marketing Routes ---
export const applyForDigitalMarketing = async (data) => {
  return api.post('/marketing/apply', data);
};

// --- Combined Applications Route ---
export const getAllApplications = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  return api.get(`/admin/applications?${query}`);
};

// --- Specific Application Fetchers ---
export const getAllJobApplications = async (filters = {}) => {
  return api.get(`/admin/applications?type=job&${new URLSearchParams(filters).toString()}`);
};

export const getAllDigitalMarketingApplications = async (filters = {}) => {
  return api.get(`/admin/applications?type=digital-marketing&${new URLSearchParams(filters).toString()}`);
};
export default api;