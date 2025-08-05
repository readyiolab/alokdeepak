import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getBlogById, incrementLikes, incrementShares, createComment, deleteComment, getCommentsByBlogId } from '../../../services/api';
import { motion } from 'framer-motion';
import { Edit, ArrowLeft, Heart, Share2, Trash2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    const fetchBlogAndComments = async () => {
      try {
        const [blogResponse, commentsResponse] = await Promise.all([
          getBlogById(id),
          getCommentsByBlogId(id),
        ]);
        setBlog(blogResponse.data);
        setComments(commentsResponse.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch blog or comments');
        console.error('Error fetching blog/comments:', err);
      }
    };
    fetchBlogAndComments();
  }, [id, navigate, token]);

  const handleLike = async () => {
    try {
      await incrementLikes(id);
      setBlog((prev) => ({ ...prev, likes: prev.likes + 1 }));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to like blog');
    }
  };

  const handleShare = async () => {
    try {
      await incrementShares(id);
      setBlog((prev) => ({ ...prev, shares: prev.shares + 1 }));
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to share blog');
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setError('Comment cannot be empty');
      return;
    }
    try {
      const userId = localStorage.getItem('userId');
      await createComment(id, { user_id: userId, content: newComment }, token);
      const commentsResponse = await getCommentsByBlogId(id);
      setComments(commentsResponse.data);
      setBlog((prev) => ({ ...prev, comments: prev.comments + 1 }));
      setNewComment('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to post comment');
    }
  };

  const handleCommentDelete = async (commentId) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await deleteComment(id, commentId, token);
        setComments(comments.filter((comment) => comment.id !== commentId));
        setBlog((prev) => ({ ...prev, comments: prev.comments - 1 }));
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to delete comment');
      }
    }
  };

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 text-gray-900 text-center">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!error && 'Loading...'}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto p-4 sm:p-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">{blog.title}</h1>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
          />
        )}
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{blog.excerpt}</p>
        <div
          className="prose prose-sm sm:prose max-w-none text-gray-800 mb-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <div className="mt-6 space-y-2 text-sm sm:text-base">
          <p className="text-gray-900">
            <strong>Author:</strong> {blog.author}
          </p>
          {blog.author_bio && (
            <p className="text-gray-900">
              <strong>Author Bio:</strong> {blog.author_bio}
            </p>
          )}
          <p className="text-gray-900">
            <strong>Status:</strong> {blog.status}
          </p>
          <p className="text-gray-900">
            <strong>Categories:</strong> {Array.isArray(blog.category) ? blog.category.join(', ') : blog.category}
          </p>
          <p className="text-gray-900">
            <strong>Tags:</strong> {Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags}
          </p>
          <p className="text-gray-900">
            <strong>Read Time:</strong> {blog.read_time} minutes
          </p>
          <p className="text-gray-900">
            <strong>Featured:</strong> {blog.is_featured ? 'Yes' : 'No'}
          </p>
          <p className="text-gray-900">
            <strong>Likes:</strong> {blog.likes}
          </p>
          <p className="text-gray-900">
            <strong>Shares:</strong> {blog.shares}
          </p>
          <p className="text-gray-900">
            <strong>Comments:</strong> {blog.comments}
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          {isAdmin && (
            <Link
              to={`/admin/blog/edit/${blog.id}`}
              className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <Edit className="w-5 h-5 mr-2" />
              Edit
            </Link>
          )}
          <button
            onClick={handleLike}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <Heart className="w-5 h-5 mr-2" />
            Like
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </button>
          <button
            onClick={() => navigate('/admin/blogs')}
            className="inline-flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comments</h2>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              rows="4"
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Post Comment
            </button>
          </form>
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-4">
                  <p className="text-gray-800 text-sm">{comment.content}</p>
                  <p className="text-gray-600 text-xs">
                    By User #{comment.user_id} on {new Date(comment.created_at).toLocaleString()}
                  </p>
                  {isAdmin && (
                    <button
                      onClick={() => handleCommentDelete(comment.id)}
                      className="text-red-600 hover:text-red-800 text-xs font-medium flex items-center mt-2"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No comments yet.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;