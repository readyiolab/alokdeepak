import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AdminLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  if (!token) {
    navigate("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-64 bg-black text-white fixed h-full p-6 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-8 tracking-tight">Sownmark Admin</h2>
        <nav>
          <ul className="space-y-2">
            {[
              { to: "/admin/dashboard", label: "Dashboard" },
              { to: "/admin/blog/create", label: "Create Blog" },
              { to: "/admin/blogs", label: "All Blogs" },
              { to: "/admin/jobs", label: "Manage Jobs" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="block py-2.5 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2.5 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium tracking-wide"
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
        <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-black tracking-tight">Admin Panel</h1>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 bg-gray-100 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;