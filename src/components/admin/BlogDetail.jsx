import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../../../services/api';
import { motion } from 'framer-motion';

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
    return <div className="max-w-7xl mx-auto p-6">{error || 'Loading...'}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-[#1a2957] mb-6">{blog.title}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {blog.featured_image && (
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <p className="text-[#1a2957]/80 mb-4">{blog.meta_description}</p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <p className="text-[#1a2957] mt-4">
          <strong>Author:</strong> {blog.author}
        </p>
        <p className="text-[#1a2957]">
          <strong>Status:</strong> {blog.status}
        </p>
        <p className="text-[#1a2957]">
          <strong>Categories:</strong> {blog.categories.join(', ')}
        </p>
        <p className="text-[#1a2957]">
          <strong>Tags:</strong> {blog.tags.join(', ')}
        </p>
        <div className="mt-6">
          <Lin
            to={`/admin/blog/edit/${blog.id}`}
            className="bg-[#1a2957] text-white px-4 py-2 rounded-md hover:bg-[#142145] mr-2"
          >
            Edit
          </Lin>
          <button
            onClick={() => navigate('/admin/blogs')}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;