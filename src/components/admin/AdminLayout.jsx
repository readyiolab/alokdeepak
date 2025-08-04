import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Menu, X } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (!token) {
    navigate('/admin/login');
    return null;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-gray-700 transition-colors duration-200"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop Sidebar - Always visible on large screens */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-gray-900 text-white overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold tracking-tight text-white"> Admin</h2>
          </div>
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-3">
              {[
                { to: '/admin/dashboard', label: 'Dashboard' },
                { to: '/admin/blog/create', label: 'Create Blog' },
                { to: '/admin/blogs', label: 'All Blogs' },
                { to: '/admin/jobs', label: 'Manage Jobs' },
                { to: '/admin/marketing-applications', label: 'Digital Marketing Applications' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-800">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left py-3 px-4 rounded-lg hover:bg-red-800 transition-colors duration-200 text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-600"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar - Slides in from left */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white shadow-2xl"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold tracking-tight text-white"> Admin</h2>
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-1"
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-6 overflow-y-auto">
            <ul className="space-y-3">
              {[
                { to: '/admin/dashboard', label: 'Dashboard' },
                { to: '/admin/blog/create', label: 'Create Blog' },
                { to: '/admin/blogs', label: 'All Blogs' },
                { to: '/admin/jobs', label: 'Manage Jobs' },
                { to: '/admin/marketing-applications', label: 'Digital Marketing Applications' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-800">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsSidebarOpen(false);
                  }}
                  className="flex items-center w-full text-left py-3 px-4 rounded-lg hover:bg-red-800 transition-colors duration-200 text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-600"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                {/* Add some left padding on mobile to account for menu button */}
                <h1 className="ml-12 lg:ml-0 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Admin Panel
                </h1>
              </div>
              {/* You can add additional header items here like user profile, notifications, etc. */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-8rem)]">
              <div >
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;