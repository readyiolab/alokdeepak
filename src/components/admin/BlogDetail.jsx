import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../../../services/api';
import { motion } from 'framer-motion';
import { Edit, ArrowLeft } from 'lucide-react';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    const fetchBlog = async () => {
      try {
        const response = await getBlogById(id);
        setBlog(response.data);
      } catch (err) {
        setError('Failed to fetch blog');
      }
    };
    fetchBlog();
  }, [id, navigate, token]);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 text-gray-900 text-center">
        {error || 'Loading...'}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">{blog.title}</h1>
      {error && <p className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
        {blog.featured_image && (
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
          />
        )}
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{blog.meta_description}</p>
        <div
          className="prose prose-sm sm:prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <div className="mt-6 space-y-2 text-sm sm:text-base">
          <p className="text-gray-900">
            <strong>Author:</strong> {blog.author}
          </p>
          <p className="text-gray-900">
            <strong>Status:</strong> {blog.status}
          </p>
          <p className="text-gray-900">
            <strong>Categories:</strong> {blog.categories.join(', ')}
          </p>
          <p className="text-gray-900">
            <strong>Tags:</strong> {blog.tags.join(', ')}
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Link
            to={`/admin/blog/edit/${blog.id}`}
            className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Edit className="w-5 h-5 mr-2" />
            Edit
          </Link>
          <button
            onClick={() => navigate('/admin/blogs')}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;