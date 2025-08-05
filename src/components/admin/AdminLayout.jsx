import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Shadcn/UI Button
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Shadcn/UI Sheet
import { cn } from '@/lib/utils'; // Shadcn/UI cn utility

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

  const navItems = [
    { to: '/admin/dashboard', label: 'Dashboard' },
    { to: '/admin/blog/create', label: 'Create Blog' },
    { to: '/admin/blogs', label: 'All Blogs' },
    { to: '/admin/jobs', label: 'Manage Jobs' },
    { to: '/admin/marketing-applications', label: 'Digital Marketing Applications' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Mobile Menu Button */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              'lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white hover:bg-gray-700',
              'focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded-md p-2'
            )}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-900 text-white p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold tracking-tight text-white">Admin</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-gray-200 hover:text-white hover:bg-gray-800"
                aria-label="Close sidebar"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex-1 px-6 py-6 overflow-y-auto">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Button
                      asChild
                      variant="ghost"
                      className={cn(
                        'w-full justify-start py-3 px-4 text-sm font-medium',
                        'text-gray-200 hover:text-white hover:bg-gray-800',
                        'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600'
                      )}
                    >
                      <Link to={item.to} onClick={() => setIsSidebarOpen(false)}>
                        {item.label}
                      </Link>
                    </Button>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-800">
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start py-3 px-4 text-sm font-medium',
                      'text-gray-200 hover:text-white hover:bg-red-800',
                      'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-600'
                    )}
                    onClick={() => {
                      handleLogout();
                      setIsSidebarOpen(false);
                    }}
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-gray-900 text-white overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold tracking-tight text-white">Admin</h2>
          </div>
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      'w-full justify-start py-3 px-4 text-sm font-medium',
                      'text-gray-200 hover:text-white hover:bg-gray-800',
                      'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600'
                    )}
                  >
                    <Link to={item.to}>{item.label}</Link>
                  </Button>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-800">
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start py-3 px-4 text-sm font-medium',
                    'text-gray-200 hover:text-white hover:bg-red-800',
                    'focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-red-600'
                  )}
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="ml-12 lg:ml-0 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Admin Panel
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-lg shadow-sm min-h-[calc(100vh-8rem)]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;