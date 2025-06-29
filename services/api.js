// import axios from 'axios';

// const api = axios.create({
// //   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
//   baseURL: 'http://localhost:3000/api',
// });

// export const loginAdmin = async (username, password) => {
//   return api.post('/admin/auth/login', { username, password });
// };

// export const createBlog = async (formData, token) => {
//   return api.post('/blogs', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const updateBlog = async (id, formData, token) => {
//   return api.put(`/blogs/${id}`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const deleteBlog = async (id, token) => {
//   return api.delete(`/blogs/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const getAllBlogs = async () => {
//   return api.get('/blogs');
// };

// export const getBlogById = async (id) => {
//   return api.get(`/blogs/${id}`);
// };

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

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

// Login API call (public, no token required)
export const loginAdmin = async (username, password) => {
  return api.post('/admin/auth/login', { username, password });
};

// Create a blog (protected, token added by interceptor)
export const createBlog = async (formData) => {
  return api.post('/blogs', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Update a blog (protected, token added by interceptor)
export const updateBlog = async (id, formData) => {
  return api.put(`/blogs/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Delete a blog (protected, token added by interceptor)
export const deleteBlog = async (id) => {
  return api.delete(`/blogs/${id}`);
};

// Get all blogs (protected or public, token added if needed)
export const getAllBlogs = async () => {
  return api.get('/blogs');
};

// Get a blog by ID (protected or public, token added if needed)
export const getBlogById = async (id) => {
  return api.get(`/blogs/${id}`);
};

export default api;