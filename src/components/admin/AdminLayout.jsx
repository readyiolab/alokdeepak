import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (!token) {
    navigate('/admin/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-[#1a2957] text-white fixed h-full p-6"
      >
        <h2 className="text-2xl font-bold mb-8">Sownmark Admin</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin/dashboard"
                className="block py-2 px-4 rounded-md hover:bg-[#142145] transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blog/create"
                className="block py-2 px-4 rounded-md hover:bg-[#142145] transition-colors"
              >
                Create Blog
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blogs"
                className="block py-2 px-4 rounded-md hover:bg-[#142145] transition-colors"
              >
                All Blogs
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-4 rounded-md hover:bg-[#142145] transition-colors"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#1a2957]">Admin Panel</h1>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;