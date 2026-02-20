import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  getAllBlogs,
  getAllJobApplications,
  getAllDigitalMarketingApplications,
  getAllContactMessages,
} from '../../../services/api';

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
  Plus,
  Mail
} from 'lucide-react';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: [],
    jobApplications: [],
    digitalMarketingApplications: [],
    contactMessages: [],
    stats: {
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
      totalJobApplications: 0,
      approvedJobApplications: 0,
      pendingJobApplications: 0,
      rejectedJobApplications: 0,
      totalDigitalMarketingApplications: 0,
      totalContactMessages: 0,
      newContactMessages: 0,
      recentApplications: 0,
    },

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
      const [blogsResponse, jobApplicationsResponse, digitalMarketingResponse, contactMessagesResponse] = await Promise.allSettled([
        getAllBlogs(),
        getAllJobApplications(),
        getAllDigitalMarketingApplications(),
        getAllContactMessages(),
      ]);


      let blogs = [];
      let jobApplications = [];
      let digitalMarketingApplications = [];
      let contactMessages = [];

      if (blogsResponse.status === 'fulfilled') {
        blogs = blogsResponse.value.data || [];
      } else {
        console.error('Failed to fetch blogs:', blogsResponse.reason);
      }

      if (jobApplicationsResponse.status === 'fulfilled') {
        jobApplications = jobApplicationsResponse.value.data.applications || [];
      } else {
        console.error('Failed to fetch job applications:', jobApplicationsResponse.reason);
      }

      if (digitalMarketingResponse.status === 'fulfilled') {
        digitalMarketingApplications = digitalMarketingResponse.value.data.applications || [];
      } else {
        console.error('Failed to fetch digital marketing applications:', digitalMarketingResponse.reason);
      }

      if (contactMessagesResponse.status === 'fulfilled') {
        contactMessages = contactMessagesResponse.value.data.messages || [];
      } else {
        console.error('Failed to fetch contact messages:', contactMessagesResponse.reason);
      }

      const stats = calculateStats(blogs, jobApplications, digitalMarketingApplications, contactMessages);

      setDashboardData({
        blogs,
        jobApplications,
        digitalMarketingApplications,
        contactMessages,
        stats,
      });

    } catch (err) {
      setError('Failed to fetch dashboard data. Please try again.');
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const calculateStats = (blogs, jobApplications, digitalMarketingApplications, contactMessages) => {
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
      totalContactMessages: contactMessages.length,
      newContactMessages: contactMessages.filter(msg => msg.status === 'new').length,
      recentApplications: [
        ...jobApplications.filter(app => new Date(app.createdAt) > oneWeekAgo),
        ...digitalMarketingApplications.filter(app => new Date(app.createdAt) > oneWeekAgo),
        ...contactMessages.filter(msg => new Date(msg.created_at) > oneWeekAgo),
      ].length,
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
      link: '/admin/blogs',
    },
    {
      title: 'Job Applications',
      value: dashboardData.stats.totalJobApplications,
      icon: Briefcase,
      color: 'bg-green-500',
      description: `${dashboardData.stats.pendingJobApplications} pending review`,
      link: '/admin/jobs',
    },
    {
      title: 'Marketing Applications',
      value: dashboardData.stats.totalDigitalMarketingApplications,
      icon: TrendingUp,
      color: 'bg-purple-500',
      description: 'Digital marketing inquiries',
      link: '/admin/marketing-applications',
    },
    {
      title: 'Contact Messages',
      value: dashboardData.stats.totalContactMessages,
      icon: Mail,
      color: 'bg-red-500',
      description: `${dashboardData.stats.newContactMessages} new messages`,
      link: '/admin/contact-messages',
    },
    {
      title: 'Recent Activity',
      value: dashboardData.stats.recentApplications,
      icon: Calendar,
      color: 'bg-orange-500',
      description: 'Last 7 days',
      link: '/admin/contact-messages',
    },
  ];


  const applicationStatusCards = [
    {
      title: 'Approved',
      value: dashboardData.stats.approvedJobApplications,
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Pending',
      value: dashboardData.stats.pendingJobApplications,
      icon: Clock,
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      title: 'Rejected',
      value: dashboardData.stats.rejectedJobApplications,
      icon: XCircle,
      color: 'bg-red-50 text-red-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-6 px-4 sm:px-6 lg:px-8 "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <Button
          onClick={handleRefresh}
          disabled={refreshing}
          variant="default"
          size="sm"
          className="inline-flex items-center"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error}
              <Button
                variant="link"
                size="sm"
                onClick={() => fetchDashboardData()}
                className="ml-2 p-0 h-auto text-red-600 hover:text-red-800"
              >
                Try again
              </Button>
            </AlertDescription>
          </Alert>
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
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <CardDescription className="text-xs">{stat.description}</CardDescription>
                {stat.link && (
                  <Button variant="link" size="sm" asChild className="mt-2 p-0 h-auto">
                    <Link to={stat.link} className="flex items-center">
                      View details
                      <Eye className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Application Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Job Application Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {applicationStatusCards.map((status, index) => (
              <motion.div
                key={status.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={status.color}>
                  <CardContent className="flex items-center p-4">
                    <status.icon className="w-6 h-6 mr-3" />
                    <div>
                      <div className="text-2xl font-bold">{status.value}</div>
                      <p className="text-sm font-medium">{status.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                link: '/admin/blog/create',
                title: 'Create New Blog',
                description: 'Write and publish content',
                icon: Plus,
              },
              {
                link: '/admin/jobs',
                title: 'Manage Jobs',
                description: 'Review applications',
                icon: Briefcase,
              },
              {
                link: '/admin/marketing-applications',
                title: 'Marketing Apps',
                description: 'Digital marketing inquiries',
                icon: Users,
              },
              {
                link: '/admin/contact-messages',
                title: 'Contact Inquiries',
                description: 'View customer messages',
                icon: Mail,
              },
            ].map((action) => (

              <Button key={action.title} variant="ghost" asChild className="justify-start h-auto p-4">
                <Link to={action.link} className="flex items-center w-full">
                  <action.icon className="w-6 h-6 mr-3 text-gray-600 group-hover:text-gray-900" />
                  <div className="text-left">
                    <p className="text-sm font-medium">{action.title}</p>
                    <p className="text-xs text-gray-600">{action.description}</p>
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Blogs Table */}
      {dashboardData.blogs.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Blogs</CardTitle>
            <Button variant="link" size="sm" asChild>
              <Link to="/admin/blogs">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {['Title', 'Status', 'Categories', 'Tags', 'Actions'].map((header) => (
                    <TableHead key={header}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {dashboardData.blogs.slice(0, 5).map((blog) => (
                  <motion.tr
                    key={blog.id}
                    className="hover:bg-gray-50"
                    whileHover={{ backgroundColor: '#f9fafb' }}
                  >
                    <TableCell className="font-medium truncate max-w-[200px] md:max-w-xs">{blog.title}</TableCell>
                    <TableCell>
                      <Badge
                        variant={blog.status === 'published' ? 'default' : 'secondary'}
                        className={blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {blog.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{blog.categories?.join(', ') || 'No categories'}</TableCell>
                    <TableCell>{blog.tags?.join(', ') || 'No tags'}</TableCell>
                    <TableCell>
                      <div className="flex space-x-3">
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/admin/blog/edit/${blog.id}`} aria-label={`Edit ${blog.title}`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/admin/blog/${blog.id}`} aria-label={`View ${blog.title}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

export default AdminDashboard;