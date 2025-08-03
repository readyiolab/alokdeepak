import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBlogs } from '../../../services/api';
import { motion } from 'framer-motion';
import { FileText, Edit, Eye } from 'lucide-react';

const AdminDashboard = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">Dashboard</h1>
      {error && (
        <p className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {[
          { title: 'Total Blogs', value: blogs.length, icon: FileText },
          { title: 'Published Blogs', value: blogs.filter((blog) => blog.status === 'published').length, icon: FileText },
          { title: 'Draft Blogs', value: blogs.filter((blog) => blog.status === 'draft').length, icon: FileText },
        ].map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4"
          >
            <stat.icon className="w-8 h-8 text-gray-600" />
            <div>
              <h2 className="text-sm sm:text-lg font-medium text-gray-700">{stat.title}</h2>
              <p className="text-xl sm:text-3xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Link
        to="/admin/blog/create"
        className="inline-flex items-center mb-6 bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium tracking-wide"
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
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;