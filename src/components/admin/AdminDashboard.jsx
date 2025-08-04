import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBlogs } from '../../../services/api';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Edit, 
  Eye, 
  Briefcase, 
  Users, 
  TrendingUp,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  RefreshCw,
  Plus
} from 'lucide-react';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: [],
    jobApplications: [],
    digitalMarketingApplications: [],
    stats: {
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
      totalJobApplications: 0,
      approvedJobApplications: 0,
      pendingJobApplications: 0,
      rejectedJobApplications: 0,
      totalDigitalMarketingApplications: 0,
      recentApplications: 0
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchDashboardData();
  }, [navigate, token]);

  const fetchDashboardData = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError('');

    try {
      const [blogsResponse, jobApplicationsResponse, digitalMarketingResponse] = await Promise.allSettled([
        getAllBlogs(),
        fetchJobApplications(),
        fetchDigitalMarketingApplications()
      ]);

      let blogs = [];
      let jobApplications = [];
      let digitalMarketingApplications = [];

      if (blogsResponse.status === 'fulfilled') {
        blogs = blogsResponse.value.data || [];
      } else {
        console.error('Failed to fetch blogs:', blogsResponse.reason);
      }

      if (jobApplicationsResponse.status === 'fulfilled') {
        jobApplications = jobApplicationsResponse.value || [];
      } else {
        console.error('Failed to fetch job applications:', jobApplicationsResponse.reason);
      }

      if (digitalMarketingResponse.status === 'fulfilled') {
        digitalMarketingApplications = digitalMarketingResponse.value || [];
      } else {
        console.error('Failed to fetch digital marketing applications:', digitalMarketingResponse.reason);
      }

      const stats = calculateStats(blogs, jobApplications, digitalMarketingApplications);

      setDashboardData({
        blogs,
        jobApplications,
        digitalMarketingApplications,
        stats
      });

    } catch (err) {
      setError('Failed to fetch dashboard data. Please try again.');
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const fetchJobApplications = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/job-applications`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return [];
      }
      throw new Error('Failed to fetch job applications');
    }
    
    const data = await response.json();
    return data.applications || [];
  };

  const fetchDigitalMarketingApplications = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/digital-marketing-applications`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return [];
      }
      throw new Error('Failed to fetch digital marketing applications');
    }
    
    const data = await response.json();
    return data.applications || [];
  };

  const calculateStats = (blogs, jobApplications, digitalMarketingApplications) => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    return {
      totalBlogs: blogs.length,
      publishedBlogs: blogs.filter(blog => blog.status === 'published').length,
      draftBlogs: blogs.filter(blog => blog.status === 'draft').length,
      totalJobApplications: jobApplications.length,
      approvedJobApplications: jobApplications.filter(app => app.status === 'approved').length,
      pendingJobApplications: jobApplications.filter(app => app.status === 'pending').length,
      rejectedJobApplications: jobApplications.filter(app => app.status === 'rejected').length,
      totalDigitalMarketingApplications: digitalMarketingApplications.length,
      recentApplications: [
        ...jobApplications.filter(app => new Date(app.createdAt) > oneWeekAgo),
        ...digitalMarketingApplications.filter(app => new Date(app.createdAt) > oneWeekAgo)
      ].length
    };
  };

  const handleRefresh = () => {
    fetchDashboardData(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] px-4">
        <div className="flex items-center space-x-2">
          <RefreshCw className="w-6 h-6 animate-spin text-gray-600" />
          <span className="text-gray-600 text-sm md:text-base font-medium">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Blogs',
      value: dashboardData.stats.totalBlogs,
      icon: FileText,
      color: 'bg-blue-500',
      description: `${dashboardData.stats.publishedBlogs} published, ${dashboardData.stats.draftBlogs} drafts`,
      link: '/admin/blogs'
    },
    {
      title: 'Job Applications',
      value: dashboardData.stats.totalJobApplications,
      icon: Briefcase,
      color: 'bg-green-500',
      description: `${dashboardData.stats.pendingJobApplications} pending review`,
      link: '/admin/jobs'
    },
    {
      title: 'Marketing Applications',
      value: dashboardData.stats.totalDigitalMarketingApplications,
      icon: TrendingUp,
      color: 'bg-purple-500',
      description: 'Digital marketing inquiries',
      link: '/admin/marketing-applications'
    },
    {
      title: 'Recent Applications',
      value: dashboardData.stats.recentApplications,
      icon: Calendar,
      color: 'bg-orange-500',
      description: 'Last 7 days',
      link: '/admin/jobs'
    }
  ];

  const applicationStatusCards = [
    {
      title: 'Approved',
      value: dashboardData.stats.approvedJobApplications,
      icon: CheckCircle,
      color: 'text-green-600 bg-green-50'
    },
    {
      title: 'Pending',
      value: dashboardData.stats.pendingJobApplications,
      icon: Clock,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      title: 'Rejected',
      value: dashboardData.stats.rejectedJobApplications,
      icon: XCircle,
      color: 'text-red-600 bg-red-50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2">
        
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="inline-flex items-center px-3 py-2 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center"
        >
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
          <div>
            <p className="text-red-800 text-sm font-medium">{error}</p>
            <button
              onClick={() => fetchDashboardData()}
              className="text-red-600 hover:text-red-800 text-xs md:text-sm font-medium underline mt-1"
            >
              Try again
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
                <div className={`w-10 h-10 md:w-12 md:h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              {stat.link && (
                <Link
                  to={stat.link}
                  className="mt-3 md:mt-4 text-xs md:text-sm text-gray-900 hover:text-gray-700 font-medium inline-flex items-center transition-colors duration-200"
                >
                  View details
                  <Eye className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Application Status Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Job Application Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {applicationStatusCards.map((status, index) => (
            <motion.div
              key={status.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${status.color} rounded-lg p-4 flex items-center`}
            >
              <status.icon className="w-6 h-6 md:w-8 md:h-8 mr-3" />
              <div>
                <p className="text-lg md:text-2xl font-bold">{status.value}</p>
                <p className="text-xs md:text-sm font-medium">{status.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/admin/blog/create"
            className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
          >
            <Plus className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-gray-900 mr-3" />
            <div>
              <p className="text-sm md:text-base font-medium text-gray-900">Create New Blog</p>
              <p className="text-xs text-gray-600">Write and publish content</p>
            </div>
          </Link>
          <Link
            to="/admin/jobs"
            className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
          >
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-gray-900 mr-3" />
            <div>
              <p className="text-sm md:text-base font-medium text-gray-900">Manage Jobs</p>
              <p className="text-xs text-gray-600">Review applications</p>
            </div>
          </Link>
          <Link
            to="/admin/marketing-applications"
            className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
          >
            <Users className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-gray-900 mr-3" />
            <div>
              <p className="text-sm md:text-base font-medium text-gray-900">Marketing Apps</p>
              <p className="text-xs text-gray-600">Digital marketing inquiries</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Blogs Table */}
      {dashboardData.blogs.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-4 md:px-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-base md:text-lg font-semibold text-gray-900">Recent Blogs</h2>
            <Link
              to="/admin/blogs"
              className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-gray-50">
                <tr>
                  {['Title', 'Status', 'Categories', 'Tags', 'Actions'].map((header) => (
                    <th key={header} className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.blogs.slice(0, 5).map((blog) => (
                  <motion.tr
                    key={blog.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                    whileHover={{ backgroundColor: '#f9fafb' }}
                  >
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 truncate max-w-[200px] md:max-w-xs">
                        {blog.title}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        blog.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {blog.categories?.join(', ') || 'No categories'}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {blog.tags?.join(', ') || 'No tags'}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <Link
                          to={`/admin/blog/edit/${blog.id}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
                          aria-label={`Edit ${blog.title}`}
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/admin/blog/${blog.id}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-150"
                          aria-label={`View ${blog.title}`}
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminDashboard;