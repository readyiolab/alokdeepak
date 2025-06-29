import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { createBlog, updateBlog, getBlogById } from from '../../../services/api';
import { createBlog, updateBlog, getBlogById } from '../../../services/api';

import { motion } from 'framer-motion';

const BlogForm = ({ isEdit = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    status: 'draft',
    categories: '',
    tags: '',
    meta_description: '',
    featured_image: null,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    if (isEdit && id) {
      const fetchBlog = async () => {
        try {
          const response = await getBlogById(id);
          setFormData({
            ...response.data,
            categories: response.data.categories.join(','),
            tags: response.data.tags.join(','),
            featured_image: null,
          });
        } catch (err) {
          setError('Failed to fetch blog');
        }
      };
      fetchBlog();
    }
  }, [id, isEdit, navigate, token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleContentChange = (content) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('author', formData.author);
    data.append('status', formData.status);
    data.append('categories', formData.categories);
    data.append('tags', formData.tags);
    data.append('meta_description', formData.meta_description);
    if (formData.featured_image) {
      data.append('featured_image', formData.featured_image);
    }

    try {
      if (isEdit) {
        await updateBlog(id, data, token);
        alert('Blog updated successfully');
      } else {
        await createBlog(data, token);
        alert('Blog created successfully');
      }
      navigate('/admin/blogs');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to save blog');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-[#1a2957] mb-6">
        {isEdit ? 'Edit Blog' : 'Create Blog'}
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Categories (comma-separated)</label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Meta Description</label>
          <input
            type="text"
            name="meta_description"
            value={formData.meta_description}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Featured Image</label>
          <input
            type="file"
            name="featured_image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-[#1a2957]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#1a2957] mb-2">Content</label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={handleContentChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                ['image', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link'],
              ],
            }}
            className="bg-white"
          />
        </div>
        <button
          type="submit"
          className="bg-[#1a2957] text-white px-6 py-3 rounded-md hover:bg-[#142145]"
        >
          {isEdit ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>
    </motion.div>
  );
};

export default BlogForm;