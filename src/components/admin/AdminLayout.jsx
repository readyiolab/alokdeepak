import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Menu } from 'lucide-react';

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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="lg:w-64 w-64 bg-gray-900 text-white fixed h-full p-6 shadow-2xl lg:shadow-none z-40 lg:initial lg:animate-none lg:transition-none"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">Sownmark Admin</h2>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
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
                  className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="lg:ml-64 flex-1 transition-all duration-300">
        <header className="bg-white shadow-md p-4 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Admin Panel</h1>
          </div>
        </header>
        <main className="p-4 sm:p-6 bg-gray-100 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;