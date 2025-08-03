import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBlogs, deleteBlog } from '../../../services/api';
import { motion } from 'framer-motion';
import { FileText, Edit, Eye, Trash2 } from 'lucide-react';

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
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">All Blogs</h1>
      {error && <p className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>}
      <Link
        to="/admin/blog/create"
        className="inline-flex items-center mb-6 bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
      >
        <FileText className="w-5 h-5 mr-2" />
        Create New Blog
      </Link>
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              {['Title', 'Status', 'Categories', 'Tags', 'Actions'].map((header) => (
                <th key={header} className="p-3 sm:p-4 text-left font-medium tracking-wide text-xs sm:text-sm">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <motion.tr
                key={blog.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <td className="p-3 sm:p-4 text-gray-800 text-xs sm:text-sm">{blog.title}</td>
                <td className="p-3 sm:p-4 text-gray-600 capitalize text-xs sm:text-sm">{blog.status}</td>
                <td className="p-3 sm:p-4 text-gray-600 text-xs sm:text-sm">{blog.categories.join(', ')}</td>
                <td className="p-3 sm:p-4 text-gray-600 text-xs sm:text-sm">{blog.tags.join(', ')}</td>
                <td className="p-3 sm:p-4 flex space-x-2">
                  <Link
                    to={`/admin/blog/edit/${blog.id}`}
                    className="text-gray-900 hover:text-gray-700 font-medium text-xs sm:text-sm transition-colors duration-150 flex items-center"
                    aria-label={`Edit ${blog.title}`}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Link>
                  <Link
                    to={`/admin/blog/${blog.id}`}
                    className="text-gray-900 hover:text-gray-700 font-medium text-xs sm:text-sm transition-colors duration-150 flex items-center"
                    aria-label={`View ${blog.title}`}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:text-red-800 font-medium text-xs sm:text-sm transition-colors duration-150 flex items-center"
                    aria-label={`Delete ${blog.title}`}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default BlogList;