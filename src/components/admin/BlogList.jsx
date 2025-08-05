import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';


import { FileText, Edit, Eye, Trash2, Heart, Share2, AlertCircle } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import { getAllBlogs, deleteBlog, incrementLikes, incrementShares } from '../../../services/api';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getAllBlogs();
        console.log('API Response:', response); // Debug: Log the response
        if (response.data && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setBlogs([]);
          console.warn('Unexpected data format:', response.data);
          setError('Unexpected data format received from server');
        }
      } catch (err) {
        setError('Failed to fetch blogs. Please try again.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [navigate, token]);

  const handleDelete = async (id, title) => {
    try {
      await deleteBlog(id, token);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      setError('Failed to delete blog');
      console.error('Delete Error:', err);
    }
  };

  const handleLike = async (id) => {
    const previousBlogs = [...blogs];
    setBlogs(blogs.map(blog => 
      blog.id === id ? { ...blog, likes: (blog.likes || 0) + 1 } : blog
    ));
    try {
      await incrementLikes(id);
    } catch (err) {
      setBlogs(previousBlogs);
      setError('Failed to like blog');
      console.error('Like Error:', err);
    }
  };

  const handleShare = async (idg) => {
    const previousBlogs = [...blogs];
    setBlogs(blogs.map(blog => 
      blog.id === id ? { ...blog, shares: (blog.shares || 0) + 1 } : blog
    ));
    try {
      await incrementShares(id);
    } catch (err) {
      setBlogs(previousBlogs);
      setError('Failed to share blog');
      console.error('Share Error:', err);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 text-sm">Loading blogs...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">All Blogs</h1>

      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </motion.div>
      )}

      <Button asChild className="mb-6">
        <Link
          to="/admin/blog/create"
          className="inline-flex items-center"
          aria-label="Create new blog"
        >
          <FileText className="w-5 h-5 mr-2" />
          Create New Blog
        </Link>
      </Button>

      {blogs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 text-sm">No blogs found.</p>
        </motion.div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  {['Title', 'Excerpt', 'Status', 'Categories', 'Tags', 'Likes', 'Shares', 'Comments', 'Read Time', 'Featured', 'Actions'].map((header) => (
                    <TableHead key={header} className="text-xs sm:text-sm">
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <motion.tr
                    key={blog.id}
                    className="hover:bg-gray-50"
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    transition={{ duration: 0.15 }}
                  >
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.title || 'N/A'}</TableCell>
                    <TableCell className="text-xs sm:text-sm max-w-xs break-words">{blog.excerpt || 'No excerpt'}</TableCell>
                    <TableCell className="text-xs sm:text-sm capitalize">
                      <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                        {blog.status || 'N/A'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.category?.join(', ') || 'N/A'}</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.tags?.join(', ') || 'N/A'}</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.likes || 0}</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.shares || 0}</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.comments || 0}</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.read_time || 0} min</TableCell>
                    <TableCell className="text-xs sm:text-sm whitespace-nowrap">{blog.is_featured ? 'Yes' : 'No'}</TableCell>
                    <TableCell className="flex flex-col sm:flex-row gap-2">
                      {[
                        { to: `/admin/blog/edit/${blog.id}`, icon: Edit, label: 'Edit', color: 'text-gray-900 hover:text-gray-700' },
                        { to: `/admin/blog/${blog.id}`, icon: Eye, label: 'View', color: 'text-gray-900 hover:text-gray-700' },
                        { onClick: () => {}, icon: Trash2, label: 'Delete', color: 'text-red-600 hover:text-red-800', isDelete: true },
                        { onClick: () => handleLike(blog.id), icon: Heart, label: 'Like', color: 'text-gray-900 hover:text-gray-700' },
                        { onClick: () => handleShare(blog.id), icon: Share2, label: 'Share', color: 'text-gray-900 hover:text-gray-700' },
                      ].map(({ to, onClick, icon: Icon, label, color, isDelete }, index) => (
                        isDelete ? (
                          <AlertDialog key={index}>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`${color} text-xs sm:text-sm flex items-center p-1 sm:p-2`}
                                aria-label={`Delete ${blog.title}`}
                              >
                                <Icon className="w-4 h-4 mr-1" />
                                <span className="hidden sm:inline">{label}</span>
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Blog</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete "{blog.title}"? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogAction variant="outline">Cancel</AlertDialogAction>
                                <AlertDialogAction onClick={() => handleDelete(blog.id, blog.title)}>
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ) : to ? (
                          <Button key={index} variant="ghost" size="sm" asChild>
                            <Link
                              to={to}
                              className={`${color} text-xs sm:text-sm flex items-center p-1 sm:p-2`}
                              aria-label={`${label} ${blog.title}`}
                            >
                              <Icon className="w-4 h-4 mr-1" />
                              <span className="hidden sm:inline">{label}</span>
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            onClick={onClick}
                            className={`${color} text-xs sm:text-sm flex items-center p-1 sm:p-2`}
                            aria-label={`${label} ${blog.title}`}
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline">{label}</span>
                          </Button>
                        )
                      ))}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title || 'N/A'}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{blog.excerpt || 'No excerpt'}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Status:</span> {blog.status || 'N/A'}</div>
                  <div><span className="font-medium">Categories:</span> {blog.category?.join(', ') || 'N/A'}</div>
                  <div><span className="font-medium">Tags:</span> {blog.tags?.join(', ') || 'N/A'}</div>
                  <div><span className="font-medium">Likes:</span> {blog.likes || 0}</div>
                  <div><span className="font-medium">Shares:</span> {blog.shares || 0}</div>
                  <div><span className="font-medium">Comments:</span> {blog.comments || 0}</div>
                  <div><span className="font-medium">Read Time:</span> {blog.read_time || 0} min</div>
                  <div><span className="font-medium">Featured:</span> {blog.is_featured ? 'Yes' : 'No'}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { to: `/admin/blog/edit/${blog.id}`, icon: Edit, label: 'Edit', color: 'text-gray-900 hover:text-gray-700' },
                    { to: `/admin/blog/${blog.id}`, icon: Eye, label: 'View', color: 'text-gray-900 hover:text-gray-700' },
                    { onClick: () => {}, icon: Trash2, label: 'Delete', color: 'text-red-600 hover:text-red-800', isDelete: true },
                    { onClick: () => handleLike(blog.id), icon: Heart, label: 'Like', color: 'text-gray-900 hover:text-gray-700' },
                    { onClick: () => handleShare(blog.id), icon: Share2, label: 'Share', color: 'text-gray-900 hover:text-gray-700' },
                  ].map(({ to, onClick, icon: Icon, label, color, isDelete }, index) => (
                    isDelete ? (
                      <AlertDialog key={index}>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`${color} text-sm flex items-center p-2`}
                            aria-label={`Delete ${blog.title}`}
                          >
                            <Icon className="w-5 h-5 mr-1" />
                            {label}
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Blog</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{blog.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogAction variant="outline">Cancel</AlertDialogAction>
                            <AlertDialogAction onClick={() => handleDelete(blog.id, blog.title)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : to ? (
                      <Button key={index} variant="ghost" size="sm" asChild>
                        <Link
                          to={to}
                          className={`${color} text-sm flex items-center p-2`}
                          aria-label={`${label} ${blog.title}`}
                        >
                          <Icon className="w-5 h-5 mr-1" />
                          {label}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={onClick}
                        className={`${color} text-sm flex items-center p-2`}
                        aria-label={`${label} ${blog.title}`}
                      >
                        <Icon className="w-5 h-5 mr-1" />
                        {label}
                      </Button>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default BlogList;