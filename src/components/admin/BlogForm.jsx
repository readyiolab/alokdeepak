import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createBlog, updateBlog, getBlogById } from '../../../services/api';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

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
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
        {isEdit ? 'Edit Blog' : 'Create Blog'}
      </h1>
      {error && <p className="text-red-600 bg-red-50 p-3 rounded-lg mb-6 text-sm font-medium">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 space-y-4">
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Categories (comma-separated)</label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Meta Description</label>
          <input
            type="text"
            name="meta_description"
            value={formData.meta_description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Featured Image</label>
          <input
            type="file"
            name="featured_image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 text-sm font-medium">Content</label>
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
            className="bg-white rounded-lg border"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
        >
          <Save className="w-5 h-5 mr-2" />
          {isEdit ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>
    </motion.div>
  );
};

export default BlogForm;