import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import {
  FileText,
  Edit,
  Eye,
  Trash2,
  Heart,
  Share2,
  AlertCircle,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  getAllBlogs,
  deleteBlog,
  incrementLikes,
} from "../../../services/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getAllBlogs();
        if (response.data && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setBlogs([]);
          setError("Unexpected data format received from server");
        }
      } catch (err) {
        setError("Failed to fetch blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [navigate, token]);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id, token);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      setError("Failed to delete blog");
    }
  };

  const handleLike = async (id) => {
    const previousBlogs = [...blogs];
    setBlogs(blogs.map((b) => b.id === id ? { ...b, likes: (b.likes || 0) + 1 } : b));
    try {
      await incrementLikes(id);
    } catch (err) {
      setBlogs(previousBlogs);
      setError("Failed to like blog");
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category?.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">All Blogs</h1>
            <p className="text-gray-500 text-sm">Manage your published and draft stories ({blogs.length} total)</p>
          </div>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link to="/admin/blog/create" className="gap-2">
            <Edit className="w-4 h-4" />
            Create New Blog
          </Link>
        </Button>
      </div>

      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        <Input 
          placeholder="Search by title or category..." 
          className="pl-10 h-12 bg-white border-gray-200 focus:ring-blue-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {filteredBlogs.length === 0 ? (
        <div className="bg-white p-12 rounded-xl border text-center space-y-3">
          <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-400">
            <Search className="w-8 h-8" />
          </div>
          <p className="text-gray-500 font-medium">{searchTerm ? "No blogs match your search" : "No blogs available yet"}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="font-semibold text-gray-700">Author & Title</TableHead>
                  <TableHead className="font-semibold text-gray-700 w-[300px]">Excerpt</TableHead>
                  <TableHead className="font-semibold text-gray-700 text-center">Status</TableHead>
                  <TableHead className="font-semibold text-gray-700 text-center">Engagement</TableHead>
                  <TableHead className="font-semibold text-gray-700 text-right pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBlogs.map((blog) => (
                  <TableRow key={blog.id} className="hover:bg-blue-50/30 transition-colors">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 line-clamp-1">{blog.title}</span>
                        <span className="text-xs text-blue-600 font-medium">By {blog.author || "Unknown"}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-xs text-gray-500 italic line-clamp-2 leading-relaxed">
                        {blog.excerpt || "No summary provided..."}
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={blog.status === "published" ? "default" : "secondary"} className="capitalize px-3 py-0.5">
                        {blog.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-3 text-gray-500">
                        <span className="flex items-center gap-1 text-[11px]"><Heart className="w-3 h-3 text-red-400" /> {blog.likes || 0}</span>
                        <span className="flex items-center gap-1 text-[11px]"><Share2 className="w-3 h-3 text-blue-400" /> {blog.shares || 0}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 text-blue-600">
                          <Link to={`/admin/blog/edit/${blog.id}`}><Edit className="w-4 h-4" /></Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0 text-gray-500">
                          <Link to={`/admin/blog/${blog.id}`}><Eye className="w-4 h-4" /></Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete this post?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently remove "{blog.title}". This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogAction variant="outline" className="border-none">Cancel</AlertDialogAction>
                              <AlertDialogAction onClick={() => handleDelete(blog.id)} className="bg-red-600 hover:bg-red-700">Delete Permanently</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="p-4 bg-white active:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={blog.status === "published" ? "default" : "secondary"} className="text-[10px] h-5">
                    {blog.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Link to={`/admin/blog/edit/${blog.id}`} className="p-1 text-blue-600"><Edit className="w-4 h-4" /></Link>
                    <Link to={`/admin/blog/${blog.id}`} className="p-1 text-gray-500"><Eye className="w-4 h-4" /></Link>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 leading-tight">{blog.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                   <div className="flex gap-4 text-gray-400">
                    <span className="flex items-center gap-1 text-xs"><Heart className="w-3 h-3" /> {blog.likes || 0}</span>
                    <span className="flex items-center gap-1 text-xs"><Share2 className="w-3 h-3" /> {blog.shares || 0}</span>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-red-500 text-xs">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader><AlertDialogTitle>Confirm Delete</AlertDialogTitle></AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction variant="outline">Back</AlertDialogAction>
                        <AlertDialogAction onClick={() => handleDelete(blog.id)} className="bg-red-600">Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BlogList;
