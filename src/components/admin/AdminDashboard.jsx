import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBlogs } from '../../../services/api';
import { motion } from 'framer-motion';

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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-semibold text-black mb-6 tracking-tight">Dashboard</h1>
      {error && (
        <p className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Total Blogs", value: blogs.length },
          { title: "Published Blogs", value: blogs.filter((blog) => blog.status === 'published').length },
          { title: "Draft Blogs", value: blogs.filter((blog) => blog.status === 'draft').length },
        ].map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-lg font-medium text-gray-800">{stat.title}</h2>
            <p className="text-3xl font-semibold text-black">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <Link
        to="/admin/blog/create"
        className="inline-block mb-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium tracking-wide"
      >
        Create New Blog
      </Link>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-800 text-white">
            <tr>
              {["Title", "Status", "Categories", "Tags", "Actions"].map((header) => (
                <th key={header} className="p-4 text-left font-medium tracking-wide">
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
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <td className="p-4 text-gray-800">{blog.title}</td>
                <td className="p-4 text-gray-600 capitalize">{blog.status}</td>
                <td className="p-4 text-gray-600">{blog.categories.join(', ')}</td>
                <td className="p-4 text-gray-600">{blog.tags.join(', ')}</td>
                <td className="p-4">
                  <Link
                    to={`/admin/blog/edit/${blog.id}`}
                    className="text-gray-800 hover:text-black font-medium mr-4 transition-colors duration-150"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/admin/blog/${blog.id}`}
                    className="text-gray-800 hover:text-black font-medium transition-colors duration-150"
                  >
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