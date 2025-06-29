import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBlogs, deleteBlog } from '../../../services/api';
import { motion } from 'framer-motion';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to fetch blogs');
      }
    };
    fetchBlogs();
  }, [navigate, token]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id, token);
        setBlogs(blogs.filter((blog) => blog.id !== id));
        alert('Blog deleted successfully');
      } catch (err) {
        setError('Failed to delete blog');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-[#1a2957] mb-6">All Blogs</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Link
        to="/admin/blog/create"
        className="inline-block mb-6 bg-[#1a2957] text-white px-6 py-3 rounded-md hover:bg-[#142145]"
      >
        Create New Blog
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a2957] text-white">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Categories</th>
              <th className="p-3 text-left">Tags</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b">
                <td className="p-3">{blog.title}</td>
                <td className="p-3">{blog.status}</td>
                <td className="p-3">{blog.categories.join(', ')}</td>
                <td className="p-3">{blog.tags.join(', ')}</td>
                <td className="p-3">
                  <Link
                    to={`/admin/blog/edit/${blog.id}`}
                    className="text-[#1a2957] hover:underline mr-2"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/admin/blog/${blog.id}`}
                    className="text-[#1a2957] hover:underline mr-2"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default BlogList;